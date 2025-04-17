import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/fonts",
          dest: "",
        },
        {
          src: "src/themes/pro.css",
          dest: "themes/pro.css",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: "/docs/index.html",
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    cssCodeSplit: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    minify: false,
    rollupOptions: {
      input: {
        index: "src/index.ts",
      },
      output: {
        // preserveModules: true,
        // preserveModulesRoot: "src",
        // manualChunks: undefined,
        entryFileNames: "[name].js",
        // chunkFileNames: "chunks/[name].js",
        // assetFileNames: "[name].[ext]",
      },
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
        "react/jsx-runtime",
      ],
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
  esbuild: {
    keepNames: true, // Keep original function and class names
  },
});
