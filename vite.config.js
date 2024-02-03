import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      {
        find: "@api",
        replacement: resolve(__dirname, "src/api"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils"),
      },
      {
        find: "@hooks",
        replacement: resolve(__dirname, "src/hooks"),
      },
      {
        find: "@context",
        replacement: resolve(__dirname, "src/context"),
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, "src/assets"),
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
    ],
  },
});
