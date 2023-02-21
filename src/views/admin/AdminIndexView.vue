<template>
  <!-- <router-view></router-view> -->

  <div class="container">
    <h3 class="text-center my-3">後台首頁</h3>
    <div class="text-end"></div>
    <div class="row">
      <div class="col-3">
        <!-- <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            The current link item
          </a>
          <a href="#" class="list-group-item list-group-item-action"
            >A second link item</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >A third link item</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >A fourth link item</a
          >
          <a class="list-group-item list-group-item-action disabled"
            >A disabled link item</a
          >
        </div> -->
      </div>
      <div class="col-9">後台內容</div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
