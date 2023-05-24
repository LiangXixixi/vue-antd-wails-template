import { defineStore } from "pinia"
import { store } from "../index"

interface AppState {
    logo: boolean
}

export const appStore = defineStore('app', {
    state: (): AppState => ({
        logo: true
    }),
    getters: {
        getLogo(): boolean{
            return this.logo
        }
    },
    actions: {
        setLogo(logoState: boolean) {
            this.logo = logoState
        }
    }
})

export const useAppStore = () => {
    return appStore(store)
}