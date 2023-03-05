import { defineStore } from "pinia";
import axios from "axios";
import Toast from "../utils/Toast";

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
          // alert(err.response.data.message);
        });
    },

    clearCartList() {
      this.cartListData = {};
    },

    addToCart(product_id) {
      this.loadItem = true;
      console.log(product_id);
      console.log(this.cartListData);

      const data = {
        product_id,
        qty: 1,
      };

      console.log("有跑data");

      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          // this.getAllCourse();
          this.loadItem = false;
          console.log(res.data.message);
          console.log("有跑axios");

          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          console.log("有跑最後");
        })

        .catch((err) => {
          console.log(err);
          // Toast.fire({
          //   icon: "error",
          //   title: err.response.data.message,
          // });
        });
    },
  },
  getters: {
    cartList: ({ cartListData }) => {
      return cartListData;
    },
  },
});
