import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/KamRepo/", // Upewnij się, że jest to ścieżka do twojego repozytorium
});
