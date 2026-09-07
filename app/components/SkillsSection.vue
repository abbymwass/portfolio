<template>
  <section id="skills" class="py-24 px-6 bg-[#0a0e27]">
    <div class="mx-auto max-w-6xl">
      <div class="text-center mb-16 reveal">
        <div class="section-chip">Skills</div>
        <h2 class="section-title">What I Work With</h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto">A curated toolkit I've refined over years of building real-world web applications.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(category, i) in categories"
          :key="category.title"
          class="skill-card p-6 reveal"
          :style="`transition-delay:${i * 0.1}s`"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl" :style="`background:${category.color}22`">
              {{ category.icon }}
            </div>
            <h3 class="text-white font-semibold">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/30 transition group"
            >
              <span class="text-base">{{ skill.icon }}</span>
              <span class="text-slate-300 text-sm font-medium group-hover:text-white transition">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    title: 'Languages',
    icon: '💻',
    color: '#3b82f6',
    skills: [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'HTML5', icon: '🧡' },
      { name: 'CSS3', icon: '🔵' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    color: '#06b6d4',
    skills: [
      { name: 'Vue.js', icon: '💚' },
      { name: 'Nuxt', icon: '🟢' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🌊' },
      { name: 'Pinia', icon: '🍍' },
      { name: 'live.js',icon: '🎥' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    color: '#8b5cf6',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Figma', icon: '🎨' },
      { name: 'VS Code', icon: '🧩' },
      { name: 'Vercel', icon: '▲' },
    ],
  },
 
  {
    title: 'Soft Skills',
    icon: '🌟',
    color: '#ec4899',
    skills: [
      { name: 'Problem Solving', icon: '🧩' },
      { name: 'Communication', icon: '💬' },
      { name: 'Team Work', icon: '🤝' },
      { name: 'Attention to Detail', icon: '🔎' },
    ],
  },
]
</script>
