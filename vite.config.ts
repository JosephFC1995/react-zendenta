import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import IconsResolver from "unplugin-icons/resolver"
import AutoImport from 'unplugin-auto-import/vite'
import * as path from "path";

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/,
      ],
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
        })
      ]
    }),
    Icons({ compiler: 'jsx', jsx: 'react', }),
  ],
  resolve: {
    alias: [
      {
        find: "@", replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "~", replacement: path.resolve(__dirname, "src"),
      }
    ]
  }
})
