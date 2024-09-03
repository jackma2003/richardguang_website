<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8">{{ $t('foreignInvestorGuide.title') }}</h1>
      
      <p class="text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center">
        {{ $t('foreignInvestorGuide.introduction') }}
      </p>

      <div class="grid gap-12 md:grid-cols-2">
        <section v-for="(section, index) in sections" :key="index" class="bg-white rounded-lg shadow-xl p-8 transform transition duration-500 hover:scale-105">
          <div class="flex items-center mb-4">
            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              {{ index + 1 }}
            </div>
            <h2 class="text-2xl font-semibold text-gray-900">{{ $t(`foreignInvestorGuide.sections.${section}.title`) }}</h2>
          </div>
          <p class="text-gray-700">
            {{ $t(`foreignInvestorGuide.sections.${section}.content`) }}
          </p>
        </section>
      </div>

      <section class="mt-16 bg-white rounded-lg shadow-xl p-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4 text-center">{{ $t('foreignInvestorGuide.contactInfo.title') }}</h2>
        <p class="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          {{ $t('foreignInvestorGuide.contactInfo.content') }}
        </p>
        <div class="flex justify-center">
          <a href="/contact" class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
            {{ $t('foreignInvestorGuide.contactButton') }}
            <svg class="ml-3 -mr-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForeignInvestorGuide',
  setup() {
    const sections = [
      'whyInvest',
      'understandingMarket',
      'personalizedGuidance',
      'financialAnalysis',
      'offerAndNegotiation',
      'closingProcess'
    ];

    return {
      sections
    };
  }
}
</script>