<template>
  <div class="full-height">
    <div
      class="sticky-top"
      style="
        top: 80px;
        background-image: url(https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
        background-position: 30% center;
      "
    >
      <div class="container">
        <LoadingVue v-model:active="isLoading"> </LoadingVue>

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
              <a href="#" class="text-decoration-none text-dark">分類類別</a>
            </li>
          </ol>
        </nav>
        <h3 class="mb-3">分類類別</h3>
        <div class="d-flex justify-content-center mb-5 pb-3">
          <button class="btn btn-outline-primary me-3">全部</button>
          <button class="btn btn-outline-primary me-3">已開課</button>
          <button class="btn btn-outline-primary">募資中</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <div class="col"><div class="card">123</div></div>
        <div class="col"><div class="card">123</div></div>
        <div class="col"><div class="card">123</div></div>
        <div class="col"><div class="card">123</div></div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
