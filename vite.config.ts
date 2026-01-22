import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Move it here (top level)
  base: '/prompt-engineering-portfolio/',
  
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  
})