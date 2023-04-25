import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    open: true,
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/h5api': {
        target: 'https://dengcaocao.github.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/h5api/, ''),
      }
    }
  }
})
