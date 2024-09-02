<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <div class="px-6 py-8">
        <h1 class="text-3xl font-extrabold text-gray-900 text-center mb-8">{{ $t('foreignInvestorGuide.title') }}</h1>
        
        <p class="text-lg text-gray-700 mb-6">
          {{ $t('foreignInvestorGuide.introduction') }}
        </p>

        <div class="space-y-8">
          <section v-for="(section, index) in sections" :key="index">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ index + 1 }}. {{ $t(`foreignInvestorGuide.sections.${section}.title`) }}</h2>
            <p class="text-gray-700">
              {{ $t(`foreignInvestorGuide.sections.${section}.content`) }}
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ $t('foreignInvestorGuide.contactInfo.title') }}</h2>
            <p class="text-gray-700">
              {{ $t('foreignInvestorGuide.contactInfo.content') }}
            </p>
            <div class="mt-4 flex justify-center">
              <a href="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                {{ $t('foreignInvestorGuide.contactButton') }}
                <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
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