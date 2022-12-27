import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@icons": resolve(__dirname, "./src/icons"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    eslintPlugin(),
    svgr({
      svgrOptions: {
        svgProps: {
          fill: "currentColor",
        },
      },
    }),
  ],
});
