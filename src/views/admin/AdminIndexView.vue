<template>
  <!-- <router-view></router-view> -->

  <!-- <div class="container"> -->
  <h3 class="text-center mt-5 mb-3">開課狀態</h3>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>
  <div class="text-end"></div>
  <!-- <div class="row">
    <div class="col-12"> -->
  <div class="card">
    <table class="table" v-if="finalStuOrderData">
      <thead>
        <tr>
          <th scope="col" class="ps-5">id</th>
          <th scope="col">課程名稱</th>
          <th scope="col">同學人數</th>
          <th scope="col" class="text-end">售價</th>
          <th scope="col" class="text-end">募資優惠價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="singleInfo in finalStuOrderData" :key="singleInfo.classId">
          <td>{{ singleInfo.classId }}</td>

          <td>{{ singleInfo.classTitle }}</td>
          <td class="text-center text-danger">
            {{ singleInfo.stuNum }}
          </td>
          <td class="text-end">{{ singleInfo.classPrice }}</td>
          <td class="text-end text-danger">
            {{ singleInfo.classFundingPrice }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import orderStore from "../../stores/orderStore.js";
import { mapState } from "pinia";
import frontOrderStore from "../../stores/frontOrderStore.js";
// import { toRaw } from "vue";
// import axios from "axios";
// import Toast from "../../utils/Toast.js";

// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  watch: {
    // page() {
    //   this.getTotalOrderList(this.page);
    // },
    // sendOrderData() {
    //   this.calcClassmate();
    // },
    // showStudentNumData() {
    //   this.getOrderCourseDetail();
    // },
  },
  computed: {
    ...mapState(frontOrderStore, ["finalStuOrderData"]),
    // ...mapState(orderStore, [
    //   "page",
    //   "totalPage",
    //   "sendOrderData",
    //   "showStudentNumData",
    //   "showFinalorderInfoData",
    // ]),
  },
  methods: {
    // ...mapActions(frontOrderStore, ["getStuOrderList"]),
    // ...mapActions(orderStore, [
    //   "getTotalPage",
    //   "getTotalOrderList",
    //   "calcClassmate",
    //   "getOrderCourseDetail",
    // ]),
    // getOrderCourseDetail() {
    //   this.isLoading = true;
    //   // console.log(this.showStudentNumData);
    //   const obj = toRaw(this.showStudentNumData);
    //   const idArr = Object.keys(obj);
    //   const apiArr = idArr.map((id) => {
    //     return axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`);
    //   });
    //   Promise.all(apiArr)
    //     .then((res) => {
    //       //console.log(res.data);
    //       res.forEach((item) => {
    //         this.orderInfoData.push({
    //           ["productId"]: item.data.product.id,
    //           ["title"]: item.data.product.title,
    //           ["price"]: item.data.product.price,
    //           ["fundingPrice"]: item.data.product.funding_price,
    //         });
    //       });
    //       //console.log(this.orderInfoData);
    //       const orderInfo = [...toRaw(this.orderInfoData)];
    //       //console.log(orderInfo);
    //       const objArr = Object.entries(obj).map(([key, value]) => ({
    //         ["id"]: key,
    //         ["classmateNum"]: value,
    //       }));
    //       objArr.forEach((item) => {
    //         orderInfo.forEach((i) => {
    //           if (item.id === i.productId) {
    //             i.classmateNum = item.classmateNum;
    //           }
    //         });
    //       });
    //       console.log(orderInfo);
    //       this.finalorderInfoData = orderInfo;
    //       this.isLoading = false;
    //       Toast.fire({
    //         icon: "success",
    //         title: "成功取得開課狀況資料",
    //       });
    //     })
    //     .catch((err) => {
    //       this.isLoading = false;
    //       console.log(err);
    //     });
    // },
  },
  mounted() {
    // this.getStuOrderList();
  },
};
</script>
