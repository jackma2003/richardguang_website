import { createStore } from 'vuex'

const store = createStore({
  state: {
    language: localStorage.getItem('language') || 'en'
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language
      localStorage.setItem('language', language)
    }
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language)
    }
  },
  getters: {
    currentLanguage: state => state.language
  }
})

export default store