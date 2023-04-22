<template>
  <div class="full-height mb-5">
    <div
      class="sticky-top"
      style="
        top: 80px;
        background-image: url(./img/content-bg.png);
        background-position: center bottom;
      "
    >
      <div class="container">
        <!-- <LoadingVue v-model:active="isLoading"> </LoadingVue> -->

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
                categoryName
              }}</a>
            </li>
          </ol>
        </nav>
        <h3 class="mb-3">{{ categoryName }}</h3>
        <div class="d-flex justify-content-center mb-5 pb-3">
          <button
            @click="
              {
                getCategoryData(categoryName), (clickItem = 'all');
              }
            "
            type="button"
            class="btn btn-outline-primary me-3 opacity-75"
            :class="{ active: clickItem === 'all' }"
          >
            全部
          </button>
          <button
            @click="
              {
                filterData('open'), (clickItem = 'open');
              }
            "
            type="button"
            class="btn btn-outline-primary me-3 opacity-75"
            :class="{ active: clickItem === 'open' }"
          >
            已開課
          </button>
          <button
            @click="
              {
                filterData('funding'), (clickItem = 'funding');
              }
            "
            type="button"
            class="btn btn-outline-primary opacity-75"
            :class="{ active: clickItem === 'funding' }"
          >
            募資中
          </button>
        </div>
      </div>
    </div>

    <div class="container" v-if="categoryData.products">
      <div class="row" v-if="categoryData.products.length === 0">
        <div class="col text-center">查無資料</div>
      </div>

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
                      @click="addToCart(course.id)"
                      class="btn btn-outline-primary btn-sm"
                      type="button"
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
                  <p class="mb-0 mt-1 mb-2">
                    募資價
                    <span class="text-primary fw-bold h3">
                      NT$ {{ course.funding_price }}
                    </span>
                  </p>

                  <div class="progress" style="height: 20px">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{ width: matchFundingTarget(course.id) + '%' }"
                    ></div>
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
                      type="button"
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
      clickItem: "",
      categoryData: {},
    };
  },
  props: ["categoryName"],

  watch: {
    categoryName() {
      this.getCategoryData(this.categoryName);
    },
  },
  created() {
    moment.locale("zh-tw");
  },
  mounted() {
    this.getCategoryData(this.categoryName);
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

    filterData(filterTarget) {
      // console.log(filterTarget);
      // console.log(this.categoryName);

      if (
        this.categoryName === "已開課課程" ||
        this.categoryName === "募資課程"
      ) {
        if (filterTarget === "open") {
          this.getAllOpenData();
        } else if (filterTarget === "funding") {
          this.getAllFundingData();
        }
      } else {
        axios
          .get(
            `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${this.categoryName}`
          )
          .then((res) => {
            // console.log(res);
            this.categoryData.products = [];
            if (filterTarget === "funding") {
              res.data.products.forEach((item) => {
                if (item.courseStatus === "classFunding") {
                  this.categoryData.products.push(item);
                }
              });
            } else if (filterTarget === "open") {
              res.data.products.forEach((item) => {
                if (item.courseStatus === "classOpen") {
                  this.categoryData.products.push(item);
                }
              });
            }
            // console.log(this.categoryData);
            // this.categoryData = res.data;
          })
          .catch((err) => {
            console.log(err);
            this.$router.push("/notFound");
          });
      }
    },

    getAllClassData() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.categoryData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAllFundingData() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          // console.log(res);
          this.categoryData.products = [];
          res.data.products.forEach((item) => {
            if (item.courseStatus === "classFunding") {
              this.categoryData.products.push(item);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAllOpenData() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.categoryData.products = [];
          res.data.products.forEach((item) => {
            if (item.courseStatus === "classOpen") {
              this.categoryData.products.push(item);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getCategoryData(category) {
      // console.log(category);

      const categoryArr = [
        "語言",
        "藝術",
        "投資理財",
        "攝影",
        "商業",
        "募資課程",
        "已開課課程",
      ];

      if (!categoryArr.includes(category)) {
        this.$router.push("/notFound");
        return;
      }

      if (category === "募資課程") {
        this.getAllFundingData();
      } else if (category === "已開課課程") {
        this.getAllOpenData();
      } else {
        axios
          .get(
            `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${category}`
          )
          .then((res) => {
            this.categoryData = res.data;
          })
          .catch((err) => {
            console.log(err);
            this.$router.push("/notFound");
          });
      }
    },
  },
};
</script>
