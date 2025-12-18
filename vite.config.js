import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/preethi-beauty-parlour/',
  css: {
    transformer: 'postcss',
  },
  build: {
    cssMinify: false, // 🔥 disables LightningCSS completely
  },
})
