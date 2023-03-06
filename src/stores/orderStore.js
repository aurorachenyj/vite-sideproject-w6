import { defineStore } from "pinia";
import axios from "axios";
import Toast from "../utils/Toast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("orderStore", {
  //   inject: ["saveToOrderStore"],
  //   mounted() {
  //     this.orderData = this.saveToOrderStore;
  //   },
  state: () => ({
    orderData: null,
    testtttt: "測試測試",
  }),

  action: {
    saveStudentNumData(data) {
      this.orderData = data;
      //   console.log(this.orderData);
    },
  },
  getters: {},
});
