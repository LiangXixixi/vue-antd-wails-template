import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: true
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "wails": path.resolve(__dirname, "wailsjs")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/var.scss';"
      }
    }
  }
})
