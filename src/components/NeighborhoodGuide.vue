<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-6 py-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-6">{{ t('neighborhoodGuide.title') }}</h2>
      </div>
    </div>
  </div>
</template>


<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'NeighborhoodGuide',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>