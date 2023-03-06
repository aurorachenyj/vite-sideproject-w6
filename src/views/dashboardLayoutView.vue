<!-- <style>
.navbar-hover:hover {
  border-bottom: 2px solid pink;
  /* background-color: pink; */
}

.router-link-exact-active {
  border-bottom: 2px solid pink;
  transition: all 0.3;
}

.navbar-active {
  border-bottom: 2px solid pink;
  /* background-color: pink; */
}
</style> -->

<template>
  <div class="overflow-auto">
    <nav
      class="fixed-top navbar navbar-expand-lg navbar-light bg-light text-nowrap flex-nowrap justify-content-evenly"
    >
      <RouterLink to="/admin/index" class="nav-link me-3 navbar-hover"
        >後台首頁</RouterLink
      >

      <RouterLink to="/admin/order" class="nav-link me-3 navbar-hover"
        >訂單管理</RouterLink
      >

      <RouterLink to="/admin/coupon" class="nav-link me-3 navbar-hover"
        >優惠券管理</RouterLink
      >

      <RouterLink to="/admin/courses" class="nav-link me-3"
        >課程管理</RouterLink
      >
      <RouterLink to="/admin/content" class="nav-link me-3"
        >文章管理</RouterLink
      >
      <RouterLink to="/adminLogin" class="nav-link me-3">回後台登入</RouterLink>
      <RouterLink to="/" class="nav-link me-3">回前台</RouterLink>

      <button
        class="btn btn-outline-dark btn-sm me-3"
        type="button"
        @click="adminLogout"
      >
        登出
      </button>
    </nav>
  </div>

  <!-- <aside
      class="sidebar vh-100 d-flex flex-column bg-light border-end h-100 shadow-sm"
    >
      <h5 class="p-3 text-center">募課趣-後台系統</h5>

      <div class="overflow-auto">
        <RouterLink to="/admin/index" class="ps-3 py-3 sidebar-link"
          >後台首頁</RouterLink
        >

        <RouterLink to="/admin/order" class="ps-3 py-3 sidebar-link"
          >訂單管理</RouterLink
        >
        <RouterLink to="/admin/courses" class="ps-3 py-3 sidebar-link"
          >課程管理</RouterLink
        >
        <RouterLink to="/admin/content" class="ps-3 py-3 sidebar-link"
          >文章管理</RouterLink
        >
        <RouterLink to="/adminLogin" class="ps-3 py-3 sidebar-link"
          >回後台登入頁</RouterLink
        >
        <RouterLink to="/" class="ps-3 py-3 sidebar-link"
          >回前台首頁</RouterLink
        >
      </div>

      <a class="mt-auto sidebar-link border text-center"
        ><i class="bi bi-box-arrow-left"></i> 登出</a
      >
    </aside> -->

  <main class="main-content" style="margin-top: 80px">
    <div class="container my-4">
      <div class="row gy-3">
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body pb-0">
              <h4 class="text-end">學生總數</h4>

              <p class="display-4 fw-bold pb-0 text-end">
                {{ totalStudentNum }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body pb-0">
              <h4 class="text-end">已有學生之課程數</h4>
              <p class="display-4 fw-bold pb-0 text-end">
                {{ totalClassSalesNum }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body pb-0">
              <h4 class="text-end">營業額</h4>
              <p class="display-4 fw-bold pb-0 text-end">
                {{ totalSalesMoney }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <RouterView />
    </div>
  </main>
</template>

<script>
import { mapState } from "pinia";
import orderStore from "../stores/orderStore.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      totalSalesMoney: null,
      totalStudentNum: null,
      totalClassSalesNum: null,
    };
  },
  created() {
    this.checkAdmin();
  },
  mounted() {},

  watch: {
    showFinalorderInfoData() {
      this.calcSaleData();
    },
  },

  computed: {
    ...mapState(orderStore, ["showFinalorderInfoData"]),
  },
  methods: {
    calcSaleData() {
      console.log(this.showFinalorderInfoData);

      let money = 0;

      let studentNum = 0;
      // let classSlaesNum = 0;

      // classSlaesNum =  this.showFinalorderInfoData.length
      this.showFinalorderInfoData.forEach((item) => {
        studentNum += item.classmateNum;

        if (item.fundingPrice === undefined) {
          console.log(item);
          money += item.classmateNum * item.price;
        } else {
          console.log(item);
          money += item.classmateNum * item.fundingPrice;
        }
      });

      // console.log(money);
      this.totalSalesMoney = money;
      this.totalStudentNum = studentNum;
      this.totalClassSalesNum = this.showFinalorderInfoData.length;
    },

    checkAdmin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      this.$http.defaults.headers.common["Authorization"] = token;

      this.$http
        .post(`${VITE_APP_URL}/api/user/check`)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push("/adminLogin");
          }
          // alert("管理者 您好");
        })
        .catch((err) => {
          alert("請重新登入驗證");
          this.$router.push("/adminLogin");
        });
    },
    adminLogout() {
      this.$http
        .post(`${VITE_APP_URL}/logout`)
        .then((res) => {
          alert(res.data.message);
          this.$router.push("/adminLogin");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
