import { defineStore } from "pinia";
import axios from "axios";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state: () => ({
    cartListData: {},
  }),
  actions: {
    getCartList() {
      this.isLoading = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cartListData = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  getters: {
    cartList: ({ cartListData }) => {
      return cartListData;
    },
  },
});
