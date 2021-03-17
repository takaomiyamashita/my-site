import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Works from "./components/Works.vue"
import Contact from "./components/Contact.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/works', component: Works },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes: routes
})

export default router