import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Tools from "@/utils/tools"; //工具
import baseUrl from "@/config/baseUrl"; //baseUrl配置

//引入ant-design-vue
import antComponents from "@/config/ant-design.config";

// CSS部分
import "@/assets/css/antd.less"; //引入ant-design-vue css
import "@/assets/css/reset.css"; //清除默认样式

//部分工具挂在在Vue原型
const app = createApp(App);

app.config.globalProperties.$Tools = Tools; //工具类

app.config.globalProperties.$baseUrl = baseUrl; //基本路径

app.use(router).use(antComponents).mount("#app");

// createApp(App).mount("#app");
