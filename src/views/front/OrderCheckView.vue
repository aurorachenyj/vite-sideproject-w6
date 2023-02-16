<template>
  送出訂單後 顯示
  <br />
  <br />

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h4 class="text-center mb-3">訂單內容</h4>

        <table class="table" v-if="orderProductList[0]">
          <thead>
            <tr>
              <th>課程名稱</th>
              <th class="text-end">課程狀態</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in orderProductList" :key="item.product.id">
              <td>{{ item.product.title }}</td>
              <td class="text-end">後台待補</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <table class="table" v-if="currentOrderData.user">
            <thead>
              <th class="text-center h4 pb-3" scope="col" colspan="2">
                訂購者資訊
              </th>
            </thead>

            <tbody>
              <tr scope="row">
                <th>姓名</th>
                <td class="text-end">{{ currentOrderData.user.name }}</td>
              </tr>
              <tr scope="row">
                <th>手機</th>
                <td class="text-end">{{ currentOrderData.user.tel }}</td>
              </tr>
              <tr scope="row">
                <th>信箱</th>
                <td class="text-end">{{ currentOrderData.user.email }}</td>
              </tr>
              <tr scope="row">
                <th>付款方式</th>
                <td class="text-end">{{ currentOrderData.user.payment }}</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end">
            <a href="#/" class="btn btn-outline-primary my-5"> 回首頁 </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      currentOrderData: {},
      orderProductList: [],
    };
  },
  mounted() {
    this.getCurrentOrder();
    // this.getAllOrderList();
  },
  methods: {
    getAllOrderList() {
      console.log("hhh");

      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/orders`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getCurrentOrder() {
      const { id } = this.$route.params;

      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.currentOrderData = res.data.order;
          this.orderProductList = Object.values(this.currentOrderData.products);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
