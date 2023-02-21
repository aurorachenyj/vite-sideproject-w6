<template>
  <h3 class="text-center mt-5">課程管理</h3>
  <div class="text-end">
    <button @click="openModal(0, 'new')" class="btn btn-outline-secondary">
      新增課程
    </button>
  </div>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>
  <div class="card mt-4">
    <div class="card-header bg-transparent">
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
    </div>

    <div class="card-body p-0">
      <div class="table-responsive text-nowrap">
        <table class="table table-hover">
          <thead class="border-bottom border-3 bg-light">
            <tr class="align-middle">
              <th scope="col " class="ps-3">分類</th>
              <th scope="col" class="py-3">課程名稱</th>
              <th scope="col">課程狀態 ( 若募資:剩XX天 )</th>

              <th scope="col" class="text-end">原價</th>
              <th scope="col" class="text-end">售價</th>
              <th scope="col" class="text-end">是否上線</th>
              <th scope="col" class="text-end pe-3">編輯</th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="align-middle"
              v-for="course in allCourseList.products"
              :key="course.id"
            >
              <td class="py-3 ps-3">{{ course.category }}</td>
              <td class="">{{ course.title }} 2</td>
              <td>{{}}3 course. 待補</td>
              <td class="text-end">{{ course.origin_price }}4</td>
              <td class="text-end">{{ course.price }}5</td>
              <td class="text-end">
                <div
                  class="badge rounded-pill"
                  :class="[
                    { 'bg-warning': course.is_enabled === 1 },
                    {
                      'bg-dark': course.is_enabled === 0 || !course.is_enabled,
                    },
                  ]"
                >
                  {{ course.is_enabled ? "上線中" : "未上" }}
                </div>
              </td>

              <td class="text-end pe-3 text-danger">
                <div class="btn-group" role="group">
                  <button
                    @click="openModal(course, 'edit')"
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                  >
                    編輯
                  </button>

                  <button
                    @click="openDelModal(course.title, course.id)"
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

    <div class="card-footer bg-transparent border-0 pb-0">
      <nav aria-label="Page navigation mb-0 ">
        <ul
          class="pagination justify-content-center"
          v-if="allCourseList.pagination"
        >
          <li
            class="page-item"
            :class="{ disabled: !allCourseList.pagination.has_pre }"
            @click.prevent="changePage(currentPage - 1)"
          >
            <a class="page-link" href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="i in allCourseList.pagination.total_pages"
            :key="i + 'hlllq'"
            @click.prevent="changePage(i)"
            :class="{ active: i === currentPage }"
          >
            <a class="page-link" href="#">{{ i }} </a>
          </li>

          <li
            class="page-item"
            :class="{ disabled: !allCourseList.pagination.has_next }"
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

  <CourseModal ref="courseModal"></CourseModal>
  <DelModal
    ref="deleteModal"
    :del-class-title="delClassTitle"
    :del-class-id="delClassId"
    @del-item="delCourse"
  ></DelModal>
</template>

<script>
import CourseModal from "@/components/admin/CourseModal.vue";
import DelModal from "@/components/admin/DelModal.vue";

import Toast from "../../utils/Toast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      allCourseList: {},
      currentPage: 1,
      delClassTitle: "",
      delClassId: "",
    };
  },
  components: { CourseModal, DelModal },
  mounted() {
    this.getCoursesList();
  },

  methods: {
    getCoursesList(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          console.log(res.data);
          this.isLoading = false;
          this.allCourseList = res.data;
          if (res.data.success === true) {
            Toast.fire({
              icon: "success",
              title: "成功取得產品資訊",
            });
          }
        })

        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    changePage(page) {
      this.currentPage = page;
      this.getCoursesList(this.currentPage);
    },

    openModal(item, status) {
      console.log(item, status);
      this.$refs.courseModal.showModal();
    },
    openDelModal(classTitle, classId) {
      console.log(classTitle, classId);

      this.delClassTitle = classTitle;
      this.delClassId = classId;

      this.$refs.deleteModal.showModal();
    },
    delCourse() {
      const id = this.delClassId;

      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${id}`)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          this.getCoursesList(this.currentPage);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
