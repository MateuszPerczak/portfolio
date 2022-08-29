import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@sections": resolve(__dirname, "./src/sections"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@animations": resolve(__dirname, "./src/animations"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    eslintPlugin(),
  ],
});
