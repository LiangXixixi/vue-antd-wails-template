import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from "vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import("@/views/Home/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    strict: true
})

export const setupRouter = (app: App<Element>) => {
    app.use(router)
}

export default router