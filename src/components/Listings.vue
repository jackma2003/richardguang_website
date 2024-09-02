<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-6 py-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-6">{{ t('listings.title') }}</h2>
        <p class="text-xl text-gray-600 text-center mb-8">{{ t('listings.description') }}</p>
        <div class="flex justify-center">
          <a 
            href="https://www.elliman.com/newyorkcity/associate/527-a-df24061116065265311/richard-guang" 
            target="_blank"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            {{ t('listings.viewButton') }}
            <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-sm text-gray-500 text-center">
          {{ t('listings.updateNote') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'ListingsPage',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>