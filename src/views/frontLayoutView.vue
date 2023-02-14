<template>
  <!-- <div class="container">
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    
  </div> -->

  <header>
    {{ cartList }}
    <div class="container">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light justify-content-evenly"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/courses">課程</RouterLink>
        <RouterLink to="/cart"
          >購物車
          <div class="d-inline-block position-relative">
            <i class="bi bi-cart3 fs-3 text-dark"></i>

            <span
              v-if="cartList.carts"
              class="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartList.carts.length }}
            </span>

            <!-- <span
              class="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger"
              >0
            </span> -->
          </div>
        </RouterLink>
        <RouterLink to="/contents">文章</RouterLink>
        <RouterLink to="/bookmark">收藏</RouterLink>

        <RouterLink class="link-dark" to="/adminLogin">登入後台</RouterLink>
        <RouterLink class="link-dark" to="/admin/index">後台首頁</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
