import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/pairAPIHackathon/", // Set this to your repository name for GitHub Pages
});
