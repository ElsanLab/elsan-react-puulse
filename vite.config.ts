import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
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
          dest: "themes",
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
      entry: {
        Button: resolve(__dirname, "src/components/ui/button.tsx"),
      },
      formats: ["es"],
    },
    minify: "esbuild",
    rollupOptions: {
      input: {
        index: "src/index.ts",
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
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
