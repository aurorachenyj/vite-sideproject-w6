<template>
  <div class="full-height bg-light py-5">
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
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">相關推薦</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Toast from "../../utils/Toast";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articleId: "",
      articleData: {},
    };
  },
  watch: {
    articleId() {
      this.getArticle();
    },
  },
  mounted() {
    // console.log(this.$route.params.articleId);
    this.articleId = this.$route.params.articleId;
  },
  methods: {
    switchTime(timeStamp) {
      const nowDate = new Date(timeStamp * 1000).toLocaleDateString();

      return nowDate;
    },
    getArticle() {
      console.log(this.articleId);

      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${this.articleId}`)
        .then((res) => {
          console.log(res);
          this.articleData = res.data.article;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
