<template>
  <div class="full-height">
    <div class="bg-light py-5">
      <div class="container">
        <div class="row my-3">
          <div class="col">
            這裡做輪播
            <div class="card">
              <div class="card-body">1222222</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h3 class="my-3 fw-bold">精選文章</h3>

            <div class="row g-4">
              <div class="col-lg-6">
                <div class="h-100 position-relative">
                  <div class="ratio ratio-4x3">
                    <img
                      class="img-cover"
                      src="https://images.unsplash.com/photo-1678067573406-7e206fcfe184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                    />
                  </div>

                  <div
                    class="position-absolute bottom-0 start-0 end-0 p-2"
                    style="
                      background: linear-gradient(
                        to top,
                        black,
                        rgba(226, 222, 222, 0.1)
                      );
                    "
                  >
                    <h4 class="text-white fw-bold mb-0 p-2">
                      標題標題標題標題標題標 題標題題標題題標題題題題標題題標題
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="h-100 d-flex flex-column justify-content-between">
                  <div class="row align-items-center mb-3 g-2">
                    <div class="col-8">
                      <h5>標題標題標題標題標題標題</h5>

                      <p class="" style="">
                        中文描述 中文描述 中文描述 中文描述 中文描述 中文描述
                        中文描述 中文描述 中文描述 中文描述 中文描
                      </p>
                    </div>
                    <div class="col-4">
                      <div class="ratio ratio-4x3">
                        <img
                          style=""
                          class="img-cover"
                          src="https://images.unsplash.com/photo-1678244660394-fa02a19ac24a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row align-items-center mb-3 g-2">
                    <div class="col-8">
                      <div>
                        <h5>標題標題標題標題標題標，題標題題標題題標題題2</h5>
                        <p>
                          中文描述 中文描述 中文描述 中文描述 中文描述 中文描述
                        </p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="ratio ratio-4x3">
                        <img
                          style=""
                          class="img-cover"
                          src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row flex-md-row-reverse gy-3 g-4">
        <div class="col-md-3">
          <div class="sticky-top" style="top: 110px">
            <h4 class="fw-bold mb-3">主題標籤探索</h4>

            <div class="row g-1">
              <!-- <div class="col-12">
                <div class="d-flex flex-md-column justify-content-between">
                  <button class="btn btn-outline-primary mb-2 me-2 me-md-0">
                    藝術
                  </button>
                  <button class="btn btn-outline-secondary mb-2 me-2 me-md-0">
                    藝術
                  </button>
                  <button class="btn btn-primary mb-2 me-2 me-md-0">
                    藝術
                  </button>
                  <button class="btn btn-primary mb-2 me-2 me-md-0">
                    藝術
                  </button>
                  <button class="btn btn-primary mb-2 me-2 me-md-0">
                    藝術
                  </button>
                  <button class="btn btn-primary mb-2 me-2 me-md-0">
                    藝術生活
                  </button>
                </div>
              </div> -->

              <!-- <h4 class="fw-bold mb-3">主題標籤探索</h4> -->
              <div class="col-12">
                <div
                  class="card bg-light border-0"
                  style="background: url(../../../public/img/content-bg.png)"
                >
                  <div class="card-body">
                    <a
                      href=""
                      class="m-1 badge text-decoration-none rounded-pill fs-7 hover-bg-primary"
                      >#123</a
                    ><a
                      href=""
                      class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7"
                      >#生活</a
                    ><a
                      href=""
                      class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7"
                      >#攝影</a
                    ><a
                      href=""
                      class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7"
                      >#投資理財</a
                    >

                    <a
                      href=""
                      class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7"
                      >#投資</a
                    >

                    <a
                      href=""
                      class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7"
                      >#理財</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-9">
          <h4 class="fw-bold mb-3">最新文章</h4>

          <!-- 到時改成router link -->
          <a href="" class="text-decoration-none text-dark">
            <!-- :to="`/article/${}`" -->
            <!-- <RouterLink class="text-decoration-none"> -->
            <div class="row align-items-center g-3 border-bottom py-3">
              <div class="col-4">
                <div class="ratio ratio-4x3">
                  <img
                    style=""
                    class="img-cover"
                    src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-8">
                <div>
                  <span
                    class="badge bg-light text-muted me-2 mb-2 border-bottom"
                  >
                    攝影
                  </span>
                  <span
                    class="badge bg-light text-muted me-2 mb-2 border-bottom"
                  >
                    攝影技巧 </span
                  ><span
                    class="badge bg-light text-muted me-2 mb-2 border-bottom"
                  >
                    手機攝影 </span
                  ><span
                    class="badge bg-light text-muted me-2 mb-2 border-bottom"
                  >
                    動態攝影
                  </span>

                  <h5>標題標題標題標題標題標，題標題題標題題標題題2</h5>
                  <p class="d-none d-md-block text-muted">
                    中文描述 中文描述 中文描述 中文描述 中文描述 描述 中文描述
                    中文描述 中文描述
                  </p>
                  <span class="me-4"
                    ><i class="bi bi-person-vcard me-2"></i>kren
                  </span>
                  <span>
                    <i class="bi bi-calendar2-week me-2"></i> 2023/3/9
                  </span>
                </div>
              </div>
            </div>
            <!-- </RouterLink> -->
          </a>
          <div class="row align-items-center mb-3 g-2 border-bottom py-3">
            <div class="col-4">
              <div class="ratio ratio-4x3">
                <img
                  style=""
                  class="img-cover"
                  src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="col-8">
              <div>
                <span class="me-4"
                  ><i class="bi bi-person-vcard me-2"></i>kren
                </span>
                <span>
                  <i class="bi bi-calendar2-week me-2"></i> 2023/3/9
                </span>
                <h5>標題標題標題標題標題標，題標題題標題題標題題2</h5>
                <p>中文描述 中文描述 中文描述 中文描述 中文描述 中文描述</p>
                <!-- <span class="badge bg-secondary me-2 mb-2"> 攝影 </span>
                <span class="badge bg-darkblue me-2 mb-2"> 手機攝影 </span>
                <span class="badge bg-primary me-2 mb-2"> 手機攝影 </span> -->
              </div>
            </div>
          </div>

          <div class="row align-items-center mb-3 g-2 border-bottom py-3">
            <div class="col-4">
              <div class="ratio ratio-4x3">
                <img
                  style=""
                  class="img-cover"
                  src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="col-8">
              <div>
                <h5>標題標題標題標題標題標，題標題題標題題標題題2</h5>
                <p>
                  中文描述 中文描述 中文描述 中文描述 中文描述 中文描述中文描述
                  中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述
                  中文描述 中文描述
                </p>
                <span class="me-4"
                  ><i class="bi bi-person-vcard me-2"></i>kren
                </span>
                <span>
                  <i class="bi bi-calendar2-week me-2"></i> 2023/3/9
                </span>
              </div>
            </div>
          </div>
          <div class="row align-items-center mb-3 g-2">
            <div class="col-4">
              <div class="ratio ratio-4x3">
                <img
                  style=""
                  class="img-cover"
                  src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="col-8">
              <div>
                <h5>標題標題標題標題標題標，題標題題標題題標題題2</h5>
                <p>中文描述 中文描述 中文描述 中文描述 中文描述 中文描述</p>
              </div>
            </div>
          </div>

          <div class="row align-items-center mb-3 g-2">
            <div class="col-4">
              <div class="ratio ratio-4x3">
                <img
                  style=""
                  class="img-cover"
                  src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="col-8">
              <div>
                <h5>標題標題標題標題標題標，題標題題標題題標題題2</h5>
                <p>中文描述 中文描述 中文描述 中文描述 中文描述 中文描述</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
