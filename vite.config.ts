import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { inspectAttr } from "kimi-plugin-inspect-react"

export default defineConfig({
  base: "/HM/",   // مهم جدًا لموقع GitHub Pages
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
