<template>
  <div class="full-height">
    <div
      class="sticky-top"
      style="
        top: 80px;
        background-image: url(/img/content-bg.png);
        background-position: bottom right;
      "
    >
      <div class="container">
        <LoadingVue v-model:active="isLoading"> </LoadingVue>

        <nav
          class="pt-3"
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#" class="text-decoration-none text-muted">首頁</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="#" class="text-decoration-none text-dark">{{
                category
              }}</a>
            </li>
          </ol>
        </nav>
        <h3 class="mb-3">{{ category }}</h3>
        <div class="d-flex justify-content-center mb-5 pb-3">
          <button class="btn btn-outline-primary me-3 bg-light opacity-75">
            全部
          </button>
          <button class="btn btn-outline-primary me-3 bg-light opacity-75">
            已開課
          </button>
          <button class="btn btn-outline-primary bg-light opacity-75">
            募資中
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <div
          class="col position-relative"
          v-for="course in categoryData.products"
          :key="course.id"
        >
          <div
            class="card h-100 hover-shadow"
            v-if="course.courseStatus === 'classOpen'"
          >
            <RouterLink
              :to="`/course/${course.id}`"
              class="text-decoration-none"
            >
              <div class="ratio ratio-16x9 overflow-hidden">
                <img
                  :src="course.imageUrl"
                  class="card-img-top img-cover img-hover-enlarge"
                  alt="..."
                />
              </div>

              <div class="position-absolute top-rem-1 start-rem-1">
                <span class="badge bg-darkblue me-2">
                  {{ course.category }}</span
                >
                <span class="badge bg-secondary"> 已開課</span>
              </div>
            </RouterLink>

            <div class="card-body">
              <div class="h-100 d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <h5>{{ course.title }}</h5>

                  <i
                    v-if="showbookmarkData.includes(course.id)"
                    class="bi bi-bookmark-fill img-hover-enlarge"
                    @click="BookmarkAction(course.id)"
                    style="
                      font-size: 1.5rem;
                      color: orange;
                      font-weight: 500;
                      cursor: pointer;
                    "
                  ></i>

                  <i
                    v-else
                    class="bi bi-bookmark img-hover-enlarge"
                    @click="BookmarkAction(course.id)"
                    style="
                      font-size: 1.5rem;
                      color: orange;
                      font-weight: 500;
                      cursor: pointer;
                    "
                  ></i>
                </div>

                <div class="mt-auto">
                  <div class="mb-2">
                    <p class="mb-0">
                      <i class="bi bi-book"></i> {{ course.unit }}
                      小時
                    </p>
                    <p class="mb-0">
                      <i class="bi bi-card-list"></i>
                      {{ course.classSectionNum }} 章節
                      {{ course.classUnitNum }} 單元
                    </p>
                  </div>

                  <p>
                    <del>NT$ {{ course.origin_price }}</del>
                    <span class="text-primary fw-bold h3">
                      NT$ {{ course.price }}
                    </span>
                  </p>

                  <div
                    class="d-flex justify-content-between mt-2 align-items-center"
                  >
                    <p class="text-muted mb-0">
                      同學 {{ matchStuNumAndClass(course.id) }} 人
                    </p>

                    <a
                      v-if="showCheck.includes(course.id)"
                      href="#/cart"
                      type="button"
                      class="btn btn-primary text-white btn-sm"
                    >
                      已選購，結帳去
                    </a>

                    <button
                      v-else
                      :disabled="sendLoadItem === true"
                      @click="addToCart(course.id)"
                      class="btn btn-outline-primary btn-sm"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card h-100 hover-shadow"
            v-else-if="course.courseStatus === 'classFunding'"
          >
            <RouterLink
              :to="`/course/${course.id}`"
              class="text-decoration-none"
            >
              <div class="ratio ratio-16x9 overflow-hidden">
                <img
                  :src="course.imageUrl"
                  class="card-img-top img-cover img-hover-enlarge"
                  alt="..."
                />
              </div>

              <div class="position-absolute top-rem-1 start-rem-1">
                <span class="badge bg-darkblue me-2">
                  {{ course.category }}</span
                >
                <span class="badge bg-white text-primary fw-bold"> 募資中</span>
              </div>
            </RouterLink>

            <div class="card-body">
              <div class="h-100 d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <h5>{{ course.title }}</h5>
                  <!-- <i class="bi bi-bookmark-fill img-hover-enlarge"></i> -->

                  <i
                    v-if="showbookmarkData.includes(course.id)"
                    class="bi bi-bookmark-fill img-hover-enlarge"
                    @click="BookmarkAction(course.id)"
                    style="
                      font-size: 1.5rem;
                      color: orange;
                      font-weight: 500;
                      cursor: pointer;
                    "
                  ></i>

                  <i
                    v-else
                    class="bi bi-bookmark img-hover-enlarge"
                    @click="BookmarkAction(course.id)"
                    style="
                      font-size: 1.5rem;
                      color: orange;
                      font-weight: 500;
                      cursor: pointer;
                    "
                  ></i>
                </div>

                <div class="mt-auto" v-if="showFinalStuOrderData">
                  <!-- <div
                      class="d-flex justify-content-between align-items-center mt-1 mb-3"
                    > -->
                  <p class="mb-0 mt-1 mb-2">
                    募資價
                    <span class="text-primary fw-bold h3">
                      NT$ {{ course.funding_price }}
                    </span>
                  </p>

                  <!-- <a
                        v-if="showCheck.includes(course.id)"
                        href="#/cart"
                        type="button"
                        class="btn btn-primary text-white btn-sm"
                      >
                        已選購，結帳去
                      </a>

                      <button
                        v-else
                        @click="addToCart(course.id)"
                        class="btn btn-outline-primary btn-sm"
                      >
                        加入購物車
                      </button> -->
                  <!-- </div> -->

                  <div class="progress" style="height: 20px">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{ width: matchFundingTarget(course.id) + '%' }"
                    ></div>

                    <!-- :style="{ width: matchFundingTarget(course.id) + '%' }" -->
                  </div>

                  <div class="d-flex justify-content-between">
                    <p class="mb-0 text-muted">
                      達標率 {{ matchFundingTarget(course.id) }} %
                    </p>
                    <p class="text-muted mb-0">
                      <span class="text-secondary fw-bolder">
                        {{ countLeftDay(course.fundingEndDate) }}
                      </span>
                      結束
                    </p>
                  </div>

                  <div class="d-flex justify-content-between mt-2">
                    <p class="text-muted mb-0">
                      同學 {{ matchStuNumAndClass(course.id) }} 人
                    </p>

                    <a
                      v-if="showCheck.includes(course.id)"
                      href="#/cart"
                      type="button"
                      class="btn btn-primary text-white btn-sm"
                    >
                      已選購，結帳去
                    </a>

                    <button
                      v-else
                      @click="addToCart(course.id)"
                      class="btn btn-outline-primary btn-sm"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 隱藏區塊 -->
          <!-- <div
              class="card text-white d-none d-md-block border-5 border-primary border-end-0 border-bottom-0"
              v-if="isHover === course.id"
              style="
                position: absolute;
                top: -30px;
                right: -100px;
                width: 100%;
                background-color: rgba(48, 45, 42, 0.9);
                z-index: 100;
              "
            >
            

              <div class="card-body">
               
                <p>
                  {{ course.description }}
                </p>

                <div class="d-flex flex-column">
                  <button class="btn btn-outline-primary btn-sm mb-2">
                    <RouterLink
                      :to="`/course/${course.id}`"
                      class="text-white text-decoration-none"
                    >
                      查看詳情
                    </RouterLink>
                  </button>

                  <a
                    v-if="showCheck.includes(course.id)"
                    href="#/cart"
                    type="button"
                    class="btn btn-primary text-white btn-sm"
                  >
                    已選購，結帳去
                  </a>

                  <button
                    v-else
                    @click="addToCart(course.id)"
                    :disabled="sendLoadItem === true"
                    class="btn btn-primary btn-sm"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div> -->
        </div>

        <!-- <div class="col"><div class="card">123</div></div>
        <div class="col"><div class="card">123</div></div>
        <div class="col"><div class="card">123</div></div>
        <div class="col"><div class="card">123</div></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import "moment/dist/locale/zh-tw";

import { mapActions, mapState } from "pinia";
import cartStore from "../../stores/cartStore.js";
import frontOrderStore from "../../stores/frontOrderStore.js";
import bookmarkStore from "../../stores/bookmarkStore.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      category: "",
      categoryData: {},
    };
  },

  watch: {
    category() {
      this.getCategoryData(this.category);
    },
  },
  created() {
    moment.locale("zh-tw");
  },
  mounted() {
    console.log(this.$route.params.category);
    this.category = this.$route.params.category;
    this.getCategoryData(this.category);
  },
  computed: {
    ...mapState(cartStore, ["cartList", "ShowCourseList", "showCheck"]),

    ...mapState(frontOrderStore, ["showFinalStuOrderData"]),

    ...mapState(bookmarkStore, ["showbookmarkData"]),
  },

  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "addToCart",
      "checkedClass",
      "getAllCourse",
    ]),
    ...mapActions(frontOrderStore, [
      "getStuOrderList",
      "matchFundingTarget",
      "matchStuNumAndClass",
    ]),

    ...mapActions(bookmarkStore, [
      "setLocalStorageBookmark",
      "getLocalStorageBookmark",
      "BookmarkAction",
    ]),

    countLeftDay(endTimeStr) {
      const todayDateStr = Date.parse(new Date());

      if (todayDateStr > endTimeStr) {
        return "已";
      }

      // 換回時間格式
      endTimeStr = new Date(endTimeStr).toISOString();

      return moment(endTimeStr).fromNow();
    },

    getCategoryData(category) {
      console.log(this.category);

      axios
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${category}`
        )
        .then((res) => {
          console.log(res);
          this.categoryData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
