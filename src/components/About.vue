<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div class="relative h-[40vh] bg-blue-600 overflow-hidden">
      <img class="w-full h-full object-cover object-center opacity-30" src="@/assets/home.png" alt="Richard Guang">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white text-center px-4">
          {{ $t('about.title') }}
        </h1>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full">
      <div class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="md:flex items-center">
            <div class="md:flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <img class="h-48 w-48 object-cover rounded-full shadow-lg mx-auto md:mx-0" src="@/assets/richard.png" alt="Richard Guang">
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('about.subtitle') }}</h2>
              <p class="text-xl text-gray-600">{{ $t('about.paragraph1') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p class="text-gray-700 mb-4">{{ $t('about.paragraph2') }}</p>
          <p class="text-gray-700">{{ $t('about.paragraph3') }}</p>
        </div>
      </div>

      <div class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">{{ $t('about.language') }}</h3>
          <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li v-for="i in 3" :key="i" class="bg-blue-100 rounded-lg p-4 text-blue-800 font-medium text-center">
              {{ $t(`about.language${i}`) }}
            </li>
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