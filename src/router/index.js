import {createRouter, createWebHashHistory} from 'vue-router'
import about from '@/views/about'
import index from "@/views/index";

const routes = [
    {
        path: '',
        name: 'index',
        component: index
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login")
    },
    {
        path: '/about',
        name: 'about',
        component: about,
    },
    {
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
