<template>
  <div class="full-height mb-5">
    <div class="container mt-5">
      <p class="h5">
        <span class="text-primary fw-bold h4"> {{ keywordName }} </span>
        的搜尋結果，共 {{ searchData.length }} 筆
      </p>
    </div>

    <div class="container mt-5" v-if="searchData">
      <!-- <div class="row" v-if="categoryData.length === 0">
        <div class="col text-center">查無資料</div>
      </div> -->

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <div
          class="col position-relative"
          v-for="course in searchData"
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
      searchData: [],
      keyword: "",
    };
  },
  props: ["keywordName"],
  beforeRouteUpdate(to, from) {
    console.log(to.params.keyword);
    this.keyword = to.params.keyword;
  },
  mounted() {
    this.keyword = this.keywordName;
    this.matchSearchKeyword();
  },
  created() {
    moment.locale("zh-tw");
  },
  watch: {
    keyword() {
      this.matchSearchKeyword();
    },
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

    matchSearchKeyword() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.searchData = [];
          res.data.products.forEach((item) => {
            if (
              item.content.includes(this.keyword) ||
              item.description.includes(this.keyword) ||
              item.title.includes(this.keyword) ||
              item.category.includes(this.keyword)
            ) {
              this.searchData.push(item);
            }
          });
          // console.log(this.searchData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    countLeftDay(endTimeStr) {
      const todayDateStr = Date.parse(new Date());

      if (todayDateStr > endTimeStr) {
        return "已";
      }

      // 換回時間格式
      endTimeStr = new Date(endTimeStr).toISOString();

      return moment(endTimeStr).fromNow();
    },
  },
};
</script>
