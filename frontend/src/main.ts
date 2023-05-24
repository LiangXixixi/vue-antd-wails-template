import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from "@/router"
import { setupStore } from '@/store'
import { setupI18n } from "@/locales"
import { setupGlobComponents } from "@/components"
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import "@/permission"

const setupAll = () => {
  const app = createApp(App)

  setupI18n(app)
  setupRouter(app)
  setupStore(app)
  setupGlobComponents(app)
  app.use(Antd)

  app.mount("#app")
}

setupAll()
