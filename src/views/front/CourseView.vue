<template>
  <div class="container full-height">
    <!-- <div>單一課程詳細頁面</div> -->

    <!-- {{ classData }} -->

    <!-- 募資中版型 -->
    <div class="row my-3 g-3">
      <div class="col-md-7">
        <div class="ratio ratio-16x9 h-100">
          <img
            style="background-position: bottom"
            class="img-cover"
            src="https://images.unsplash.com/photo-1613672034259-f05683d4d00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-5">
        <div class="card h-100">
          <div class="card-body">
            <span
              class="w-25 badge bg-white text-primary border border-primary mb-3"
            >
              藝術
            </span>
            <span class="w-25 badge bg-secondary mb-3 ms-2"> 募資中 </span>
            <h4>課程名稱課程名稱課程名</h4>

            <!-- <p class="h4 text-primary fw-bold my-3">
              NT$ 3689
              <del class="ms-1 fs-6 text-muted fw-light"> NT$ 5366 </del>
            </p> -->

            <div class="bg-light p-3 my-3">
              <p class="text-muted mb-0">募資達標門檻 NT$ 88000</p>
              <p class="text-dark mb-2">
                已募資金額
                <span class="fw-bold"> NT$ 67089 </span>
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
                  75%
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
                    <span class="fs-4 fw-bold text-primary"> NT$ 3689</span>
                  </p>
                </div>
                <div class="border-start text-center w-50">
                  <p class="mb-0">
                    正式售價 <br />
                    <del class="fs-4"> NT$ 5689</del>
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
    </div>

    <!-- 已開課版型 -->
    <div class="row my-3 g-3">
      <div class="col-md-7">
        <div class="ratio ratio-16x9 h-100">
          <img
            style="background-position: bottom"
            class="img-cover"
            src="https://images.unsplash.com/photo-1613672034259-f05683d4d00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-5">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex flex-column h-100">
              <div class="d-flex">
                <span
                  class="w-25 badge bg-white text-primary border border-primary mb-3"
                >
                  藝術
                </span>
                <span class="w-25 badge bg-darkblue mb-3 ms-2"> 已開課 </span>
              </div>
              <div>
                <h4>
                  課程名稱課程名稱課程名稱課程名稱課程名稱課程名稱課程名稱
                </h4>

                <p class="h4 text-primary fw-bold my-3">
                  NT$ 3689
                  <del class="ms-1 fs-6 text-muted fw-light"> NT$ 5366 </del>
                </p>
                <p>同學 ?? 人</p>
              </div>

              <div class="bg-light p-3 mb-2">
                課程描述課程描述課程描述課程，描述課程描述課程描述課程描述，述課程描述課程描述課程描述。
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
    </div>

    <!-- 課程詳情介紹 -->
    <div class="row mb-5">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <ul
              class="nav nav-tabs mb-3 sticky-top bg-white"
              style="top: 100px"
            >
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
              <div>
                <p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore itaque doloremque odit veniam esse iusto vero eligendi
                  quaerat adipisci nihil nisi placeat officiis magni incidunt
                  ducimus, ex nobis et. Impedit laborum amet maiores magnam ab
                  odio, molestias cumque esse non velit deserunt iure aspernatur
                  quae exercitationem aut. Culpa, ullam saepe. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Tempore itaque
                  <br />
                  doloremque odit veniam esse iusto vero eligendi quaerat
                  adipisci nihil nisi placeat officiis magni incidunt ducimus,
                  ex nobis et. Impedit laborum amet maiores magnam ab odio,
                  molestias cumque esse non velit deserunt iure aspernatur quae
                  exercitationem aut. Culpa, ullam saepe. Lorem ipsum dolor sit
                  <br />
                  <br />
                  <br />
                  <br />
                  amet consectetur adipisicing elit. Tempore itaque doloremque
                  odit veniam esse iusto vero eligendi quaerat adipisci nihil
                  nisi placeat officiis magni incidunt ducimus, ex nobis et.
                  Impedit laborum amet maiores magnam ab odio, molestias cumque
                  esse non velit deserunt iure aspernatur quae exercitationem
                  aut. Culpa, ullam saepe.
                </p>
              </div>
              <h4 id="getSkill" class="getSkill">收穫技能</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                itaque doloremque odit veniam esse iusto vero eligendi quaerat
                adipisci nihil nisi placeat officiis magni incidunt ducimus, ex
                nobis et. Impedit laborum amet maiores magnam ab odio, molestias
                cumque esse non velit deserunt iure aspernatur quae

                <br />
                exercitationem aut. Culpa, ullam saepe. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Tempore itaque doloremque
                odit veniam esse iusto vero eligendi quaerat adipisci nihil nisi
                placeat officiis magni incidunt ducimus, ex nobis et. Impedit
                laborum amet maiores magnam ab odio, molestias cumque esse non
                velit deserunt iure aspernatur quae exercitationem aut. Culpa,
                ullam saepe. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore itaque doloremque odit veniam esse iusto vero
                eligendi quaerat adipisci nihil nisi placeat officiis magni
                <br />
                incidunt ducimus, ex nobis et. Impedit laborum amet maiores
                magnam ab odio, molestias cumque esse non velit deserunt iure
                aspernatur quae exercitationem aut. Culpa, ullam saepe. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Tempore
                itaque doloremque odit veniam esse iusto vero eligendi quaerat
                adipisci nihil nisi placeat officiis magni incidunt ducimus, ex
                nobis et. Impedit laborum amet maiores magnam ab odio, molestias
                cumque esse non velit deserunt iure aspernatur quae
                exercitationem aut. Culpa, ullam saepe.
              </p>

              <h4 id="teacherInfo">講師介紹</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                itaque doloremque odit veniam esse iusto vero eligendi quaerat
                adipisci nihil nisi placeat officiis magni incidunt ducimus, ex
                nobis et. Impedit laborum amet maiores magnam ab odio, molestias
                cumque esse non velit deserunt iure aspernatur quae
                <br />
                exercitationem aut. Culpa, ullam saepe. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Tempore itaque doloremque
                odit veniam esse iusto vero eligendi quaerat adipisci nihil nisi
                placeat officiis magni incidunt ducimus, ex nobis et. Impedit
                laborum amet maiores magnam ab odio, molestias cumque esse non
                velit deserunt iure aspernatur quae exercitationem aut. Culpa,
                ullam saepe. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore itaque doloremque odit veniam esse iusto vero
                eligendi quaerat adipisci nihil nisi placeat officiis magni
                incidunt ducimus, ex nobis et. Impedit laborum amet maiores
                <br />
                magnam ab odio, molestias cumque esse non velit deserunt iure
                aspernatur quae exercitationem aut. Culpa, ullam saepe. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Tempore
                itaque doloremque odit veniam esse iusto vero eligendi quaerat
                adipisci nihil nisi placeat officiis magni incidunt ducimus, ex
                nobis et. Impedit laborum amet maiores magnam ab odio, molestias
                cumque esse non velit deserunt iure aspernatur quae
                exercitationem aut. Culpa, ullam saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3">
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
        })
        .catch((err) => {
          this.$router.push("/notFound");
        });
    },
  },
};
</script>
