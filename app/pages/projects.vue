<template>
  <div class="min-h-screen py-16 px-6 bg-[#0a0e27] text-white">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8">
        <NuxtLink to="/" class="btn-outline-grad inline-flex items-center gap-2 text-sm py-2 px-4 mb-8">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </NuxtLink>
        <div class="section-chip">Archive</div>
        <h1 class="section-title">All Projects & Repositories</h1>
        <p class="text-slate-400 mt-2">Explore all my public projects, open-source work, and client repositories on GitHub.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 my-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card p-6 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
              <span v-if="project.tag" class="tech-tag">{{ project.tag }}</span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-white/10">
            <a
              v-if="project.demo && project.demo !== '#'"
              :href="project.demo"
              target="_blank"
              rel="noopener"
              class="btn-primary-grad text-xs py-1.5 px-3"
            >
              Live Demo
            </a>
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              rel="noopener"
              class="btn-outline-grad text-xs py-1.5 px-3"
            >
              View Code
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl">
        <h3 class="text-xl font-bold mb-2">Looking for more?</h3>
        <p class="text-slate-400 text-sm mb-6">Check out my full GitHub profile for upcoming projects, repositories, and contributions.</p>
        <a
          href="https://github.com/abbymwass?tab=repositories"
          target="_blank"
          rel="noopener"
          class="btn-primary-grad inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Visit GitHub Profile
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Bizsure Insurance',
    description: 'A modern digital insurance experience built to make exploring and accessing insurance services simple and seamless.',
    tag: 'Vue / React',
    demo: 'https://surebiz.co.ke/',
    repo: 'https://github.com/abigael/bizsure',
  },
  {
    title: 'Ibima Insurance',
    description: 'An insurance management dashboard focused on giving teams a clear view of sales, inventory, analytics, and daily operations.',
    tag: 'React / TypeScript',
    demo: 'https://ibima.co.ke/',
    repo: 'https://github.com/nana-tec/IBIMA-AGENT-WEB',
  },
  {
    title: 'Azil platform',
    description: 'A collaborative workspace that helps teams organize tasks, track progress, and keep projects moving efficiently.',
    tag: 'Vue / Supabase',
    demo: 'https://azilinsurance.co.ke/',
    repo: '',
  },
  {
    title: 'afrosayari gaming',
    description: 'An interactive gaming arcade created for Afro Sayari, bringing entertaining games and an engaging digital experience to players.',
    tag: 'React / CSS',
    demo: 'https://afrosayari.co.ke/',
    repo: 'https://github.com/nana-tec/kidsplayzone-website',
  },
  {
    title: 'Grouplending Platform',
    description: 'A platform built for peer and group financial collaboration with real-time tracking.',
    tag: 'Nuxt / TypeScript',
    demo: '',
    repo: 'https://github.com/abigael/blog-platform',
  },
  {
    title: 'KRA Landing Page',
    description: 'A responsive information and service portal with interactive UI components.',
    tag: 'Vue / Firebase',
    demo: '',
    repo: 'https://github.com/abigael/chat-app',
  },
]
</script>
