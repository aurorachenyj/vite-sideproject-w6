<template>
  <div
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">確定刪除?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <p v-if="delId">
            id： <span class="text-danger"> {{ delId }} </span> 的訂單
          </p>

          <p v-else-if="del">
            優惠券名稱： <span class="text-danger"> {{ del }} </span>
          </p>

          <p v-else-if="delClassTitle">
            課程名稱： <span class="text-danger"> {{ delClassTitle }} </span>
          </p>

          <p v-else-if="delArticleTitle">
            文章標題： <span class="text-danger"> {{ delArticleTitle }} </span>
          </p>

          （注意，刪除後無法復原！）
        </div>

        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button @click="delItem" type="button" class="btn btn-danger">
            確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  data() {
    return {
      modal: "",
    };
  },
  props: [
    "delId",
    "del",
    "delClassTitle",
    "delClassId",
    "delArticleTitle",
    "delArticleId",
  ],

  methods: {
    hideModal() {
      this.modal.hide();
    },
    showModal() {
      this.modal.show();
    },

    delItem() {
      this.$emit("delItem");
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
