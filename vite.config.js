import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  base: "./", // This sets the base path to the root directory
  server: {
    host: true,
    port: 3000,
  },
});
