import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr() // لتحسين استيراد ملفات SVG
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 4096 // حجم الحد للأصول المضمنة (بالبايت)
  },
  resolve: {
    alias: {
      '@': '/src' // ميزة المسارات المطلقة
    }
  },
  server: {
    port: 3000, // منفذ التطوير
    open: true // فتح المتصفح تلقائياً
  }
})
