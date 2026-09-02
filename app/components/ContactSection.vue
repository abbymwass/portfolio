<template>
  <section id="contact" class="py-24 px-6" style="background: linear-gradient(180deg, #111634 0%, #0a0e27 100%)">
    <div class="mx-auto max-w-6xl">
      <div class="text-center mb-16 reveal">
        <div class="section-chip">Contact</div>
        <h2 class="section-title">Let's Work Together</h2>
        <p class="text-white mt-3 max-w-lg mx-auto">Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.</p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Contact info -->
        <div class="lg:col-span-2 space-y-6 reveal-left">
          <div v-for="info in contactInfo" :key="info.label"
            class="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 transition">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" :style="`background:${info.color}22`">
              <span class="text-xl">{{ info.icon }}</span>
            </div>
            <div>
              <p class="text-slate-500 text-xs uppercase tracking-widest">{{ info.label }}</p>
              <p class="text-white font-medium mt-0.5">{{ info.value }}</p>
            </div>
          </div>

          <!-- Social links -->
          <div>
            <p class="text-slate-500 text-xs uppercase tracking-widest mb-4">Find me online</p>
            <div class="flex gap-3">
              <a v-for="social in socials" :key="social.name"
                :href="social.url" target="_blank" rel="noopener"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition"
                :aria-label="social.name"
                v-html="social.icon">
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="lg:col-span-3 reveal-right">
          <form @submit.prevent="submitForm" class="space-y-4 bg-[#111634]/60 border border-white/10 rounded-2xl p-8">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-slate-400 text-sm mb-2">Name</label>
                <input v-model="form.name" type="text" placeholder="Your name" class="contact-input" required />
              </div>
              <div>
                <label class="block text-slate-400 text-sm mb-2">Email</label>
                <input v-model="form.email" type="email" placeholder="your@email.com" class="contact-input" required />
              </div>
            </div>
            <div>
              <label class="block text-slate-400 text-sm mb-2">Subject</label>
              <input v-model="form.subject" type="text" placeholder="Project Inquiry / Collaboration" class="contact-input" />
            </div>
            <div>
              <label class="block text-slate-400 text-sm mb-2">Message</label>
              <textarea v-model="form.message" rows="5" placeholder="Tell me about your project..." class="contact-input resize-none" required></textarea>
            </div>
            <button type="submit" class="btn-primary-grad w-full flex items-center justify-center gap-2 text-base">
              <span v-if="!sending">Send Message</span>
              <span v-else>Sending...</span>
              <svg v-if="!sending" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
            <p class="text-center text-slate-400 text-sm mt-4">Or contact me directly:</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
              <a
                href="mailto:abbymwass35@gmail.com"
                class="btn-outline-grad w-full sm:w-auto text-center"
              >
                Email Me
              </a>
              <a
                href="https://wa.me/254713258583"
                target="_blank"
                rel="noopener"
                class="btn-primary-grad w-full sm:w-auto text-center"
              >
                WhatsApp
              </a>
            </div>
            <p v-if="success" class="text-center text-cyan-400 text-sm mt-2">✅ Message sent! I'll get back to you soon.</p>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mx-auto max-w-6xl">
      <div class="mt-20 pt-8 border-t border-white/10 text-center reveal">
        <p class="text-slate-500 text-sm">
          © {{ new Date().getFullYear() }} Abigael N. · Built with
          <span class="text-cyan-400">Nuxt 4</span> &
          <span class="text-blue-400">Tailwind CSS</span> · Deployed on Vercel
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const success = ref(false)

const emailAddress = 'abbymwass35@gmail.com'
const whatsappNumber = '+254713258583'

async function submitForm() {
  sending.value = true
  const subject = form.value.subject || 'Project Inquiry'
  const body = `Hi Abigael,%0D%0A%0D%0AMy name is ${form.value.name}.%0D%0A%0D%0A${form.value.message}%0D%0A%0D%0AYou can reach me back at ${form.value.email}.`
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${body}`
  window.open(mailtoLink, '_blank')
  sending.value = false
  success.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => success.value = false, 5000)
}

const contactInfo = [
  { icon: '📧', label: 'Email', value: emailAddress, color: '#06b6d4' },
  { icon: '📞', label: 'Phone', value: '+254 713 258 583', color: '#3b82f6' },
  { icon: '📍', label: 'Location', value: 'Nairobi, Kenya', color: '#10b981' },
  
]

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/abbymwass',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abbynje/',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
 
]
</script>
