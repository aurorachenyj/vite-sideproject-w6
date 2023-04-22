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
                <!-- <input class="form-check-input" type="checkbox" name="" id="" /> -->
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
            <a class="page-link" aria-label="Next">
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
// import { toRaw } from "vue";
// import orderStore from "../../stores/orderStore.js";

// import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      delId: "",
      checkOrderData: {},
      allOrderList: [],
      isLoading: false,
      currentPage: 1,
      totalOrderList: [],
      totalPage: 1,
      courseStudentNumData: {},
    };
  },
  components: { DelModal, OrderDetailModal },
  mounted() {
    // this.isLoading = true;
    this.getOrderList();
  },

  // watch: {
  //   totalPage() {
  //     this.getTotalOrderList();
  //   },
  // },

  methods: {
    // ...mapActions(orderStore, ["saveStudentNumData"]),
    // calcClassmate() {
    //   const arr = toRaw(this.totalOrderList);
    //   const OrderArr = [...arr];

    //   const OrderListArr = [];

    //   OrderArr.forEach((item) => {
    //     const temp = Object.values(item.products);
    //     OrderListArr.push(...temp);
    //   });

    //   const isArr = OrderListArr.map((i) => {
    //     return i.product_id;
    //   });

    //   const totalClassmate = isArr.reduce((obj, id) => {
    //     if (obj[id]) {
    //       obj[id]++;
    //     } else {
    //       obj[id] = 1;
    //     }
    //     return obj;
    //   }, {});

    //   //console.log(totalClassmate);

    //   // 想利用從orderStore.js 傳進來的 saveStudentNumData 函式 把totalClassmate的資料傳進去↓↓
    //   // this.saveStudentNumData(totalClassmate);

    //   this.courseStudentNumData = totalClassmate;
    // },

    // getTotalOrderList() {
    //   const pageArr = [];
    //   for (let i = 1; i <= this.totalPage; i++) {
    //     pageArr.push(i);
    //   }

    //   const apiArr = pageArr.map((item) => {
    //     return this.$http.get(
    //       `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${item}`
    //     );
    //   });

    //   Promise.all(apiArr)
    //     .then((res) => {
    //       console.log(res);
    //       res.forEach((item) => {
    //         this.totalOrderList.push(...item.data.orders);
    //       });

    //       console.log(this.totalOrderList);
    //       this.calcClassmate();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    //   console.log(this.totalOrderList); // 取得不分頁的全部訂單資料
    // },

    getOrderList(page = 1) {
      this.isLoading = true;

      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.isLoading = false;

          Toast.fire({
            icon: "success",
            title: "成功取得資料",
          });

          this.allOrderList = res.data;
          this.totalPage = res.data.pagination.total_pages;

          // console.log(this.totalPage);

          // console.log(this.allOrderList);
        })
        .catch((err) => {
          this.isLoading = false;
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },

    changePage(clickPage) {
      if (clickPage > this.totalPage || clickPage === 0) {
        return;
      }

      this.currentPage = clickPage;
      this.getOrderList(this.currentPage);
    },

    openDelModal(delOrderId) {
      this.delId = delOrderId;
      const delComponent = this.$refs.deleteModal;

      delComponent.showModal();
    },
    openOrderModal(orderId) {
      this.isLoading = true;

      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${orderId}`)
        .then((res) => {
          this.checkOrderData = res.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });

      this.$refs.orderDetailModal.showModal();
    },

    delOrder() {
      const id = this.delId;
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${id}`)
        .then(() => {
          this.getOrderList(this.currentPage);
          this.$refs.deleteModal.hideModal();
        })
        .catch((err) => {
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
};
</script>
