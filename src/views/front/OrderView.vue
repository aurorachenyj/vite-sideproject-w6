<template>
  <div class="container mt-5">
    <h3 class="my-3 d-inline me-2">結帳</h3>

    <a
      href="#/cart"
      class="badge bg-secondary text-decoration-none align-middle text-white mb-2"
    >
      <i class="bi bi-arrow-bar-left"></i> 回購物車頁</a
    >
    <div class="row g-4 mt-2">
      <div class="col-md-8">
        <div class="bg-light mb-3 p-3">
          <h5 class="mb-3 pb-3 border-bottom">付款方式</h5>

          <div class="form-check">
            <input
              v-model="orderForm.user.payment"
              value="信用卡"
              class="form-check-input"
              type="radio"
              name="payment"
              id="card"
            />
            <label class="form-check-label" for="card"> 信用卡 </label>
          </div>

          <div class="form-check">
            <input
              v-model="orderForm.user.payment"
              value="ATM"
              class="form-check-input"
              type="radio"
              name="payment"
              id="ATM"
            />
            <label class="form-check-label" for="ATM"> ATM </label>
          </div>

          <div class="form-check">
            <input
              v-model="orderForm.user.payment"
              value="超商付款"
              class="form-check-input"
              type="radio"
              name="payment"
              id="store"
            />
            <label class="form-check-label" for="store"> 超商付款 </label>
          </div>
        </div>

        <div class="bg-light p-3">
          <h5 class="mb-3 pb-3 border-bottom">資料填寫</h5>

          <!-- @submit="" -->
          <v-form class="" v-slot="{ errors }" @submit="sendOrder">
            <div class="mb-3">
              <label for="user" class="form-label">姓名</label>
              <v-field
                name="姓名"
                v-model="orderForm.user.name"
                :class="{ 'is-invalid': errors['姓名'] }"
                id="user"
                type="text"
                class="form-control"
                placeholder="請輸入真實姓名"
                rules="required|min:2"
              ></v-field>

              <error-message name="姓名" class="invalid-feedback">
              </error-message>
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label">手機</label>
              <v-field
                name="手機號碼"
                v-model="orderForm.user.tel"
                :class="{ 'is-invalid': errors['手機號碼'] }"
                id="phone"
                type="tel"
                class="form-control"
                placeholder="請輸入手機號碼"
                rules="required|numeric|min:9"
              ></v-field>
              <error-message name="手機號碼" class="invalid-feedback">
              </error-message>
            </div>
            <div class="mb-3">
              <label for="user" class="form-label">聯絡信箱</label>
              <v-field
                name="信箱"
                v-model="orderForm.user.email"
                :class="{ 'is-invalid': errors['信箱'] }"
                id="user"
                type="email"
                class="form-control"
                placeholder="請輸入信箱"
                rules="required|email"
              ></v-field>
              <error-message name="信箱" class="invalid-feedback">
              </error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                v-model="orderForm.message"
                class="form-control"
                id="message"
                placeholder="選填"
                rows="3"
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-outline-primary w-50">
                送出訂單
              </button>
            </div>
            <!-- 
              <button class="btn btn-outline-primary" type="submit">
                登入
              </button>
            </div> -->
          </v-form>
        </div>
      </div>

      <div class="col-md-4">
        <div v-if="cartList.carts">
          <div class="bg-light p-3">
            <h5 class="text-center border-bottom py-3">訂單明細</h5>
            <p class="d-inline">購買列表 ({{ cartList.carts.length }})</p>
            <ul class="py-3 list-unstyled">
              <li
                v-for="classItem in cartList.carts"
                :key="classItem.id"
                class="border-bottom rounded-3 p-2 bg-white"
              >
                <p class="mb-1">
                  {{ classItem.product.title }}
                </p>
                <p class="text-end mb-1">NT$ {{ classItem.final_total }}</p>
              </li>
            </ul>

            <p class="d-inline">總計</p>
            <h4 class="text-primary text-end">
              NT$ {{ cartList.final_total }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../../stores/cartStore.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      orderForm: {
        user: {
          name: "",
          tel: "09",
          email: "",
          address: "免填地址",
          payment: "信用卡",
        },
        message: "",
      },
    };
  },
  mounted() {
    this.getCartList();
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    sendOrder() {
      if (this.cartList.carts.length === 0) {
        alert("購物車內無商品");
        this.$router.push("/courses");
        return;
      }

      const data = this.orderForm;

      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          const { orderId } = res.data;

          alert(res.data.message);
          this.$router.push(`/orderCheck/${orderId}`);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    ...mapActions(cartStore, ["getCartList"]),
  },
};
</script>
