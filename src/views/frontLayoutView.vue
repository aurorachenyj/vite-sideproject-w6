<template>
  <!-- <div class="container">
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    
  </div> -->
  <!-- header -->

  <header class="bg-white shadow-sm sticky-top" style="z-index: 2000">
    <div class="container">
      <nav
        class="navbar navbar-expand-lg navbar-light justify-content-between align-items-center"
      >
        <a href="#">
          <img
            src="../assets/LFlogo.svg"
            alt=""
            width="90"
            height="72"
            class="d-inline-block align-text-top me-5"
        /></a>

        <div class="d-flex">
          <RouterLink
            to="/bookmark"
            class="nav-link ms-auto me-3 d-lg-none fw-bold"
          >
            <i class="bi bi-bookmark-heart fs-3 text-muted"></i>
          </RouterLink>

          <RouterLink
            to="/cart"
            class="nav-link ms-auto me-3 d-lg-none fw-bold"
          >
            <div class="d-inline-block position-relative nav-link">
              <i class="bi bi-cart3 fs-3 text-muted"></i>

              <span
                v-if="cartList.carts"
                class="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartList.carts.length }}
              </span>
            </div>
          </RouterLink>

          <!-- BUTTON -->
          <button
            class="navbar-toggler border-0 p-0"
            data-bs-toggle="collapse"
            data-bs-target="#burgerNavbar"
          >
            <i class="bi bi-patch-plus text-muted fs-3"></i>
          </button>
        </div>

        <!--主角 MENU-->
        <div class="collapse navbar-collapse" id="burgerNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <RouterLink
                to="/courses"
                class="nav-link text-dark fw-bold me-5 dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                >探索課程</RouterLink
              >

              <div class="dropdown-menu">
                <!-- <RouterLink to="/courses" class="dropdown-item" href="#"
                  >所有課程</RouterLink
                > -->
                <a class="dropdown-item" href=".#/courses">所有課程</a>
                <a class="dropdown-item" href=".#/courses">語言</a>

                <a class="dropdown-item" href="#">藝術</a>
                <a class="dropdown-item" href="#">攝影</a>
                <a class="dropdown-item" href="#">商業</a>
                <a class="dropdown-item" href="#">投資理財</a>
              </div>
            </li>

            <li class="nav-item">
              <RouterLink to="/contents" class="nav-link text-dark fw-bold me-5"
                >讀好文</RouterLink
              >
            </li>

            <form class="ms-0 ms-lg-5 me-lg-3">
              <div class="input-group me-3">
                <input
                  class="form-control"
                  type="search"
                  placeholder="想學什麼?"
                  aria-label="Search"
                />
                <button class="btn btn-outline-secondary btn-sm" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>

            <RouterLink
              to="/bookmark"
              class="fw-bold ms-auto me-3 d-none d-lg-flex"
            >
              <i class="bi bi-bookmark-heart fs-3 text-muted"></i>
            </RouterLink>

            <RouterLink to="/cart" class="ms-auto me-3 d-none d-lg-flex">
              <div class="d-inline-block position-relative">
                <i class="bi bi-cart3 fs-3 text-muted"></i>

                <span
                  v-if="cartList.carts"
                  class="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger"
                >
                  {{ cartList.carts.length }}
                </span>
              </div>
            </RouterLink>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
  <!-- footer -->

  <div class="bg-darkblue">
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

        <div>
          <div class="text-center">
            <RouterLink
              class="text-hover me-2 text-decoration-none"
              to="/adminLogin"
              >登入後台</RouterLink
            >
            <RouterLink
              class="text-hover text-decoration-none"
              to="/admin/index"
              >後台首頁</RouterLink
            >
          </div>

          <a href="" class="text-decoration-none text-hover"> 常見問題 </a>
          <a href="" class="text-decoration-none text-hover"> 使用條款 </a>
          <a href="" class="text-decoration-none text-hover"> 隱私權政策 </a>
        </div>
        <!-- <div class="text-end">
          <RouterLink
            class="link-dark me-2 text-decoration-none"
            to="/adminLogin"
            >登入後台</RouterLink
          >
          <RouterLink class="link-dark text-decoration-none" to="/admin/index"
            >後台首頁</RouterLink
          >
        </div> -->
        <div class="div">
          <a href="" style="font-size: 2rem" class="me-2 icon-hover">
            <i class="bi bi-instagram"></i
          ></a>
          <a href="" style="font-size: 2rem" class="me-2 icon-hover"
            ><i class="bi bi-facebook"></i
          ></a>
          <a href="" style="font-size: 2rem" class="icon-hover"
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
import "bootstrap/js/dist/collapse.js";
import "bootstrap/js/dist/dropdown.js";

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
