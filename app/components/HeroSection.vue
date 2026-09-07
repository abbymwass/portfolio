<script setup lang="ts">
import { ref, onMounted } from 'vue'

const roles = [
  'responsive web apps',
  'interactive UIs',
  'Vue.js applications',
  'beautiful interfaces',
  'performant frontends',
]

const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let typing = true
let timeout: ReturnType<typeof setTimeout>

function typeLoop() {
  const currentRole = roles[roleIndex]
  if (typing) {
    if (charIndex < currentRole.length) {
      displayedRole.value += currentRole[charIndex++]
      timeout = setTimeout(typeLoop, 90)
    } else {
      typing = false
      timeout = setTimeout(typeLoop, 1800)
    }
  } else {
    if (charIndex > 0) {
      displayedRole.value = currentRole.slice(0, --charIndex)
      timeout = setTimeout(typeLoop, 45)
    } else {
      typing = true
      roleIndex = (roleIndex + 1) % roles.length
      timeout = setTimeout(typeLoop, 300)
    }
  }
}

onMounted(() => { timeout = setTimeout(typeLoop, 500) })
</script>

<template>
  <section id="home" class="gradient-hero min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
    <!-- Glow orbs -->
    <div class="glow-orb w-96 h-96 bg-blue-500 top-20 -right-24"></div>
    <div class="glow-orb w-80 h-80 bg-cyan-400 bottom-20 -left-16" style="animation-delay:-4s"></div>

    <div class="relative z-10 mx-auto max-w-3xl w-full reveal">
      <!-- Headline -->
      <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-3 leading-tight">
        Hi, I'm <span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Abigael</span><span class="text-cyan-400">.</span>
      </h1>

      <!-- Typed subtitle -->
      <p class="text-xl md:text-2xl font-semibold text-slate-200 mb-6 h-9">
        I build <span class="text-cyan-400">{{ displayedRole }}</span><span class="typed-cursor"></span>
      </p>

      <!-- Description -->
      <p class="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
        Frontend web developer. I craft fast, accessible, and pixel-perfect web experiences
        using modern JavaScript frameworks, responsive design, and a deep attention to detail.
      </p>

      <!-- Tech chips -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <span v-for="tech in techStack" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>

      <!-- CTAs -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <a href="#projects" class="btn-primary-grad flex items-center gap-2">
          See Featured Work
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <!-- <a href="mailto:abbymwass35@gmail.com" class="btn-outline-grad">Get in Touch</a> -->
      </div>

      <!-- Stats -->
      <div class="flex flex-wrap justify-center gap-12 md:gap-16">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="hero-stat-num">{{ stat.value }}</div>
          <div class="hero-stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <!-- <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
      <span>Scroll</span>
      <div class="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5">
        <div class="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>
    </div> -->
  </section>
</template>

<script lang="ts">
const techStack = [
  'Vue.js', 'React', 'TypeScript', 'Nuxt', 'Tailwind CSS', 'JavaScript',
]
const stats = [
  { value: '3+', label: 'Years Building\nWeb Apps' },
  { value: '20+', label: 'Shipped\nProjects' },
  { value: '10+', label: 'Happy\nClients' },
]
</script>
