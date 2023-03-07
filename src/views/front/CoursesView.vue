<!-- <style>
.img-cover {
  object-fit: cover;
}
.start-rem-1 {
  left: 0.5rem;
}
.top-rem-1 {
  top: 0.5rem;
}
.img-hover-enlarge {
  transition: all 0.5 ease;
}
.img-hover-enlarge:hover {
  transform: scale(1.3);
  cursor: pointer;
}

.btn-hover-light:hover {
  color: white;
}
</style> -->

<template>
  <div class="container mb-5 full-height">
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    <nav
      class="mt-5"
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none text-muted">首頁</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <a href="#" class="text-decoration-none text-dark">所有課程</a>
        </li>
      </ol>
    </nav>
    <h3 class="mb-5">全部課程總覽</h3>

    <div class="row g-3">
      <div class="col-md-2">
        <!-- 側欄選單 -->
        <div class="overflow-auto sticky-top" style="top: 120px">
          <div
            class="list-group list-group-flush d-flex flex-row flex-md-column"
          >
            <a href="#" class="list-group-item list-group-item-action">
              所有<br />
              課程</a
            >
            <a href=".#/courses" class="list-group-item list-group-item-action"
              >語言</a
            >
            <a href=".#/courses" class="list-group-item list-group-item-action"
              >藝術</a
            >
            <a href="#" class="list-group-item list-group-item-action">攝影</a>

            <a href="#" class="list-group-item list-group-item-action">商業</a>
            <a
              href="#"
              class="list-group-item list-group-item-action border-bottom"
              >投資<br />理財</a
            >
          </div>
        </div>
      </div>

      <div class="col-md-10">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col" v-for="course in ShowCourseList" :key="course.id">
            <div class="card">
              <a class="overflow-hidden" @click="goToClassPage(course.id)">
                <img
                  :src="course.imageUrl"
                  height="250"
                  class="card-img-top img-cover img-hover-enlarge"
                  alt="..."
                />
              </a>
              <span
                class="badge bg-dark position-absolute top-rem-1 start-rem-1"
              >
                {{ course.category }}</span
              >

              <div class="card-body">
                <h5 class="card-title">{{ course.title }}</h5>
                <p class="card-text">
                  <!-- {{ course.content }} -->
                </p>
                <h4 class="text-end">
                  <span class="fs-6">
                    <del> NT$ {{ course.origin_price }} </del>
                  </span>
                  <span class="fw-bold"> NT$ {{ course.price }}</span>
                </h4>
                <div
                  class="btn-group w-100"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <!-- <a
                    @click="goToClassPage(course.id)"
                    class="btn btn-outline-secondary btn-hover-light"
                    >課程詳情</a
                  > -->
                  <a
                    v-if="showCheck.includes(course.id)"
                    href="#/cart"
                    type="button"
                    class="btn btn-secondary link-light"
                  >
                    已選購，結帳去
                  </a>

                  <!-- @click="addToCartAndRender(course.id)" -->

                  <button
                    v-else
                    @click="addToCart(course.id)"
                    :disabled="loadItem"
                    type="button"
                    class="btn btn-outline-primary"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from "sweetalert2/dist/sweetalert2.js";
import Toast from "../../utils/Toast";
import cartStore from "../../stores/cartStore.js";
import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      loadItem: false,
      isLoading: false,
      // courseList: [],
      // cartList: { carts: [], final_total: 0, total: 0 },
      // check: [],
    };
  },
  mounted() {
    this.getAllCourse();
  },

  watch: {
    ShowCourseList() {
      this.getCartList();
    },
    // cartList() {
    //   this.checkedClass();
    // },
  },

  computed: {
    ...mapState(cartStore, ["cartList", "ShowCourseList", "showCheck"]),
  },

  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "addToCart",
      "checkedClass",
      "getAllCourse",
    ]),

    // checkedClass() {
    //   this.courseList.forEach((item) => {
    //     this.cartList.carts.forEach((i) => {
    //       if (item.id === i.product_id) {
    //         this.check.push(item.id);
    //       }
    //     });
    //   });
    // },

    // getCartList() {
    //   this.$http
    //     .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
    //     .then((res) => {
    //       console.log(res.data.data);

    //       this.cartList = res.data.data;
    //       console.log(this.cartList);
    //       this.checkedClass();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // getAllCourse() {
    //   this.isLoading = true;
    //   this.$http
    //     .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
    //     .then((res) => {
    //       //console.log("courseList", res.data.products);
    //       this.isLoading = false;
    //       this.courseList = res.data.products;
    //     })
    //     .catch((err) => {
    //       Toast.fire({
    //         icon: "success",
    //         title: err.response.data.message,
    //       });
    //       // alert(err.response.data.message);
    //     });
    // },

    goToClassPage(id) {
      this.$router.push(`/course/${id}`);
    },

    // addToCart(product_id) {
    //   this.loadItem = true;
    //   const data = {
    //     product_id,
    //     qty: 1,
    //   };

    //   this.$http
    //     .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
    //     .then((res) => {
    //       this.getAllCourse();
    //       this.loadItem = false;

    //       Toast.fire({
    //         icon: "success",
    //         title: res.data.message,
    //       });
    //     })

    //     .catch((err) => {
    //       Toast.fire({
    //         icon: "error",
    //         title: err.response.data.message,
    //       });
    //     });
    // },
  },
};
</script>
