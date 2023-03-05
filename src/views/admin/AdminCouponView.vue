<template>
  <h3 class="text-center mt-5">優惠券管理</h3>
  <div class="text-end">
    <button @click="openModal(0, 'new')" class="btn btn-outline-secondary">
      新增優惠券
    </button>
  </div>
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
              <th scope="col " class="ps-3 py-3 text-center">
                <button
                  @click="delMoreItem"
                  class="btn btn-outline-danger btn-sm"
                  :class="{ disabled: mulitDelCoupon.length === 0 }"
                >
                  刪除多個
                </button>
              </th>
              <th scope="col" class="">優惠券名稱</th>
              <th scope="col">折扣 % 數</th>
              <th scope="col" class="text-end">到期日</th>
              <th scope="col" class="text-end">是否啟用</th>

              <th scope="col" class="text-end pe-3">編輯</th>
            </tr>
          </thead>
          <tbody v-if="allCouponList.coupons">
            <tr
              class="align-middle"
              v-for="coupon in allCouponList.coupons"
              :key="coupon.id"
            >
              <td class="text-center">
                <input
                  v-model="mulitDelCoupon"
                  :value="coupon.id"
                  class="form-check-input"
                  type="checkbox"
                  name=""
                  id=""
                />
              </td>
              <td class="">{{ coupon.title }}</td>
              <td>{{ coupon.percent }}</td>

              <td class="text-end" v-if="typeof coupon.due_date === 'number'">
                {{
                  new Date(coupon.due_date * 1000).toISOString().split("T")[0]
                }}
              </td>
              <td v-else class="text-end">
                {{ coupon.due_date }}
              </td>
              <td class="text-end">
                <div
                  class="badge rounded-pill"
                  :class="[
                    { 'bg-warning': coupon.is_enabled === 1 },
                    {
                      'bg-dark': coupon.is_enabled === 0 || !coupon.is_enabled,
                    },
                  ]"
                >
                  {{ coupon.is_enabled ? "啟用" : "未啟用" }}
                </div>
              </td>

              <td class="text-end pe-3 text-danger">
                <div class="btn-group" role="group">
                  <button
                    @click="openModal(coupon, 'edit')"
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                  >
                    編輯
                  </button>

                  <button
                    @click="openDelModal(coupon.id, coupon.title)"
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
      v-if="allCouponList.pagination"
    >
      <nav aria-label="Page navigation mb-0 ">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            :class="{ disabled: !allCouponList.pagination.has_pre }"
            @click.prevent="changePage(currentPage - 1)"
          >
            <a class="page-link" href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="i in allCouponList.pagination.total_pages"
            :key="i + 'hlllq'"
            @click.prevent="changePage(i)"
            :class="{ active: i === currentPage }"
          >
            <a class="page-link" href="#">{{ i }} </a>
          </li>

          <li
            class="page-item"
            :class="{ disabled: !allCouponList.pagination.has_next }"
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

  <DelModal
    @del-item="postDelCoupon"
    :del="delCouponTitle"
    ref="deleteModal"
  ></DelModal>

  <CouponModal
    @rander-page="getCouponList(currentPage)"
    :status="status"
    :edit-item="editItem"
    ref="CouponModal"
  ></CouponModal>
</template>

<script>
import DelModal from "@/components/admin/delModal.vue";
import CouponModal from "../../components/admin/CouponModal.vue";
import Toast from "../../utils/Toast";
import Swal from "sweetalert2/dist/sweetalert2.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      mulitDelCoupon: [],
      isLoading: false,
      currentPage: 1,
      delCoupon: "",
      delCouponTitle: "",
      allCouponList: {},
      editId: "",
      editItem: {},
      status: "",
    };
  },
  components: { DelModal, CouponModal },
  mounted() {
    this.getCouponList();
  },
  methods: {
    // 刪除多個優惠券
    delMoreItem() {
      console.log(this.mulitDelCoupon);

      Swal.fire({
        title: "確定要刪除這些優惠券?",
        text: ` ID: ${this.mulitDelCoupon} `,

        showCancelButton: true,
        cancelButtonColor: "gray",
        confirmButtonColor: "#ff6666",

        confirmButtonText: "確認刪除",
      }).then((result) => {
        if (result.isConfirmed) {
          const multiDelApi = this.mulitDelCoupon.map((item) => {
            return this.$http
              .delete(
                `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${item}`
              )
              .then((res) => {
                console.log(res.data);
                this.getCouponList(this.currentPage);
                this.mulitDelCoupon = [];
              })
              .catch((err) => {
                console.log(err);
              });
          });

          console.log(multiDelApi.data);

          Toast.fire({
            icon: "success",
            title: "刪除成功",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.mulitDelCoupon = [];
        }
      });
    },

    changePage(clickPage) {
      // console.log(clickPage);
      this.currentPage = clickPage;
      this.getCouponList(this.currentPage);
    },

    getCouponList(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          this.allCouponList = res.data;
        })

        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },

    openDelModal(delId, title) {
      console.log(delId);

      this.delCoupon = delId;
      this.delCouponTitle = title;
      console.log(this.delCoupon);
      const delComponent = this.$refs.deleteModal;
      delComponent.showModal();
    },

    openModal(editItem, status) {
      if (status === "new") {
        this.editItem = { is_enabled: 1 };
      }

      if (editItem !== 0) {
        this.editItem = editItem;
      }

      this.status = status;
      this.$refs.CouponModal.showModal();
    },

    postDelCoupon() {
      const id = this.delCoupon;

      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          this.getCouponList();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
