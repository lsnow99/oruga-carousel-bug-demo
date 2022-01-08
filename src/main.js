import { createApp } from 'vue'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import App from './App.vue'

import Home from './Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const About = { template: '<div>This is supposed to be shown when clicking the links</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(Oruga)
app.use(router)
app.mount('#app');
