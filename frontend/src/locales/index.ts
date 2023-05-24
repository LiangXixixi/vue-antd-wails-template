import { createI18n } from 'vue-i18n'
import zhCN from "@/locales/zh-CN"
import en from "@/locales/en"
import type { App } from 'vue'

const langDefault = 'zh-CN'

const i18n = createI18n({
    locale: langDefault,
    messages: {
        ...zhCN,
        ...en
    }
})

export const setupI18n = (app: App<Element>) => {
    app.use(i18n)
}