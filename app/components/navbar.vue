<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <div class="mx-auto max-w-6xl px-6">
      <nav
        class="navbar-glass flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300"
        :class="scrolled ? 'shadow-2xl' : ''"
      >
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 group">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
            AN
          </div>
          <span class="font-bold text-white text-lg tracking-tight hidden sm:block">
            Abigael<span class="text-cyan-400">.</span>
          </span>
        </a>

        <!-- Desktop Links -->
        <ul class="hidden lg:flex items-center gap-1 text-sm font-medium">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-200"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Right: CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/254713258583"
            target="_blank"
            rel="noopener"
            class="btn-primary-grad text-sm px-5 py-2"
          >
            Let's Talk ✨
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          @click="isOpen = !isOpen"
          class="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <span class="block h-0.5 w-6 bg-white transition-all duration-300" :class="isOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block h-0.5 w-6 bg-white transition-all duration-300" :class="isOpen ? 'opacity-0' : ''"></span>
          <span class="block h-0.5 w-6 bg-white transition-all duration-300" :class="isOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </nav>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div
          v-if="isOpen"
          class="navbar-glass mt-2 rounded-2xl p-5 shadow-2xl"
        >
          <ul class="space-y-1 mb-4">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                @click="isOpen = false"
                class="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition font-medium"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <a href="#contact" @click="isOpen = false" class="btn-primary-grad block text-center text-sm">
            Let's Talk ✨
          </a>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script lang="ts">
const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
export default { name: 'Navbar' }
</script>
