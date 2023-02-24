<template>
  <h3 class="text-center mt-5">訂單管理</h3>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>
  <div class="card mt-4">
    <!-- <div class="card-header bg-transparent">
      <div class="input-group">
        <span class="input-group-text bg-transparent border-0 pe-0">
          <i class="bi bi-search"></i>
        </span>
        <input
          class="form-control border-0 shadow-none"
          type="search"
          placeholder="搜尋"
        />
      </div>
    </div> -->

    <div class="card-body p-0">
      <div class="table-responsive text-nowrap">
        <table class="table table-hover">
          <thead class="border-bottom border-3 bg-light">
            <tr class="align-middle">
              <th scope="col " class="ps-3"></th>
              <th scope="col" class="py-3">訂單編號</th>
              <th scope="col">Email</th>
              <th scope="col">用戶名</th>
              <th scope="col">購買品項</th>
              <th scope="col" class="text-end">付款方式</th>
              <th scope="col" class="text-end">金額</th>
              <th scope="col" class="text-end pe-3">訂單編輯</th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="align-middle"
              v-for="order in allOrderList.orders"
              :key="order.id"
            >
              <td class="py-3 ps-3">
                <input class="form-check-input" type="checkbox" name="" id="" />
              </td>
              <td class="">{{ order.id }}</td>
              <td>{{ order.user.email }}</td>
              <td>{{ order.user.name }}</td>
              <td>
                <ol class="ps-2 px-0 mb-0">
                  <li v-for="item in order.products" :key="item.id">
                    {{ item.product.title }}
                  </li>
                </ol>
              </td>
              <td class="text-end">{{ order.user.payment }}</td>
              <td class="text-end">{{ order.total }}</td>
              <td class="text-end pe-3 text-danger">
                <div class="btn-group" role="group">
                  <button
                    @click="openOrderModal(order.id)"
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                  >
                    檢視
                  </button>

                  <button
                    @click="openDelModal(order.id)"
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="card-footer bg-transparent border-0 pb-0"
      v-if="allOrderList.pagination"
    >
      <nav aria-label="Page navigation mb-0 ">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            :class="{ disabled: !allOrderList.pagination.has_pre }"
            @click.prevent="changePage(currentPage - 1)"
          >
            <a class="page-link" href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="i in allOrderList.pagination.total_pages"
            :key="i + 'hlllq'"
            @click.prevent="changePage(i)"
            :class="{ active: i === currentPage }"
          >
            <a class="page-link" href="#">{{ i }} </a>
          </li>

          <li
            class="page-item"
            :class="{ disabled: !allOrderList.pagination.has_next }"
            @click.prevent="changePage(currentPage + 1)"
          >
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <DelModal @delItem="delOrder" :del-id="delId" ref="deleteModal"></DelModal>
  <OrderDetailModal
    :check-order-data="checkOrderData"
    ref="orderDetailModal"
  ></OrderDetailModal>
</template>

<script>
import Toast from "../../utils/Toast";
import DelModal from "@/components/admin/DelModal.vue";
import OrderDetailModal from "@/components/admin/OrderDetailModal.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      delId: "",
      checkOrderData: {},
      allOrderList: [],
      isLoading: false,
      currentPage: 1,
    };
  },
  components: { DelModal, OrderDetailModal },
  mounted() {
    this.isLoading = true;
    this.getOrderList();
  },
  methods: {
    getOrderList(page = 1) {
      this.isLoading = true;

      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          console.log(res.data);

          this.isLoading = false;

          // Toast.fire({
          //   icon: "success",
          //   title: "成功取得資料",
          // });

          this.allOrderList = res.data;
        })
        .catch((err) => {
          console.log(err);
          // alert(err.response.data.message);
          this.isLoading = false;
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },

    changePage(clickPage) {
      console.log(clickPage);
      this.currentPage = clickPage;
      this.getOrderList(this.currentPage);
    },

    openDelModal(delOrderId) {
      console.log("open");
      console.log(delOrderId);
      this.delId = delOrderId;
      const delComponent = this.$refs.deleteModal;
      console.log(delComponent);
      delComponent.showModal();
    },
    openOrderModal(orderId) {
      this.isLoading = true;
      console.log(orderId);

      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${orderId}`)
        .then((res) => {
          console.log(res.data);
          this.checkOrderData = res.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });

      this.$refs.orderDetailModal.showModal();
    },

    delOrder() {
      console.log(this.delId);

      const id = this.delId;
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${id}`)
        .then((res) => {
          console.log(res.data);
          this.getOrderList(this.currentPage);
          this.$refs.deleteModal.hideModal();
        })
        .catch((err) => {
          // alert(err.response.data.message);

          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
};
</script>
