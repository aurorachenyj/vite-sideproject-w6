import { createApp } from "vue";
import { createPinia } from "pinia";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import "./assets/all.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

import { Field, Form, ErrorMessage, configure } from "vee-validate";
import { defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";
// 匯入所有規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale("zh_TW"); // 設定預設語系

// import "./assets/main.css"; //原本的css

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.component("LoadingVue", Loading);

app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
