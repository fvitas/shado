import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [codeInspectorPlugin({ bundler: 'vite', editor: 'webstorm', hotKeys: ['altKey'] }), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
})
