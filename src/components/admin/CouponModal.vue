<template>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>

  <div
    class="modal fade"
    ref="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="exampleModalLabel">
            <span v-if="status === 'new'">新增</span>
            <span v-else-if="status === 'edit'">編輯</span>
            優惠券
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ editItem }}
          <hr />
          {{ status }}
          <form>
            <div class="mb-3">
              <label for="couponTitle" class="form-label">優惠券標題</label>
              <input
                v-model="tempCoupon.title"
                type="text"
                class="form-control"
                id="couponTitle"
              />
            </div>

            <div class="mb-3">
              <label for="couponText" class="form-label"> 優惠代碼 </label>
              <input
                v-model="tempCoupon.code"
                type="text"
                class="form-control"
                id="couponText"
              />
            </div>

            <div class="mb-3">
              <label for="discount" class="form-label"> 折扣 % 數 </label>
              <input
                v-model="tempCoupon.percent"
                type="number"
                class="form-control"
                id="discount"
                placeholder="請輸入折扣百分比數字"
              />
            </div>

            <div class="mb-3" v-if="status === 'edit'">
              {{ switchTimeStamp(tempCoupon.due_date) }}
              <label for="deadline" class="form-label"> 到期日期 </label>
              <input
                v-model="tempCoupon.due_date"
                type="date"
                class="form-control"
                id="deadline"
              />
            </div>

            <div class="mb-3" v-else-if="status === 'new'">
              <label for="deadline" class="form-label"> 到期日期 </label>
              <input
                v-model="tempCoupon.due_date"
                type="date"
                class="form-control"
                id="deadline"
              />
            </div>

            <div class="mb-3 form-check">
              {{ tempCoupon.is_enabled }}
              <input
                v-model="tempCoupon.is_enabled"
                :true-value="1"
                :false-value="0"
                type="checkbox"
                class="form-check-input"
                id="use"
              />
              <label class="form-check-label" for="use">是否啟用</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button @click="addCoupon" type="button" class="btn btn-danger">
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import Toast from "../../utils/Toast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      modal: "",
      isLoading: false,
      tempCoupon: {
        title: "",
        is_enabled: 1,
        percent: 0,
        due_date: 0,
        code: "0",
      },
    };
  },
  props: { editItem: {}, status: {} },
  mounted() {
    this.modal = new Modal(this.$refs.modal);

    // this.$refs.modal.addEventListener(
    //   "hide.bs.modal",
    //   this.$emit("randerPage")
    // );
  },
  watch: {
    editItem() {
      this.tempCoupon = this.editItem;
    },
  },
  methods: {
    hideModal() {
      this.modal.hide();
    },
    showModal() {
      this.modal.show();
    },

    switchTimeStamp(timeStamp) {
      console.log(typeof timeStamp);

      if (typeof timeStamp !== "number") {
        return;
      }

      console.log(timeStamp);

      this.tempCoupon.due_date = new Date(timeStamp * 1000)
        .toISOString()
        .split("T")[0];

      return this.tempCoupon.due_date;

      // const date = new Date(timeStamp * 1000).toLocaleDateString();
      // return date.replace("/", "-");
    },

    addCoupon() {
      this.isLoading = true;
      let url = "";
      let method = "";

      if (this.status === "new") {
        this.tempCoupon.due_date = Date.parse(this.tempCoupon.due_date) / 1000;
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`;
        method = "post";
      } else if (this.status === "edit") {
        this.tempCoupon.due_date = Date.parse(this.tempCoupon.due_date) / 1000;
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        method = "put";
      }

      const data = this.tempCoupon;

      this.$http[method](url, { data })

        .then((res) => {
          this.isLoading = false;

          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.modal.hide();
          this.$emit("randerPage");
        })
        .catch((err) => {
          this.isLoading = false;

          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
};
</script>
