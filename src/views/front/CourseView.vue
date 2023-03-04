<template>
  <!-- 手機版置底 收藏、購物按鈕 -->
  <div class="d-md-none fixed-bottom bg-white py-3">
    <div class="container">
      <button class="btn w-25">
        <i class="bi bi-bookmark fs-3 fw-bold text-secondary"></i>
      </button>
      <!-- <button class="btn btn-outline-primary w-75">立即購買</button> -->

      <a v-if="checkBuyStatus" class="btn btn-secondary w-75" href="#/cart">
        已購買，結帳去
      </a>

      <button
        v-else
        @click="addToCart(classData.id)"
        class="btn btn-outline-primary w-75"
      >
        立即購買
      </button>
    </div>
  </div>

  <div class="container full-height">
    <!-- 募資中版型 -->
    <div class="row my-3 g-3">
      <div class="col-md-7">
        <div class="ratio ratio-16x9 h-100">
          <img
            style="background-position: bottom"
            class="img-cover"
            :src="classData.imageUrl"
            alt=""
          />
        </div>
      </div>
      <div
        class="col-md-5 sticky-md-top"
        style="top: 100px"
        v-if="classData.courseStatus === 'classFunding'"
      >
        <div class="card h-100">
          <div class="card-body">
            <span
              class="w-25 badge bg-white text-primary border border-primary mb-3"
            >
              {{ classData.category }}
            </span>
            <span class="w-25 badge bg-secondary mb-3 ms-2"> 募資中 </span>
            <h4>{{ classData.title }}</h4>

            <!-- <p class="h4 text-primary fw-bold my-3">
              NT$ 3689
              <del class="ms-1 fs-6 text-muted fw-light"> NT$ 5366 </del>
            </p> -->

            <div class="bg-light p-3 my-3">
              <p class="text-muted mb-0">
                募資達標門檻 NT$ {{ classData.funding_target }}
              </p>
              <p class="text-dark mb-2">
                已募資金額
                <span class="fw-bold"> NT$ ??? </span>
              </p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                >
                  ??%
                </div>
              </div>

              <div class="d-flex justify-content-between mt-2">
                <p class="mb-0">
                  募資倒數
                  <span class="text-secondary fw-bold fs-5"> ??天後 </span>
                </p>
                <p class="mb-0">同學 ?? 人</p>
              </div>
              <div
                class="d-flex mt-3 py-3 justify-content-between"
                style="background: white"
              >
                <div class="text-center w-50">
                  <p class="mb-0">
                    募資優惠價 <br />
                    <span class="fs-4 fw-bold text-primary">
                      NT$ {{ classData.funding_price }}</span
                    >
                  </p>
                </div>
                <div class="border-start text-center w-50">
                  <p class="mb-0">
                    正式售價 <br />
                    <del class="fs-4"> NT$ {{ classData.price }}</del>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button class="btn w-25">
                <i class="bi bi-bookmark fs-3 fw-bold text-secondary"></i>
              </button>

              <!-- <button class="btn btn-outline-primary w-75">立即購買</button> -->
              <a
                v-if="checkBuyStatus"
                class="btn btn-secondary w-75"
                href="#/cart"
              >
                已購買，結帳去
              </a>

              <button
                v-else
                @click="addToCart(classData.id)"
                class="btn btn-outline-primary w-75"
              >
                立即購買
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 已開課版型 -->
      <div
        class="col-md-5 sticky-md-top"
        style="top: 100px"
        v-if="classData.courseStatus === 'classOpen'"
      >
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex flex-column h-100">
              <div class="d-flex">
                <span
                  class="w-25 badge bg-white text-primary border border-primary mb-3"
                >
                  {{ classData.category }}
                </span>
                <span class="w-25 badge bg-darkblue mb-3 ms-2"> 已開課 </span>
              </div>
              <div class="border-bottom mb-3">
                <h4>
                  {{ classData.title }}
                </h4>

                <p class="h4 text-primary fw-bold my-3">
                  NT$ {{ classData.price }}
                  <del class="ms-1 fs-6 text-muted fw-light">
                    NT$ {{ classData.origin_price }}
                  </del>
                </p>
                <p class="mb-3"><i class="bi bi-people-fill"></i> 同學 ?? 人</p>
              </div>

              <p class="mb-1">
                <i class="bi bi-book"></i> 課程總時數：{{ classData.unit }} 小時
              </p>
              <p>
                <i class="bi bi-card-list"></i> 章節單元數：{{
                  classData.classSectionNum
                }}
                章節 {{ classData.classUnitNum }} 單元
              </p>

              <div class="mt-auto">
                <button class="btn w-25">
                  <i class="bi bi-bookmark fs-3 fw-bold text-secondary"></i>
                </button>

                <a
                  v-if="checkBuyStatus"
                  class="btn btn-secondary w-75"
                  href="#/cart"
                >
                  已購買，結帳去
                </a>

                <button
                  v-else
                  @click="addToCart(classData.id)"
                  class="btn btn-outline-primary w-75"
                >
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-7 mb-3">
        <div class="card">
          <div class="card-body">
            <ul class="nav nav-tabs mb-3 sticky-top bg-white" style="top: 90px">
              <li class="nav-item">
                <a
                  class="nav-link fw-bold"
                  onclick="document.getElementById('classSection').scrollIntoView()"
                  >課程章節</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fw-bold"
                  onclick="document.getElementById('getSkill').scrollIntoView()"
                  >收穫技能</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fw-bold"
                  onclick="document.getElementById('teacherInfo').scrollIntoView()"
                  >講師介紹</a
                >
              </li>
            </ul>

            <div>
              <h4
                id="classSection"
                name="classSection"
                class="text-secondary fw-bold"
              >
                課程章節
              </h4>
              <div v-html="classData.content" class="border-bottom mb-3"></div>

              <h4 id="getSkill" class="text-secondary fw-bold">收穫技能</h4>
              <div
                v-html="classData.skillTree"
                class="border-bottom mb-3"
              ></div>
              <p></p>

              <h4 id="teacherInfo" class="text-secondary fw-bold">講師介紹</h4>
              <div v-html="classData.teacherInfo" class="mb-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 類似課程推薦 -->
    <div class="row g-3 mb-5">
      <h4 class="text-secondary fw-bold">類似課程推薦...</h4>

      <div
        class="col-md-4"
        v-for="similarClass in similarClasses"
        :key="similarClass.id"
      >
        <div class="card" @click="refreshPage(similarClass.id)">
          <!-- <a class="text-decoration-none"> -->
          <div class="ratio ratio-16x9">
            <img
              :src="similarClass.imageUrl"
              class="card-img-top img-cover"
              alt="..."
            />
          </div>

          <div class="card-body">
            <h5>{{ similarClass.title }}</h5>
          </div>
          <!-- </a> -->
        </div>
      </div>

      <!-- <div class="col-md-4">
        <div class="card">
          <div class="card-body">dk4t/6</div>
        </div>
      </div> -->
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../../stores/cartStore.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      classId: this.$route.params.id,
      classData: {},
      currentCategory: "",
      similarClasses: [],
      checkBuyStatus: false,
    };
  },
  mounted() {
    this.classId = this.$route.params.id;
    this.getClassData();
    this.getCartList();
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  watch: {
    currentCategory() {
      this.getSmilarClassData();
    },

    cartList() {
      this.getCartList();

      this.checkBuyStatus = this.cartList.carts.some((item) => {
        return item.product_id === this.classId;
      });

      // console.log(checkBuyStatus);
    },
  },
  methods: {
    ...mapActions(cartStore, ["getCartList", "addToCart"]),

    // 點擊相關推薦重新渲染畫面
    refreshPage(id) {
      this.classId = id;
      this.$router.push(`/course/${id}`);
      this.getClassData();
      this.getSmilarClassData();
      window.scrollTo(0, 0);
    },
    getClassData() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.classId}`)
        .then((res) => {
          this.classData = res.data.product;
          this.currentCategory = res.data.product.category;
        })
        .catch(() => {
          this.$router.push("/notFound");
        });
    },
    getSmilarClassData() {
      // console.log(this.classId);

      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${this.currentCategory}`
        )
        .then((res) => {
          // console.log(res.data.products);

          this.similarClasses = res.data.products.filter((course) => {
            return course.id !== this.classId;
          });

          // console.log(this.similarClasses);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
