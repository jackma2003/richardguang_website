<template>
  <div class="min-h-screen">
    <!-- Full-Width Hero Section with Navigation -->
    <div class="relative h-screen w-full overflow-hidden">
      <img :src="backgroundImage" alt="Richard Guang Real Estate" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-30">
        <!-- Navigation -->
        <nav class="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <div class="flex space-x-6">
            <a v-for="item in navItems" :key="item.route" :href="item.route" class="text-white hover:text-gray-300 transition duration-300">
              {{ item.label }}
            </a>
          </div>
        </nav>
        
        <!-- Centered Text -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
            RICHARD GUANG
          </h1>
          <p class="text-xl md:text-2xl text-white font-light tracking-wider">
            REAL ESTATE
          </p>
        </div>
      </div>
    </div>

    <!-- Rest of the content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Subtitle -->
      <div class="text-center mb-12">
        <p class="text-2xl md:text-3xl text-gray-700 font-light">
          {{ t('home.subtitle') }}
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(point, index) in 3" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="`/api/placeholder/640/400`" :alt="`Feature ${index + 1}`" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ t(`home.bulletPoints.${index + 1}`) }}</h3>
            <p class="text-gray-600">{{ t('home.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Contact Button -->
      <div class="mt-12 text-center">
        <router-link 
          to="/contact" 
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          {{ t('home.contactButton') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from 'vue-i18n'
import homeImage from "@/assets/tub.jpg"

const backgroundImage = ref(homeImage)
const { t } = useI18n()
</script>

<script>
export default {
  name: 'HomePage'
}
</script>