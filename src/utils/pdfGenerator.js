import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Wait for animations to complete
 * Handles both CSS animations and Framer Motion animations
 */
const waitForAnimations = (element, timeout = 3000) => {
  return new Promise((resolve) => {
    // Scroll element into view to trigger any whileInView animations
    element.scrollIntoView({ behavior: 'instant', block: 'start' });
    
    // Wait for scroll to complete and DOM to update
    setTimeout(() => {
      // Wait for CSS animations and transitions
      const animations = element.getAnimations?.() || [];
      const promises = animations.map(anim => anim.finished).filter(p => p);
      
      // Framer Motion animations typically take 1-1.5 seconds based on the variants
      // We'll wait for both CSS animations and give extra time for Framer Motion
      const framerMotionDelay = 2000; // Max duration from variants.js is 1.2s, add buffer
      const maxWait = Math.max(timeout, framerMotionDelay);
      
      // Wait for all animations or timeout, whichever comes first
      if (promises.length > 0) {
        Promise.all([
          ...promises,
          new Promise(resolve => setTimeout(resolve, maxWait))
        ])
          .then(() => resolve());
      } else {
        // No CSS animations detected, just wait for Framer Motion
        setTimeout(() => resolve(), maxWait);
      }
    }, 200); // Give time for scroll to complete
  });
};

/**
 * Pause infinite animations temporarily for PDF capture
 */
const pauseInfiniteAnimations = (element) => {
  const animations = element.getAnimations?.() || [];
  const pausedAnimations = [];
  
  animations.forEach(anim => {
    if (anim.playState === 'running') {
      // Check if it's an infinite animation
      const effect = anim.effect;
      if (effect && (effect.iterations === Infinity || effect.iterations > 1)) {
        anim.pause();
        pausedAnimations.push(anim);
      }
    }
  });
  
  return pausedAnimations;
};

/**
 * Resume animations after PDF capture
 */
const resumeAnimations = (animations) => {
  animations.forEach(anim => anim.play());
};

/**
 * Generates a PDF from a React component/element
 * @param {HTMLElement} element - The DOM element to convert to PDF
 * @param {string} filename - The name of the PDF file (default: 'projects.pdf')
 * @param {object} options - Additional options for PDF generation
 */
export const generatePDF = async (element, filename = 'projects.pdf', options = {}) => {
  try {
    // Show loading indicator (optional)
    if (options.onStart) options.onStart();

    // Store original scroll position
    const originalScrollY = window.scrollY;
    const originalScrollX = window.scrollX;

    try {
      // Wait for all animations to complete
      await waitForAnimations(element, options.animationTimeout || 3000);
      
      // Pause infinite animations (like the pulsing "Live" indicator)
      const pausedAnimations = pauseInfiniteAnimations(element);
      
      // Small delay to ensure everything is settled
      await new Promise(resolve => setTimeout(resolve, 500));

      // Configure html2canvas options
      const canvasOptions = {
        scale: 2, // Higher quality
        useCORS: true, // Allow cross-origin images
        logging: false,
        backgroundColor: options.backgroundColor || '#0a0a0a', // Dark background to match your theme
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        ...options.canvasOptions
      };

      // Convert element to canvas
      const canvas = await html2canvas(element, canvasOptions);
      const imgData = canvas.toDataURL('image/png');
      
      // Resume animations
      resumeAnimations(pausedAnimations);

      // Calculate PDF dimensions
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // A4 dimensions in mm (landscape or portrait)
      const pdfWidth = options.orientation === 'landscape' ? 297 : 210; // A4 width in mm
      const pdfHeight = options.orientation === 'landscape' ? 210 : 297; // A4 height in mm
      
      // Calculate scaling to fit page
      const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
      const scaledWidth = imgWidth * 0.264583 * ratio; // Convert px to mm
      const scaledHeight = imgHeight * 0.264583 * ratio;

      // Create PDF
      const pdf = new jsPDF({
        orientation: options.orientation || 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);

      // Handle multi-page content
      const pageHeight = pdf.internal.pageSize.getHeight();
      let heightLeft = scaledHeight;
      let position = 0;

      while (heightLeft > 0) {
        position = heightLeft - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, scaledWidth, scaledHeight);
        heightLeft -= pageHeight;
      }

      // Save PDF
      pdf.save(filename);

      // Callback on success
      if (options.onComplete) options.onComplete();
    } finally {
      // Restore original scroll position
      window.scrollTo(originalScrollX, originalScrollY);
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    if (options.onError) options.onError(error);
    else alert('Error generating PDF. Please try again.');
  }
};

