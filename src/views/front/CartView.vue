<template>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>
  <div class="container">
    <h3 class="my-5">
      購物車

      <span v-if="cartList.carts" class="fs-6">
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
                  <a href="./courses" class="btn btn-outline-primary my-2">
                    探索課程
                  </a>
                </td>
              </tr>

              <tr v-for="item in cartList.carts" :key="item.id">
                <td>
                  <a @click="delCartItem(item.id)" class="link-primary">
                    <i class="bi bi-trash3"></i>
                  </a>
                </td>
                <td>{{ item.product.title }}</td>
                <td>後台待新增</td>
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
              <span class="badge bg-secondary btn mb-2">一鍵帶入</span>
            </div>
            <div class="input-group mb-4">
              <span class="input-group-text" id="discount">使用優惠券</span>
              <input type="text" class="form-control" placeholder="輸入代碼" />
            </div>

            <button
              v-if="cartList.carts.length === 0"
              class="btn btn-outline-primary w-100 disabled"
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
              class="btn btn-outline-primary w-100"
              type="button"
            >
              結帳去
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
  <br />
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      // cartList: {}, 已移到 cartStore.js 的 cartListData 裡
    };
  },
  mounted() {
    this.getCartList();
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
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

    delCartItem(id) {
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getCartList();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    ...mapActions(cartStore, ["getCartList"]),
  },
};
</script>
