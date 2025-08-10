import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
})
=======
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true
      }
    })
  ]
})
>>>>>>> c8b2dcf14dd8d0709ead555b98ecba327620f3ec
