import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/asadheidari.github.io/",
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
