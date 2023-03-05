<template>
  <div class="container full-height">
    <h4 class="my-5">我收藏的課程 <i class="bi bi-bookmark-heart"></i></h4>

    <!-- 沒有收藏時 -->
    <div class="d-flex justify-content-center mb-5">
      <div class="col-12 col-md-8 border border-3 rounded-3 py-3">
        <p class="text-center">
          尚未收藏任何課程 <br />

          <a href=".#/courses" class="btn btn-outline-primary mt-2">
            探索課程
          </a>
        </p>
      </div>
    </div>

    <!-- 有收藏 -->
    <div class="row align-items-center gy-3 pb-3 mb-3 border-bottom">
      <div class="col-md-3">
        <img
          src="https://images.unsplash.com/photo-1613672034259-f05683d4d00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
          style="width: 10rem"
          class="img-cover d-none d-md-block"
          alt=""
        />
      </div>
      <div class="col-md-6">
        <h5 class="mb-0">水彩入門課程</h5>
        <div class="mt-3 d-flex align-items-center">
          <span class="badge bg-secondary me-3">已開課</span>

          <h5 class="mb-0 fw-bold text-primary">NT$ 3999</h5>
        </div>
      </div>

      <div class="col-md-3">
        <div class="text-end text-md-start">
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-outline-light">
              <i class="bi bi-trash3 text-dark"></i>
            </button>
            <button type="button" class="btn btn-outline-primary">
              移至購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row align-items-center gy-3 mb-3 pb-3 mb-3 border-bottom">
      <div class="col-md-3">
        <img
          src="https://images.unsplash.com/photo-1613672034259-f05683d4d00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
          style="width: 10rem"
          class="img-cover d-none d-md-block"
          alt=""
        />
      </div>
      <div class="col-md-6">
        <h5 class="mb-0">
          水彩入門課程水彩入門課程水彩入門課程水彩入門課程水彩入門課程
        </h5>
        <div class="mt-3 d-flex align-items-center">
          <span class="badge bg-secondary me-3">已開課</span>

          <h4 class="mb-0 fw-bold text-primary">
            NT$ 3999 <del class="text-muted fs-6 fw-light"> NT# 6999 </del>
          </h4>
        </div>
      </div>

      <div class="col-md-3">
        <div class="text-end text-md-start">
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-outline-light">
              <i class="bi bi-trash3 text-dark"></i>
            </button>
            <button type="button" class="btn btn-outline-primary">
              移至購物車
            </button>
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
