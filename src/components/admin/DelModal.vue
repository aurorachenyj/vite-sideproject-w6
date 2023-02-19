<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">確認刪除此訂單?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button @click="delOrder" type="button" class="btn btn-danger">
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

  methods: {
    hideModal() {
      console.log("hideModal");
      this.modal.hide();
    },
    showModal() {
      console.log("showModal");
      this.modal.show();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    console.log(this.modal);
  },
};
</script>
