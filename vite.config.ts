import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.react-router/**'
      ]
    }
  },
  css: {
    devSourcemap: true
  },
  preview: {
    port: 3000,
    strictPort: true
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), devtoolsJson()]
})
