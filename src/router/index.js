import {createRouter, createWebHistory} from 'vue-router'
import mainPage from '@/pages/MainPage.vue'
import welcomePage from '@/pages/WelcomePage.vue'
import profilePage from '@/pages/ProfilePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => welcomePage
        },
        {
            path: '/main',
            name: 'main',
            component: () => mainPage
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => profilePage
        }
    ]
})

export default router
