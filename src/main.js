import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import store from './store'
import i18n from './i18n'

// import all web pages 
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Listings from "./components/Listings.vue"
import ForeignInvestorGuide from './components/ForeignInvestorGuide.vue'
import NeighborhoodGuide from './components/NeighborhoodGuide.vue'
import Contact from './components/Contact.vue'

// Routing for the pages
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/about", component: About},
        {path: "/listings", component: Listings},
        { path: '/foreign-investor-guide', component: ForeignInvestorGuide },
        { path: '/neighborhood-guide', component: NeighborhoodGuide },
        { path: '/contact', component: Contact },
    ]
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
