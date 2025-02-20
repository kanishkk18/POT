import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"), // No './src', just 'src'
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(process.cwd(), "index.html"), // Explicit input
    },
  },
});
