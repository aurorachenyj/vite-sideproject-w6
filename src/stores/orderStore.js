import { defineStore } from "pinia";
import axios from "axios";
import Toast from "../utils/Toast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("orderStore", {
  state: () => ({
    orderData: null,
    totalPage: null,
    test: "測試測試",
  }),

  action: {
    getTotalPage() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=1`)
        .then((res) => {
          // this.isLoading = false;

          Toast.fire({
            icon: "success",
            title: "成功取得資料",
          });

          // this.allOrderList = res.data;
          this.totalPage = res.data.pagination.total_pages;

          console.log(this.totalPage);
        })
        .catch((err) => {
          // this.isLoading = false;
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
  getters: {
    page: ({ totalPage }) => {
      return totalPage;
    },
  },
});
