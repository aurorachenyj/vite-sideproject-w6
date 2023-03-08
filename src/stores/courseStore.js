import { defineStore } from "pinia";
import axios from "axios";
import Toast from "../utils/Toast";
import { toRaw } from "vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("courseStore", {
  state: () => ({}),
  actions: {},
  getters: {},
});
