<template>
  <section id="projects" class="py-24 px-6" style="background: linear-gradient(180deg, #111634 0%, #0a0e27 100%)">
    <div class="mx-auto max-w-6xl">
      <div class="text-center mb-12 reveal">
        <div class="section-chip">Portfolio</div>
        <h2 class="section-title">Featured Projects</h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto">A selection of projects I'm most proud of — from ideas to shipped products.</p>
      </div>

      <!-- Filter chips -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
        <button
          v-for="tag in filterTags"
          :key="tag"
          class="filter-chip"
          :class="{ active: activeFilter === tag }"
          @click="activeFilter = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Project grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in filteredProjects"
          :key="project.title"
          class="project-card reveal"
          :style="`transition-delay:${i * 0.1}s`"
        >
          <!-- Image/Color header -->
          <div
            class="h-44 relative overflow-hidden"
            :style="project.image ? `background-image: url(${project.image}); background-size: cover; background-position: center;` : `background: linear-gradient(135deg, ${project.color1}, ${project.color2})`"
          >
            <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
              {{ project.emoji }}
            </div>
            <div class="absolute inset-0 card-img-overlay-gradient"></div>
            <!-- Featured badge -->
            <div v-if="project.featured" class="absolute top-3 right-3">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold" style="background:#06b6d4;color:#042c53">⭐ Featured</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="text-white font-bold text-lg mb-2">{{ project.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span v-for="tech in project.techs" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <div class="flex gap-3">
              <a :href="project.demo" target="_blank" rel="noopener" class="btn-primary-grad text-sm py-2 px-4 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Live Demo
              </a>
              <a :href="project.repo" target="_blank" rel="noopener" class="btn-outline-grad text-sm py-2 px-4 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- More projects CTA -->
      <div class="text-center mt-10">
        <a href="/projects" class="btn-outline-grad px-6 py-3">More Projects</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const filterTags = ['All', 'Vue', 'React', 'Nuxt', 'TypeScript']
const activeFilter = ref('All')

const projects = [
  {
    title: 'Bizsure Insurance',
    description: 'A modern digital insurance experience built to make exploring and accessing insurance services simple and seamless.',
    techs: ['React', 'Vue', 'Tailwind'],
    tags: ['Vue', 'react'],
    image: '/bizsure.jpg',
    demo: 'https://surebiz.co.ke/',
    repo: 'https://github.com/abigael/bizsure',
    featured: true,
  },
  {
    title: 'Ibima Insurance',
    description: 'An insurance management dashboard focused on giving teams a clear view of sales, inventory, analytics, and daily operations.',
    techs: ['React', 'TypeScript', 'Tailwind'],
    tags: ['React', 'TypeScript'],
    image: '/ibima.png',
    demo: 'https://ibima.co.ke/',
    repo: 'https://github.com/nana-tec/IBIMA-AGENT-WEB',
    featured: false,
  },
  {
    title: 'Azil platform',
    description: 'A collaborative workspace that helps teams organize tasks, track progress, and keep projects moving efficiently.',
    techs: ['Vue', 'Pinia', 'Supabase', 'Tailwind'],
    tags: ['Vue', 'TypeScript'],
    image: '/azil.png',
    demo: 'https://azilinsurance.co.ke/',
    repo: '',
    featured: true,
  },
  {
    title: 'afrosayari gaming',
    description: 'An interactive gaming arcade created for Afro Sayari, bringing entertaining games and an engaging digital experience to players.',
    techs: ['React', 'Vue', 'CSS Animations'],
    tags: ['React'],
    image: '/afro.jpg',
    demo: 'https://afrosayari.co.ke/',
    repo: 'https://github.com/nana-tec/kidsplayzone-website',
    featured: false,
  },
  // {
  //   title: 'Grouplending Platform',
  //   description: 'A full-featured blog with Markdown support, SEO optimization, and a content management system.',
  //   techs: ['Nuxt', 'Nuxt Content', 'TypeScript'],
  //   tags: ['Nuxt', 'TypeScript'],
  
  //   demo: '#',
  //   repo: 'https://github.com/abigael/blog-platform',
  //   featured: false,
  // },
  // {
  //   title: 'KRA Landing Page',
  //   description: 'Real-time chat app with private rooms, file sharing, emoji reactions, and push notifications.',
  //   techs: ['Vue', 'Firebase', 'WebSockets'],
  //   tags: ['Vue'],
  
  //   demo: '#',
  //   repo: 'https://github.com/abigael/chat-app',
  //   featured: false,
  // },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter.value))
)
</script>
