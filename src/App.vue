<!-- App Bar -->
<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-100 font-sans">
    <header class="sticky top-0 z-50 bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-left">
          <h1 class="text-2xl font-bold text-gray-800">Richard Guang</h1>
          <!-- Everything with $t gets translated -->
          <p class="text-sm text-gray-600">{{ $t('slogan') }}</p>
        </div>
        <nav class="flex space-x-4">
          <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="nav-link">
            {{ item.label }}
          </router-link>
        </nav>
        <button 
          @click="toggleLanguage" 
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          {{ $t('translateButton') }}
        </button>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-gray-200 text-center py-4 mt-auto">
      <p>{{ $t('footerText') }}</p>
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

    // routes and translations 
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