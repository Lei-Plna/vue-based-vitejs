import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

// loadEnv获取.env.development文件中的配置
const { VITE_ENTRY_DIR, VITE_TITLE, VITE_ROOT_FILE_NAME } = loadEnv('development', process.cwd())
export default defineConfig({
  plugins: [
    vue(),
    // 对比html-webpack-plugin的使用
    createHtmlPlugin({
      entry: './src' + VITE_ENTRY_DIR + VITE_ROOT_FILE_NAME,
      template: './index.html',
      inject: {
        data: {
          title: VITE_TITLE
        }
      }
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
});