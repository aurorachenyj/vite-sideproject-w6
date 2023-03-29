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
    <nav class="mt-5" style="--bs-breadcrumb-divider" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none text-muted">首頁</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <a href="#" class="text-decoration-none text-dark">{{ clickItem }}</a>
        </li>
      </ol>
    </nav>
    <h3 class="mb-5">{{ clickItem }}</h3>

    <div class="row g-4">
      <div class="col-md-1">
        <!-- 側欄選單 -->
        <div class="overflow-auto sticky-top" style="top: 120px">
          <div
            class="list-group bg-darkblue list-group-flush d-flex flex-row flex-md-column"
          >
            <a
              href=".#/courses"
              @click.prevent="
                {
                  (clickItem = '所有課程'), getpageData(1);
                }
              "
              :class="{ active: clickItem === '所有課程' }"
              class="list-group-item list-group-item-action"
            >
              所有<br />
              課程</a
            >
            <a
              href=".#/courses"
              @click.prevent="
                {
                  (clickItem = '語言'), getpageData(1, '語言');
                }
              "
              :class="{ active: clickItem === '語言' }"
              class="list-group-item list-group-item-action"
              >語言</a
            >
            <a
              href=".#/courses"
              @click.prevent="
                {
                  (clickItem = '藝術'), getpageData(1, '藝術');
                }
              "
              :class="{ active: clickItem === '藝術' }"
              class="list-group-item list-group-item-action"
              >藝術</a
            >
            <a
              href="#"
              @click.prevent="
                {
                  (clickItem = '攝影'), getpageData(1, '攝影');
                }
              "
              :class="{ active: clickItem === '攝影' }"
              class="list-group-item list-group-item-action"
              >攝影</a
            >

            <a
              href="#"
              @click.prevent="
                {
                  (clickItem = '商業'), getpageData(1, '商業');
                }
              "
              :class="{ active: clickItem === '商業' }"
              class="list-group-item list-group-item-action"
              >商業</a
            >
            <a
              href="#"
              @click.prevent="
                {
                  (clickItem = '投資理財'), getpageData(1, '投資理財');
                }
              "
              :class="{ active: clickItem === '投資理財' }"
              class="list-group-item list-group-item-action border-bottom"
              >投資<br />理財</a
            >
          </div>
        </div>
      </div>

      <div class="col-md-11">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <!-- @mouseenter="setHover(course.id, true)"
            @mouseleave="setHover(course.id, false)" -->

          <div
            class="col position-relative"
            v-for="course in pageClassData.products"
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

                      <!-- :disabled="sendLoadItem === true" -->
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
                  <span class="badge bg-white text-primary fw-bold">
                    募資中</span
                  >
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

    <!-- 分頁 -->
    <nav
      aria-label="Page navigation "
      class="mt-5"
      v-if="pageClassData.pagination"
    >
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="{ disabled: !pageClassData.pagination.has_pre }"
          @click.prevent="changePage(currentPage - 1)"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          class="page-item"
          v-for="i in pageClassData.pagination.total_pages"
          :key="i + 'hello'"
          @click.prevent="changePage(i)"
          :class="{ active: i === currentPage }"
        >
          <a class="page-link" href="#"> {{ i }} </a>
        </li>
        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->

        <li
          class="page-item"
          :class="{ disabled: !pageClassData.pagination.has_next }"
          @click.prevent="changePage(currentPage + 1)"
        >
          <a class="page-link" href="" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import "moment/dist/locale/zh-tw";
// import Toast from "../../utils/Toast";
import axios from "axios";

import { mapActions, mapState } from "pinia";
import cartStore from "../../stores/cartStore.js";
import frontOrderStore from "../../stores/frontOrderStore.js";
import bookmarkStore from "../../stores/bookmarkStore.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      loadItem: false,
      isLoading: false,

      pageClassData: [],
      currentPage: 1,
      clickItem: "",
      // courseList: [],
      // cartList: { carts: [], final_total: 0, total: 0 },
      // check: [],
    };
  },
  created() {
    moment.locale("zh-tw");
  },
  mounted() {
    this.getpageData();

    // this.getAllCourse(); // 不分頁的全部課程資料

    this.getStuOrderList();

    this.getLocalStorageBookmark();
  },

  watch: {
    currentPage() {
      this.getpageData(this.currentPage);
    },

    showbookmarkData() {
      this.setLocalStorageBookmark();
    },
    ShowCourseList() {
      this.getCartList();
    },

    cartList() {
      this.checkedClass();
    },
    showFinalStuOrderData() {
      this.matchStuNumAndClass();
      this.matchFundingTarget();
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

    changePage(targetPage) {
      this.currentPage = targetPage;

      window.scrollTo({
        top: 0,
        // behavior: "smooth",
      });
    },

    getpageData(page = 1, category = null) {
      console.log(page);
      console.log(category);

      let url = "";

      if (category === null) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}`;
      } else if (category != null) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`;
      }

      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.pageClassData = res.data;

          this.currentPage = res.data.pagination.current_page;

          window.scrollTo({
            top: 0,
            // behavior: "smooth",
          });
          console.log(this.pageClassData);
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

    // goToClassPage(id) {
    //   this.$router.push(`/course/${id}`);
    // },
  },
};
</script>
