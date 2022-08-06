import { createApp } from 'vue'
import { routes } from './router/router'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router).mount('#app')
