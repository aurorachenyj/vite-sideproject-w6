import { defineStore } from "pinia";
import axios from "axios";
import Toast from "../utils/Toast";
import { toRaw } from "vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("orderStore", {
  state: () => ({
    // orderData: null,
    totalPage: null,
    totalOrderList: [],
    courseStudentNumData: [],
    finalorderInfoData: [],
    orderInfoData: [],
    // orderNumData: [],
  }),

  mounted() {
    this.getTotalPage();
  },

  watch: {
    totalPage() {
      this.getTotalOrderList();
    },
  },

  actions: {
    getTotalPage() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=1`)
        .then((res) => {
          // this.isLoading = false;

          Toast.fire({
            icon: "success",
            title: "取得資料中",
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

    getTotalOrderList(orderTotalPage) {
      console.log(orderTotalPage);
      const pageArr = [];
      for (let i = 1; i <= orderTotalPage; i++) {
        pageArr.push(i);
      }

      const apiArr = pageArr.map((item) => {
        return axios.get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${item}`
        );
      });

      Promise.all(apiArr)
        .then((res) => {
          console.log(res);
          res.forEach((item) => {
            this.totalOrderList.push(...item.data.orders);
          });

          console.log(this.totalOrderList);
          this.calcClassmate();
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(this.totalOrderList); // 取得不分頁的全部訂單資料
    },

    calcClassmate() {
      const arr = toRaw(this.totalOrderList);
      const OrderArr = [...arr];

      const OrderListArr = [];

      OrderArr.forEach((item) => {
        const temp = Object.values(item.products);
        OrderListArr.push(...temp);
      });

      const isArr = OrderListArr.map((i) => {
        return i.product_id;
      });

      const totalClassmate = isArr.reduce((obj, id) => {
        if (obj[id]) {
          obj[id]++;
        } else {
          obj[id] = 1;
        }
        return obj;
      }, {});

      this.courseStudentNumData = totalClassmate;
      console.log(this.courseStudentNumData);
    },

    getOrderCourseDetail() {
      this.isLoading = true;
      // console.log(this.showStudentNumData);

      const obj = toRaw(this.showStudentNumData);
      const idArr = Object.keys(obj);
      const apiArr = idArr.map((id) => {
        return axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`);
      });

      Promise.all(apiArr)
        .then((res) => {
          //console.log(res.data);
          res.forEach((item) => {
            this.orderInfoData.push({
              ["productId"]: item.data.product.id,
              ["title"]: item.data.product.title,
              ["price"]: item.data.product.price,
              ["fundingPrice"]: item.data.product.funding_price,
            });
          });

          //console.log(this.orderInfoData);

          const orderInfo = [...toRaw(this.orderInfoData)];

          //console.log(orderInfo);

          const objArr = Object.entries(obj).map(([key, value]) => ({
            ["id"]: key,
            ["classmateNum"]: value,
          }));

          objArr.forEach((item) => {
            orderInfo.forEach((i) => {
              if (item.id === i.productId) {
                i.classmateNum = item.classmateNum;
              }
            });
          });

          console.log(orderInfo);
          this.finalorderInfoData = orderInfo;

          this.isLoading = false;

          Toast.fire({
            icon: "success",
            title: "成功取得開課狀況資料",
          });
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
  getters: {
    page: ({ totalPage }) => {
      return totalPage;
    },
    sendOrderData: ({ totalOrderList }) => {
      return totalOrderList;
    },

    showStudentNumData: ({ courseStudentNumData }) => {
      return courseStudentNumData;
    },
    showFinalorderInfoData: ({ finalorderInfoData }) => {
      return finalorderInfoData;
    },
  },
});
