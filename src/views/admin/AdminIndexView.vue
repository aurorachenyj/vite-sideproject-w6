<template>
  <!-- <router-view></router-view> -->

  <div class="container">
    <h3 class="text-center my-3">後台首頁</h3>
    <div class="text-end"></div>
    <div class="row">
      <div class="col-3">
        orderStore 的 page 資料應該要顯示在這，但沒有 QQ

        <p v-if="page">{{ page }}</p>

        {{ test }}

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
    </div>
  </div>
</template>

<script>
// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import orderStore from "../../stores/orderStore.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(orderStore, ["test", "page"]),
  },
  methods: {
    ...mapActions(orderStore, ["getTotalPage"]),
  },
  mounted() {
    this.getTotalPage();
  },
};
</script>
