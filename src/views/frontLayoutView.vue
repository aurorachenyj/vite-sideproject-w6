<template>
  <!-- <div class="container">
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    
  </div> -->

  <header class="bg-white shadow-sm sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <!-- <RouterLink to="/" class="nav-link"> -->
        <a href="#">
          <img
            src="../assets/LFlogo.svg"
            alt=""
            width="90"
            height="72"
            class="d-inline-block align-text-top"
        /></a>
        <!-- </RouterLink> -->
        <RouterLink to="/courses" class="nav-link">課程</RouterLink>

        <RouterLink to="/contents" class="nav-link">文章</RouterLink>
        <RouterLink to="/bookmark" class="nav-link">收藏</RouterLink>

        <RouterLink to="/cart">
          <div class="d-inline-block position-relative nav-link">
            <i class="bi bi-cart3 fs-3 text-dark"></i>

            <span
              v-if="cartList.carts"
              class="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartList.carts.length }}
            </span>
          </div>
        </RouterLink>

        <!-- <RouterLink class="link-dark nav-link" to="/adminLogin"
          >登入後台</RouterLink
        >
        <RouterLink class="link-dark nav-link" to="/admin/index"
          >後台首頁</RouterLink
        > -->
      </nav>
    </div>
  </header>

  <RouterView />
  <div class="bg-light">
    <footer class="footer container py-3">
      <div
        class="flex-column d-flex flex-md-row align-items-center justify-content-md-between"
      >
        <a class="navbar-brand" href="#">
          <img
            src="../assets/LFlogo.svg"
            alt=""
            width="90"
            height="72"
            class="d-inline-block align-text-top"
          />
        </a>

        <div class="div">
          <a href="" class="text-decoration-none text-dark"> 常見問題 </a>
          <a href="" class="text-decoration-none text-dark"> 使用條款 </a>
          <a href="" class="text-decoration-none text-dark"> 隱私權政策 </a>
        </div>
        <div class="text-end">
          <RouterLink
            class="link-dark me-2 text-decoration-none"
            to="/adminLogin"
            >登入後台</RouterLink
          >
          <RouterLink class="link-dark text-decoration-none" to="/admin/index"
            >後台首頁</RouterLink
          >
        </div>
        <div class="div">
          <a href="" style="font-size: 2rem; color: gray" class="me-2">
            <i class="bi bi-instagram"></i
          ></a>
          <a href="" style="font-size: 2rem; color: gray" class="me-2"
            ><i class="bi bi-facebook"></i
          ></a>
          <a href="" style="font-size: 2rem; color: gray"
            ><i class="bi bi-youtube"></i
          ></a>
        </div>
      </div>

      <p class="text-center mt-3 mb-0 text-muted">
        © 2023 Aurora Chen. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env; // 取出環境變數

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
  },
  mounted() {
    this.getCartList();
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1000);
    // this.$http
    //   .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     alert(err.response.data.message);
    //   });
  },
};
</script>
