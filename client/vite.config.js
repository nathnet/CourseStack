import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        detail: "detail.html",
        notFound: "404.html",
      },
    },
  },
});
