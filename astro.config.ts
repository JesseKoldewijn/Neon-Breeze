import { defineConfig } from "astro/config"
import node from "@astrojs/node"
import vercel from "@astrojs/vercel/serverless"
import alpinejs from "@astrojs/alpinejs"
import solidJs from "@astrojs/solid-js"
import compress from "astro-compress"
const localPreview =
  process.env.LOCAL_PREVIEW !== "false" && process.env.LOCAL_PREVIEW !== undefined

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    alpinejs(),
    solidJs(),
    compress({
      Image: {
        sharp: {
          webp: true,
          avif: true,
          png: true,
        },
      },
      JavaScript: {
        terser: {
          mangle: true,
          compress: true,
        },
      },
    }),
  ],
  adapter: localPreview
    ? node({
        mode: "standalone",
      })
    : vercel({
        imagesConfig: {
          sizes: [180, 320, 640, 1280],
          domains: [],
          minimumCacheTTL: 2592000,
        },
      }),
  compressHTML: true,
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
})
