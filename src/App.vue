<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-100 font-sans">
    <header class="sticky top-0 z-50 bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-left">
          <h1 class="text-2xl font-bold text-gray-800">RG</h1>
        </div>
        <nav class="flex space-x-4">
          <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="nav-link relative px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out rounded-md hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {{ item.label }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </router-link>
        </nav>
        <button 
          @click="toggleLanguage" 
          class="translate-btn group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
        <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        <span class="relative">{{ $t('translateButton') }}</span>
        </button>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>

    <footer class="bg-white py-8 mt-auto border-t border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-gray-600">WeChat:</span>
              <span class="font-medium">guang-rich</span>
            </div>
          </div>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/richard.guang/" target="_blank" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@rizzarddd" target="_blank" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/richard-guang/" target="_blank" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.youtube.com/@richardguang" target="_blank" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
          <a href="tel:+1(718)4967914" class="text-gray-600 hover:text-gray-900">+1 (718) 496 7914</a>
          <a href="mailto:rguang@elliman.com" class="text-gray-600 hover:text-gray-900">RGUANG@ELLIMAN.COM</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
  name: "App",
  setup() {
    const { t, locale } = useI18n()
    const store = useStore()

    const navItems = computed(() => [
      { label: t('homeLink'), route: '/' },
      { label: t('aboutLink'), route: '/about' },
      { label: t('listingsLink'), route: '/listings' },
      { label: t('foreignInvestorGuideLink'), route: '/foreign-investor-guide' },
      { label: t('neighborhoodGuideLink'), route: '/neighborhood-guide' },
      { label: t('contactLink'), route: '/contact' }
    ])

    const toggleLanguage = () => {
      const newLanguage = locale.value === 'en' ? 'zh' : 'en'
      locale.value = newLanguage
      store.dispatch('changeLanguage', newLanguage)
    }

    return {
      navItems,
      toggleLanguage
    }
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer components {
  .nav-link {
    @apply text-gray-700 font-medium px-3 py-2 rounded-md transition duration-300 ease-in-out;
  }
  .nav-link:hover {
    @apply bg-gray-200;
  }
}
</style>