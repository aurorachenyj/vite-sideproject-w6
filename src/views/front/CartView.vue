<template>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>
  <div class="container">
    <h3 class="my-5">
      購物車

      <span v-if="cartList.carts" class="fs-6 text-darkblue fw-bold">
        目前有 {{ cartList.carts.length }} 門課程
      </span>
    </h3>
    <div class="row g-4">
      <div class="col-md-8">
        <div v-if="cartList.carts">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">課程名稱</th>
                <th scope="col">課程狀態</th>
                <th scope="col">售價</th>
                <th scope="col" class="text-end">付款金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="cartList.carts.length === 0">
                <td colspan="5" class="text-center">
                  購物車尚無商品 <br />
                  <a href="#/courses" class="btn btn-outline-primary my-2">
                    探索課程
                  </a>
                </td>
              </tr>

              <tr v-for="item in cartList.carts" :key="item.id">
                <td>
                  <a
                    @click="delCartItem(item.id, item.product_id)"
                    class="link-primary"
                  >
                    <i class="bi bi-trash3"></i>
                  </a>
                </td>
                <td>{{ item.product.title }}</td>

                <td v-if="item.product.courseStatus === 'classFunding'">
                  募資中
                </td>
                <td v-else-if="item.product.courseStatus === 'classOpen'">
                  已開課
                </td>

                <td>{{ item.product.origin_price }}</td>
                <td class="text-end">{{ item.product.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-md-4">
        <div v-if="cartList.carts">
          <div class="bg-light p-3">
            <h5 class="text-center border-bottom py-3">訂單明細</h5>
            <div class="clear-fix">
              <p class="d-inline">小計</p>
              <p class="d-inline float-end">
                <del> NT$ {{ cartList.total }} </del>
              </p>
            </div>

            <h4 class="text-primary text-end border-bottom py-3">
              NT$ {{ cartList.final_total }}
            </h4>
            <br />

            <div class="text-end">
              <span
                @click="fillInCouponData"
                :class="{ disabled: cartList.carts.length === 0 }"
                class="badge bg-secondary btn mb-2"
                >一鍵帶入</span
              >
            </div>
            <div class="input-group">
              <span class="input-group-text" id="discount">使用優惠券</span>
              <input
                v-model="couponCode"
                type="text"
                class="form-control"
                placeholder="輸入代碼"
              />
            </div>

            <!-- <span
              @click="removeCoupon"
              v-if="couponCode !== ''"
              class="badge bg-primary mt-1"
              style="cursor: pointer; padding: 0.3rem"
            >
              <i class="bi bi-x-circle"></i> 取消優惠券
            </span> -->

            <p
              class="fs-7 text-end text-muted mb-0"
              v-if="couponResText !== ''"
            >
              {{ couponResText }}
            </p>

            <button
              v-if="cartList.carts.length === 0"
              class="btn btn-outline-primary w-100 disabled mt-4"
              type="button"
            >
              未選購任何課程
            </button>
            <!-- <button  v-else class="btn btn-outline-primary w-100" type="button">
              結帳去
            </button> -->
            <RouterLink
              to="./cart/order"
              v-else
              class="btn btn-outline-primary w-100 mt-4"
              type="button"
            >
              結帳去
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- {{ showCheck }} -->
  <br />
  <br />
  <br />
</template>

<script>
import Toast from "../../utils/Toast";
import cartStore from "../../stores/cartStore.js";
import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      couponCode: "",
      couponResText: "",
      // cartList: {}, 已移到 cartStore.js 的 cartListData 裡
    };
  },
  mounted() {
    this.getCartList();
    this.fillInCouponData();
  },
  computed: {
    ...mapState(cartStore, ["cartList", "showCheck"]),
  },

  watch: {
    cartList() {
      console.log(this.cartList);
      // if (this.cartList === ) {
      //   this.clearCartList();
      // }
    },
    // couponCode() {
    //   this.fillInCouponData();
    // },
  },

  methods: {
    // getCartList() {
    //   this.isLoading = true;
    //   this.$http
    //     .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
    //     .then((res) => {
    //       console.log(res.data.data);

    //       this.cartList = res.data.data;
    //       this.isLoading = false;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

    fillInCouponData() {
      console.log(localStorage.getItem("coupon"));

      if (localStorage.getItem("coupon") === null) {
        Toast.fire({
          icon: "error",
          title: "尚未取得優惠券",
        });

        return;
      }

      this.couponCode = localStorage.getItem("coupon");

      const data = {
        code: this.couponCode,
      };

      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`, { data })
        .then((res) => {
          console.log(res);

          this.couponResText = res.data.message;
          this.cartList.final_total = res.data.data.final_total;

          // localStorage.removeItem("coupon");

          // this.getCartList();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    removeCoupon() {
      this.couponCode = "";
      // this.getCartList();
      // 但沒有取消coupon api
    },

    delCartItem(id, productId) {
      // console.log(this.cartList);
      console.log("id", id);
      console.log("productId", productId);
      console.log(this.showCheck);
      const targetDelIndex = this.showCheck.indexOf(productId);
      console.log(targetDelIndex);

      this.showCheck.splice(targetDelIndex, 1);
      console.log(this.showCheck);

      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${id}`)
        .then((res) => {
          // alert(res.data.message);

          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          this.getCartList();
        })
        .catch((err) => {
          // alert(err.response.data.message);

          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    ...mapActions(cartStore, ["getCartList"]),
  },
};
</script>
