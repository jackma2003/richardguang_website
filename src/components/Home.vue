<script setup>
import { ref } from "vue"
import { useI18n } from 'vue-i18n'
import homeImage from "@/assets/tub.jpg"

const backgroundImage = ref(homeImage)
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-1">
            <img :src="backgroundImage" alt="Richard Guang Real Estate" class="w-full h-full object-cover" />
          </div>
          <div class="md:flex-1 p-8 flex flex-col justify-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
              {{ t('home.title') }}
            </h1>
            <p class="text-xl text-gray-700 mb-6 text-center md:text-left">
              {{ t('home.subtitle') }}
            </p>
            <div class="space-y-4">
              <p class="text-gray-600">{{ t('home.description') }}</p>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>{{ t('home.bulletPoints.1') }}</li>
                <li>{{ t('home.bulletPoints.2') }}</li>
                <li>{{ t('home.bulletPoints.3') }}</li>
              </ul>
            </div>
            <div class="mt-8 flex justify-center md:justify-start">
              <router-link 
                to="/contact" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                {{ t('home.contactButton') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>