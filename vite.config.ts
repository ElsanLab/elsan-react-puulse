import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/puulse/*.css",
          dest: "",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    cssCodeSplit: true,
    lib: {
      entry: "src/puulse/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        index: "src/puulse/index.ts",
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src/puulse",
        manualChunks: undefined,
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "[name].[ext]",
      },
      external: (id) => id.startsWith("\0") || id.includes("node_modules"),
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
});
