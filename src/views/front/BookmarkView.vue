<template>
  <div class="container full-height">
    <h4 class="my-5">我收藏的課程 <i class="bi bi-bookmark-heart"></i></h4>

    <!-- 沒有收藏時 -->
    <div
      class="d-flex justify-content-center mb-5"
      v-if="bookmarkClassDetail.length === 0"
    >
      <div class="col-12 col-md-8 border border-3 rounded-3 py-3">
        <p class="text-center">
          尚未收藏任何課程 <br />

          <a href=".#/courses" class="btn btn-outline-primary mt-2">
            探索課程
          </a>
        </p>
      </div>
    </div>

    <!-- 有收藏 -->
    <div v-else>
      <div
        class="row align-items-center gy-3 pb-3 mb-3 border-bottom"
        v-for="bookmark in bookmarkClassDetail"
        :key="bookmark.id"
      >
        <div class="col-md-3">
          <RouterLink
            :to="`/course/${bookmark.id}`"
            class="text-white text-decoration-none"
          >
            <img
              :src="bookmark.imageUrl"
              style="width: 10rem; height: 8rem"
              class="img-cover d-none d-md-block"
              alt=""
            />
          </RouterLink>
        </div>
        <div class="col-md-6">
          <RouterLink
            :to="`/course/${bookmark.id}`"
            class="text-decoration-none text-dark fw-bold"
          >
            <h5 class="mb-0">{{ bookmark.title }}</h5>
          </RouterLink>
          <div class="mt-3 d-flex align-items-center">
            <span
              class="badge bg-darkblue me-3"
              v-if="bookmark.courseStatus === 'classOpen'"
              >已開課</span
            >

            <span
              class="badge bg-secondary me-3"
              v-else-if="bookmark.courseStatus === 'classFunding'"
              >募資中</span
            >

            <h5
              class="mb-0 fw-bold text-primary"
              v-if="bookmark.courseStatus === 'classOpen'"
            >
              NT$ {{ bookmark.price }}
            </h5>

            <h5
              class="mb-0 fw-bold text-primary"
              v-else-if="bookmark.courseStatus === 'classFunding'"
            >
              NT$ {{ bookmark.funding_price }}
            </h5>
          </div>
        </div>

        <div class="col-md-3">
          <div class="text-end text-md-start">
            <div
              class="btn-group btn-group-sm"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                @click="delBookmark(bookmark.id)"
                type="button"
                class="btn btn-outline-light me-3"
              >
                <i class="bi bi-trash3 text-dark"></i>
              </button>

              <button
                @click="moveToCart(bookmark.id)"
                type="button"
                class="btn btn-outline-primary"
              >
                移至購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import bookmarkStore from "../../stores/bookmarkStore.js";
import cartStore from "../../stores/cartStore.js";
import axios from "axios";
import Toast from "../../utils/Toast";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      bookmarkClassDetail: [],
    };
  },

  mounted() {
    this.getLocalStorageBookmark();
  },
  computed: {
    ...mapState(bookmarkStore, ["showbookmarkData"]),
    ...mapState(cartStore, ["addToCart"]),
  },
  watch: {
    showbookmarkData() {
      this.getBookmarkDetail();
    },
  },
  methods: {
    ...mapActions(bookmarkStore, [
      "getLocalStorageBookmark",
      "setLocalStorageBookmark",
    ]),
    ...mapActions(cartStore, ["showCheck"]),

    moveToCart(targetId) {
      // console.log(targetId);
      this.addToCart(targetId);
      const targetIndex = this.showbookmarkData.indexOf(targetId);
      this.showbookmarkData.splice(targetIndex, 1);
      this.setLocalStorageBookmark();
      this.getBookmarkDetail();
    },

    delBookmark(targetId) {
      const targetIndex = this.showbookmarkData.indexOf(targetId);
      this.showbookmarkData.splice(targetIndex, 1);
      this.setLocalStorageBookmark();

      Toast.fire({
        icon: "success",
        title: "移除收藏",
      });

      this.getBookmarkDetail();
    },

    getBookmarkDetail() {
      this.bookmarkClassDetail = [];

      console.log(this.showbookmarkData);

      const apiArr = this.showbookmarkData.map((item) => {
        return axios.get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${item}`
        );
      });

      console.log(apiArr);

      Promise.all(apiArr)
        .then((res) => {
          // console.log(res);

          res.forEach((item) => {
            console.log(item.data.product);
            this.bookmarkClassDetail.push(item.data.product);
          });

          // console.log(this.bookmarkClassDetail);
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log();
    },
  },
};
</script>
