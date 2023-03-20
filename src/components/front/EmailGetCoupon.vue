<style>
.alert {
  margin-bottom: 0;
}
</style>

<template>
  <div
    class="alert alert-warning alert-dismissible fade show"
    ref="emailGetCoupon"
    role="alert"
  >
    <div class="d-md-flex align-items-center justify-content-center">
      <strong class="me-2 text-danger">限時大放送！訂閱電子報贈優惠券 </strong>

      <!-- 電腦版顯示 -->
      <div class="input-group w-25 d-none d-md-flex">
        <!-- <span class="input-group-text" id="basic-addon1">訂閱</span> -->
        <input
          v-model="emailData"
          type="mail"
          class="form-control border-0 opacity-75"
          placeholder="請輸入email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <button
          @click="getEmailData"
          class="btn btn-outline-secondary opacity-75"
          type="button"
        >
          訂閱
        </button>
      </div>

      <!-- 手機版顯示 -->
      <div class="input-group w-75 d-md-none">
        <!-- <span class="input-group-text" id="basic-addon1">訂閱</span> -->
        <input
          v-model="emailData"
          type="mail"
          class="form-control"
          placeholder="email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <button
          @click="getEmailData"
          class="btn btn-outline-secondary"
          type="button"
        >
          訂閱
        </button>
      </div>
    </div>
    <button
      @click="removeAlert"
      ref="delBtn"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
import Toast from "../../utils/Toast";
import Swal from "sweetalert2";

export default {
  name: "EmailGetCoupon",
  data() {
    return {
      emailData: "",
    };
  },
  mounted() {},
  methods: {
    getEmailData() {
      console.log(this.emailData);

      if (this.emailData === "") {
        Toast.fire({
          icon: "error",
          title: "請輸入email",
        });
      } else if (!this.emailData.includes("@")) {
        Toast.fire({
          icon: "error",
          title: "請輸入正確的email格式",
        });
      } else {
        Swal.fire(
          "<p class='fs-5'> 恭喜獲得 <span class='text-primary' >  6折優惠券 </span>  <br />  結帳時請輸入代碼: 666 </p>"
        );

        // 優惠碼存localStorage
        localStorage.setItem("coupon", "666");
        this.$refs.emailGetCoupon.style.display = "none";
      }
    },

    removeAlert() {
      console.log(this.$refs.emailGetCoupon);
      this.$refs.emailGetCoupon.style.display = "none";
    },
  },
};
</script>
