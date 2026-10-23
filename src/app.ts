import { createSSRApp } from 'vue'
import './index.css'
import './style.css'
import App from './App.vue'
import { createAppRouter } from './router.ts'

export function createApp(isServer = false) {
    const app = createSSRApp(App)
    const router = createAppRouter(isServer)

    app.use(router)

    return { app, router }
}