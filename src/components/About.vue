<template>
    <div class="max-w-4xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src="@/assets/richard.png" alt="Richard Guang">
          </div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('about.title') }}</h2>
            <p class="mt-2 text-gray-600 text-sm">{{ $t('about.subtitle') }}</p>
          </div>
        </div>
        <div class="px-8 py-4">
          <p class="text-gray-700 mb-4">{{ $t('about.paragraph1') }}</p>
          <p class="text-gray-700 mb-4">{{ $t('about.paragraph2') }}</p>
          <p class="text-gray-700 mb-6">{{ $t('about.paragraph3') }}</p>
          <div class="border-t border-gray-200 pt-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('about.language') }}</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>{{ $t('about.language1') }}</li>
              <li>{{ $t('about.language2') }}</li>
              <li>{{ $t('about.language3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>