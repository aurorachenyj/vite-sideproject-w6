<template>
  <div class="full-height bg-light py-5 position-relative">
    <!-- <i
      class="bi bi bi-rocket fs-2 text-primary img-hover-enlarge d-none"
      id="toTopBtn"
      @click="goTotop"
      style="bottom: 2rem; right: 3rem; position: fixed; z-index: 2000"
    ></i> -->

    <div class="container" v-if="articleData.author">
      <h3 class="mt-3">{{ articleData.title }}</h3>

      <span class="me-4"
        ><i class="bi bi-person-vcard me-2"></i>{{ articleData.author }}
      </span>
      <span>
        <i class="bi bi-calendar2-week me-2"></i>
        {{ switchTime(articleData.create_at) }}
      </span>

      <div class="row mt-3">
        <div class="col-md-9">
          <div class="ratio ratio-16x9">
            <img class="img-cover" :src="articleData.image" alt="" />
          </div>

          <div
            class="position-relative mt-5 p-3 text-light fw-bold opacity-75 border-3 rounded fs-5"
            style="background: rgba(38, 81, 110, 0.9)"
          >
            <p class="mb-0">
              {{ articleData.description }}
            </p>
            <i
              class="bi bi-pin-fill fs-3 text-white position-absolute top-0 start-5"
              style="transform: rotate(-33deg) translate(-50%, -50%)"
            ></i>
            <i
              class="bi bi-pin fs-2 text-primary position-absolute top-0 start-5"
              style="transform: rotate(-33deg) translate(-50%, -50%)"
            ></i>
          </div>

          <article class="my-5 fs-5" v-html="articleData.content"></article>
        </div>
        <div class="col-md-3" v-if="similarClassData">
          <div class="card border-0 sticky-top" style="top: 100px">
            <div class="card-body">
              <h5 class="fw-bold text-secondary">相關課程推薦</h5>

              <div
                class="my-3 border border-end border-bottom rounded-3 hover-shadow"
                v-for="similarClass in similarClassData"
                :key="similarClass.id"
              >
                <RouterLink
                  :to="`/course/${similarClass.id}`"
                  class="text-decoration-none text-dark"
                >
                  <div class="overflow-hidden">
                    <div class="ratio ratio-16x9">
                      <img
                        class="img-cover img-hover-enlarge"
                        :src="similarClass.imageUrl"
                        alt=""
                      />
                    </div>
                  </div>

                  <h6 class="p-3 mb-0">{{ similarClass.title }}</h6>
                </RouterLink>
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
// import Toast from "../../utils/Toast";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articleId: "",
      articleData: {},
      similarClassData: [],
      toTopBtn: "",
    };
  },
  watch: {
    articleId() {
      this.getArticle();
    },
    articleData() {
      this.getSimilarClass();
    },
  },
  created() {
    window.addEventListener("scroll", this.toTopBtnStatus);
  },
  mounted() {
    this.articleId = this.$route.params.articleId;
  },
  methods: {
    toTopBtnStatus() {
      this.toTopBtn = document.querySelector("#toTopBtn");

      if (window.scrollY > 100) {
        this.toTopBtn.classList.remove("d-none");
        this.toTopBtn.classList.add("d-block");
      } else {
        this.toTopBtn.classList.remove("d-block");
        this.toTopBtn.classList.add("d-none");
      }
    },

    goTotop() {
      window.scrollTo(0, 0);
    },

    getSimilarClass() {
      const categoryArr = ["商業", "藝術", "語言", "投資理財", "攝影"];
      const targetCategory = this.articleData.tag.find((item) => {
        return categoryArr.includes(item);
      });

      axios
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${targetCategory}`
        )
        .then((res) => {
          this.similarClassData = res.data.products;
        })

        .catch((err) => {
          console.log(err);
        });
    },

    switchTime(timeStamp) {
      const nowDate = new Date(timeStamp * 1000).toLocaleDateString();

      return nowDate;
    },
    getArticle() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${this.articleId}`)
        .then((res) => {
          this.articleData = res.data.article;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
