import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('../views/HomeView.vue')
        },
        {
            name: 'user-dashboard',
            path: '/user-dashboard',
            component: () => import('../views/UserDashboardView.vue')
        },
    ]
})

export default router