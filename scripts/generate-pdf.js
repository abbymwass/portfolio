import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

let devServerProcess = null;
const DEV_SERVER_URL = 'http://localhost:5173';
const PDF_OUTPUT_PATH = join(projectRoot, 'my-projects.pdf');

// Function to start dev server
function startDevServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting dev server...');
    devServerProcess = spawn('npm', ['run', 'dev'], {
      cwd: projectRoot,
      shell: true,
      stdio: 'pipe'
    });

    let serverReady = false;
    const timeout = setTimeout(() => {
      if (!serverReady) {
        reject(new Error('Dev server failed to start within 30 seconds'));
      }
    }, 30000);

    devServerProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      if (output.includes('Local:') || output.includes('localhost')) {
        serverReady = true;
        clearTimeout(timeout);
        // Give server a moment to fully start
        setTimeout(() => resolve(), 3000);
      }
    });

    devServerProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    devServerProcess.on('error', (error) => {
      clearTimeout(timeout);
      reject(error);
    });
  });
}

// Function to check if server is already running
async function checkServerRunning() {
  try {
    const response = await fetch(DEV_SERVER_URL);
    return response.ok;
  } catch {
    return false;
  }
}

// Function to generate PDF
async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    protocolTimeout: 120000 // 2 minutes timeout
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('Loading page...');
    await page.goto(DEV_SERVER_URL, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });

    // Wait for React to render
    await page.waitForSelector('#projects', { timeout: 10000 });
    console.log('Projects section found!');

    // Scroll to projects section and wait
    await page.evaluate(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });

    // Wait for scroll to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    // Wait for animations to complete
    console.log('Waiting for animations to complete...');
    // Wait for fade-in animations (1.2s duration + buffer)
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Additional wait to ensure everything is settled
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Wait for all images to load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            setTimeout(resolve, 5000); // Timeout after 5s
          });
        })
      );
    });

    // Get the projects container element
    const projectsElement = await page.$('#projects');
    if (!projectsElement) {
      throw new Error('Projects section not found');
    }

    console.log('Generating PDF...');
    
    // Generate PDF using Puppeteer
    // This captures the full page content (not just viewport)
    // Since we scrolled to projects, it will be included
    await page.pdf({
      path: PDF_OUTPUT_PATH,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });
    
    console.log('PDF generated successfully!');

    console.log(`✅ PDF saved to: ${PDF_OUTPUT_PATH}`);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Main function
async function main() {
  let serverStarted = false;
  
  try {
    // Check if server is already running
    const isRunning = await checkServerRunning();
    
    if (!isRunning) {
      console.log('Dev server not running, starting it...');
      await startDevServer();
      serverStarted = true;
      console.log('Dev server started!');
    } else {
      console.log('Dev server already running!');
    }

    // Wait a bit more to ensure everything is ready
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate PDF
    await generatePDF();

    console.log('\n🎉 PDF generation complete!');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  } finally {
    // Clean up: stop dev server if we started it
    if (serverStarted && devServerProcess) {
      console.log('\nStopping dev server...');
      devServerProcess.kill();
    }
  }
}

// Run
main();

