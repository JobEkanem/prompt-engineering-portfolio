import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react(),tailwindcss(), ],
  define: {
    // This tells the browser that __BASE_PATH__ is just an empty string for now
    '__BASE_PATH__': JSON.stringify('') 
  }
})
