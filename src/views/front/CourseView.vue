<template>
  <div class="d-md-none fixed-bottom bg-white py-3">
    <div class="container">
      <button class="btn w-25">
        <i class="bi bi-bookmark fs-3 fw-bold text-secondary"></i>
      </button>
      <button class="btn btn-outline-primary w-75">立即購買</button>
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
              <button class="btn btn-outline-primary w-75">立即購買</button>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row my-3 g-3" v-if="classData.courseStatus === 'classOpen'"> -->
      <!-- <div class="col-md-7">
        <div class="ratio ratio-16x9 h-100">
          <img
            style="background-position: bottom"
            class="img-cover"
            :src="classData.imageUrl"
            alt=""
          />
        </div>
      </div> -->

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
              <div>
                <h4>
                  {{ classData.title }}
                </h4>

                <p class="h4 text-primary fw-bold my-3">
                  NT$ {{ classData.price }}
                  <del class="ms-1 fs-6 text-muted fw-light">
                    NT$ {{ classData.origin_price }}
                  </del>
                </p>
                <p>同學 ?? 人</p>
              </div>

              <div class="bg-light p-3 mb-2">
                {{ classData.content }}
              </div>

              <div class="mt-auto">
                <button class="btn w-25">
                  <i class="bi bi-bookmark fs-3 fw-bold text-secondary"></i>
                </button>
                <button class="btn btn-outline-primary w-75">立即購買</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->

      <!-- 課程詳情介紹 -->
      <!-- <div class="row mb-5"> -->
      <div class="col-md-7 mb-3">
        <div class="card">
          <div class="card-body">
            <ul class="nav nav-tabs mb-3 sticky-top bg-white" style="top: 90px">
              <li class="nav-item">
                <a
                  class="nav-link"
                  onclick="document.getElementById('classSection').scrollIntoView()"
                  >課程章節</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onclick="document.getElementById('getSkill').scrollIntoView()"
                  >收穫技能</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onclick="document.getElementById('teacherInfo').scrollIntoView()"
                  >講師介紹</a
                >
              </li>
            </ul>

            <div>
              <h4 id="classSection" name="classSection">課程章節</h4>
              <div v-html="classData.content" class="border-bottom mb-3"></div>

              <h4 id="getSkill" class="getSkill">收穫技能</h4>
              <div
                v-html="classData.skillTree"
                class="border-bottom mb-3"
              ></div>
              <p></p>

              <h4 id="teacherInfo">講師介紹</h4>
              <div v-html="classData.teacherInfo" class="mb-3"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- 類似課程推薦 -->
    <div class="row g-3 mb-5">
      <h4 class="text-secondary fw-bold">類似課程推薦...</h4>

      <div class="col-md-4">
        <div class="card">
          <div class="card-body">dk4t/6</div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-body">dk4t/6</div>
        </div>
      </div>
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      classId: "",
      classData: {},
    };
  },
  mounted() {
    this.classId = this.$route.params.id;
    this.getClassData();
  },
  methods: {
    getClassData() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.classId}`)
        .then((res) => {
          this.classData = res.data.product;
          console.log(this.classData);
        })
        .catch((err) => {
          this.$router.push("/notFound");
        });
    },
  },
};
</script>
