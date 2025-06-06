import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      cache: {
        enabled: true,
        dir: './node_modules/.cache/imagetools',
        retention: 3600
      },
      defaultDirectives: (url) => {
        if (url.searchParams.has('orgteam')) {
          return new URLSearchParams("w=300;600;&format=avif;webp&as=picture")
        }
        return new URLSearchParams();
      }
    })
  ],
})
