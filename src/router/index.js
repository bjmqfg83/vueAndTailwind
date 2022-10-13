import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    { path: '/', component: import("@/views/class1.vue") },
    { path: '/class1', redirect:'/' },
    { path: '/class2', component: import("@/views/class2.vue") },
    { path: '/class3', component: import("@/views/class3.vue") },
    { path: '/class4', component: import("@/views/class4.vue") },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;