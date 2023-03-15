import { defineStore } from "pinia";
import axios from "axios";
import Toast from "../utils/Toast";
import { toRaw } from "vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("frontOrderStore", {
  state: () => ({
    totalStuOrderList: [],
    finalStuOrderData: [],
  }),

  mounted() {
    // this.getStuOrderList();
  },

  actions: {
    getStuOrderList() {
      this.totalStuOrderList = [];
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/orders`)
        .then((res) => {
          const totalPage = res.data.pagination.total_pages;
          const pageArr = [];
          for (let i = 1; i <= totalPage; i++) {
            pageArr.push(i);
          }

          const apiArr = pageArr.map((item) => {
            return axios.get(
              `${VITE_APP_URL}/api/${VITE_APP_PATH}/orders?page=${item}`
            );
          });

          Promise.all(apiArr)
            .then((res) => {
              //console.log(res);

              res.forEach((item) => {
                this.totalStuOrderList.push(...item.data.orders);
              });

              //console.log(this.totalStuOrderList);
              const arr = [...toRaw(this.totalStuOrderList)];

              const orderArr = arr.map((i) => {
                return Object.values(i.products);
              });

              const orderNumArr = orderArr.flat().map((i) => {
                return {
                  classId: i.product.id,
                  classTitle: i.product.title,
                  classPrice: i.product.price,
                  classFundingPrice: i.product.funding_price,
                  classfundingTarget: i.product.funding_target,
                };
              });

              const finalOrderNumArr = Object.values(
                orderNumArr.reduce((acc, obj) => {
                  if (acc[obj.classId]) {
                    acc[obj.classId].stuNum += 1;
                  } else {
                    acc[obj.classId] = { ...obj, stuNum: 1 };
                  }
                  return acc;
                }, {})
              );

              console.log(finalOrderNumArr);

              this.finalStuOrderData = finalOrderNumArr;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    matchFundingTarget(targetId) {
      // console.log(targetId);
      // console.log(this.finalStuOrderData);

      let targetPrecent = null;

      this.finalStuOrderData.find((i) => {
        if (i.classId === targetId) {
          targetPrecent = Math.round(
            ((i.stuNum * i.classFundingPrice) / i.classfundingTarget) * 100
          );
          return true;
        } else {
          targetPrecent = 0;
        }
      });

      return targetPrecent;
    },

    matchFundingMoney(targetId) {
      // console.log(targetId);
      // console.log(this.finalStuOrderData);

      let money = null;

      this.finalStuOrderData.find((i) => {
        if (i.classId === targetId) {
          money = i.stuNum * i.classFundingPrice;
          return true;
        } else {
          money = 0;
        }
      });

      return money;
    },

    matchStuNumAndClass(targetId) {
      // console.log(targetId);
      // console.log(this.finalStuOrderData);

      let showNum = null;

      this.finalStuOrderData.find((i) => {
        if (i.classId === targetId) {
          showNum = i.stuNum;
          return true;
        } else {
          showNum = 0;
        }
      });

      return showNum;
    },
  },
  getters: {
    showFinalStuOrderData: ({ finalStuOrderData }) => {
      return finalStuOrderData;
    },
  },
});
