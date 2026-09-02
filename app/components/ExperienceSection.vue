<template>
  <section id="experience" class="py-24 px-6 bg-[#0a0e27]">
    <div class="mx-auto max-w-6xl">
      <div class="text-center mb-16 reveal">
        <div class="section-chip">Career</div>
        <h2 class="section-title">Experience & Education</h2>
        <p class="text-slate-400 mt-3">My professional journey and academic background.</p>
      </div>

      <div class="timeline">
        <div
          v-for="(item, i) in timeline"
          :key="item.title"
          class="timeline-item reveal"
          :style="`transition-delay:${i * 0.15}s`"
        >
          <div class="timeline-dot"></div>

          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span class="text-xs font-semibold text-cyan-400 tracking-wide uppercase">{{ item.period }}</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-medium"
              :class="item.type === 'work' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'">
              {{ item.type === 'work' ? '💼 Work' : '🎓 Education' }}
            </span>
          </div>

          <h3 class="text-white font-bold text-lg mt-1">{{ item.title }}</h3>
          <p class="text-cyan-400 font-semibold text-sm">{{ item.company }}</p>
          <p class="text-slate-400 text-sm mt-3 leading-relaxed">{{ item.description }}</p>

          <ul v-if="item.bullets" class="mt-3 space-y-1.5">
            <li v-for="b in item.bullets" :key="b" class="flex items-start gap-2 text-slate-400 text-sm">
              <span class="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
              {{ b }}
            </li>
          </ul>

          <div v-if="item.techs" class="flex flex-wrap gap-1.5 mt-4">
            <span v-for="t in item.techs" :key="t" class="tech-tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timeline = [
  {
    type: 'work',
    period: '2026 – Present',
    title: 'Junior Frontend Developer',
    company: 'Value Chain Factory· Nairobi, Kenya',
    description: 'Building and maintaining web applications for clients across various industries.',
    bullets: [
      'Developed responsive UIs using Vue 3 and Tailwind CSS',
      'Collaborated with design team to implement pixel-perfect interfaces',
      'Improved app performance by 40% through code splitting and lazy loading',
      
    ],
   techs: ['Javascript', 'mysql/sql', 'html/css', 'php', 'react', 'vue', 'nuxt' ,'elixir'],
  },
  {
    type: 'work',
    period: '2024 – 2026',
    title: 'Frontend developer',
    company: 'Nanatec ltd · onsite',
    description: 'Assisted in building the company\'s web platform and internal tools.',
    bullets: [
      'Built reusable component library used across 3 products',
      'Integrated third-party APIs including Stripe and Twilio',
      'Wrote unit tests increasing code coverage from 40% to 75%',
    ],
    techs: ['Javascript', 'mysql/sql', 'html/css', 'php', 'react', 'vue', 'node','react hooks','bootstrap'],
  },
  {
    type: 'education',
    period: '2024-2025',
    title: 'software engineering',
    company: 'Nairobi Institute of Technology',
    description: 'Graduated with honors. Focused on software engineering and web technologies.',
    techs: ['Javascript', 'mysql/sql', 'html/css', 'php', 'react', 'vue', 'nuxt'],
  },

  {
    type: 'education',
    period: '2021-2023',
    title: 'Nursing ',
    company: 'Intership  at Radiant maternity hospital',
  },
]
</script>
