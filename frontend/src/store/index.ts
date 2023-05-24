import  { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

const store = createPinia()

store.use(createPersistedState({
    storage: localStorage
}))

export const setupStore = (app: App<Element>) => {
    app.use(store)
}

export { store }
