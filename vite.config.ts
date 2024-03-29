import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@data": resolve(__dirname, "./src/data"),
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
