import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable network access
    host: true,
    // Optionally, specify a custom port
    port: 5173, // or any other desired port
  },
})
