<style>
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
</style>

<template>
  <div class="container">
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    <h3 class="my-3">全部課程總覽</h3>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="course in courseList" :key="course.id">
        <div class="card">
          <a class="overflow-hidden" @click="goToClassPage(course.id)">
            <img
              :src="course.imageUrl"
              height="250"
              class="card-img-top img-cover img-hover-enlarge"
              alt="..."
            />
          </a>
          <span class="badge bg-dark position-absolute top-rem-1 start-rem-1">
            {{ course.category }}</span
          >

          <div class="card-body">
            <h5 class="card-title">{{ course.title }}</h5>
            <p class="card-text">
              {{ course.content }}
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
              <a
                @click="goToClassPage(course.id)"
                class="btn btn-outline-secondary btn-hover-light"
                >課程詳情</a
              >
              <a
                v-if="check.includes(course.id)"
                href="./cart"
                type="button"
                class="btn btn-primary link-light"
              >
                已選購，結帳去
              </a>
              <button
                v-else
                @click="addToCart(course.id)"
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

  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
// import cartStore from "../../stores/cartStore.js";
// import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      courseList: [],
      cartList: { carts: [], final_total: 0, total: 0 },
      check: [],
    };
  },
  mounted() {
    this.getAllCourse();
  },

  methods: {
    checkedClass() {
      console.log(this.courseList);
      console.log(this.cartList.carts);

      this.courseList.forEach((item) => {
        this.cartList.carts.forEach((i) => {
          if (item.id === i.product_id) {
            this.check.push(item.id);
            console.log(this.check);
          }
        });
      });
      console.log(this.check);
    },

    getCartList() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          console.log(res.data.data);

          this.cartList = res.data.data;
          console.log(this.cartList);
          this.checkedClass();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllCourse() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log("courseList", res.data.products);
          this.courseList = res.data.products;
          this.getCartList();
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    goToClassPage(id) {
      console.log(id);
      this.$router.push(`/course/${id}`);
    },
    addToCart(product_id) {
      console.log(product_id);

      const data = {
        product_id,
        qty: 1,
      };

      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.getAllCourse();
          alert(res.data.message);
        })

        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
