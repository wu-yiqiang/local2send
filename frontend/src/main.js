import { createApp } from 'vue';
import "virtual:svg-icons-register";
import Router from "./router/index";
import App from './App.vue';
import { pinia } from "./store/index";
import './style/index.scss'
import init from './init'
const app = createApp(App)
app.use(pinia).use(init).use(Router).mount("#app");