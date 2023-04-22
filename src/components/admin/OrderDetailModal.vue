<template>
  <div
    class="modal fade"
    ref="orderModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">訂單詳情</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="checkOrderData.order">
          <div class="row">
            <div class="col">
              <div class="ms-3">
                <h4>用戶資料</h4>

                <table class="table">
                  <div class="tbody">
                    <tr>
                      <th scope="row">姓名</th>
                      <td>{{ checkOrderData.order.user.name }}</td>
                    </tr>
                    <tr>
                      <th scope="row">電話</th>
                      <td>{{ checkOrderData.order.user.tel }}</td>
                    </tr>

                    <tr>
                      <th scope="row">email</th>
                      <td>
                        {{ checkOrderData.order.user.email }}
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">付款方式</th>
                      <td>
                        {{ checkOrderData.order.user.payment }}
                      </td>
                    </tr>
                  </div>
                </table>
              </div>
            </div>
            <div class="col">
              <h4>訂單資料</h4>

              <table class="table">
                <div class="tbody">
                  <tr>
                    <th scope="row">訂單編號</th>
                    <td>{{ checkOrderData.order.id }}</td>
                  </tr>
                  <tr>
                    <th scope="row">下單時間</th>
                    <td>
                      {{
                        new Date(
                          checkOrderData.order.create_at * 1000
                        ).toLocaleDateString()
                      }}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">總金額</th>
                    <td>{{ Math.round(checkOrderData.order.total) }}</td>
                  </tr>

                  <tr>
                    <th scope="row">訂購品項</th>
                    <td>
                      <p
                        v-for="item in checkOrderData.order.products"
                        :key="item.id"
                        class="mb-0"
                      >
                        {{ item.product.title }}
                      </p>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary text-white"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      modal: "",
    };
  },
  props: ["checkOrderData"],
  mounted() {
    this.modal = new Modal(this.$refs.orderModal);
  },
  watch: {},
  methods: {
    hideModal() {
      this.modal.hide();
    },
    showModal() {
      this.modal.show();
    },
  },
};
</script>
