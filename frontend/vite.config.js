import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import svgLoader from "vite-svg-loader";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from 'path'
const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig(({ command, mode }) => {
  return {
    // 项目插件
    plugins: [
      vue(),
      svgLoader(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [pathResolve("src/assets/icon/svg/")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1025,
        algorithm: "gzip",
        ext: ".gz",
      }),
    ],
    // 基础配置
    base: "./",
    publicDir: "public",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@/": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/style/mixin.scss"; @import "src/style/variable.scss";`,
        },
      },
      postcss: {
        plugins: [
          require("autoprefixer"),
          require("postcss-px-to-viewport")({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 980, //视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 650, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            propList: ["*"],
            unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: [".ignore", ".hairlines"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: true, // 允许在媒体查询中转换`px`
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      brotliSize: false,
      sourcemap: false,
      minify: "terser",
      terserOptions: {
        compress: {
          // 生产环境去除console及debug
          drop_console: false,
          drop_debugger: true,
        },
      },
    },
  };
})


