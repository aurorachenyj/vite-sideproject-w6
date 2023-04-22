<template>
  <h3 class="text-center mt-5">課程管理</h3>

  <div class="text-end">
    <button @click="openModal(0, 'new')" class="btn btn-outline-secondary">
      新增課程
    </button>
  </div>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>
  <div class="card mt-4">
    <div class="card-body p-0">
      <div class="table-responsive text-nowrap">
        <table class="table table-hover">
          <thead class="border-bottom border-3 bg-light">
            <tr class="align-middle">
              <th scope="col " class="ps-3">分類</th>
              <th scope="col" class="py-3">課程名稱</th>
              <th scope="col">課程狀態</th>

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
              <td class="">{{ course.title }}</td>

              <td v-if="course.courseStatus === 'classFunding'">
                募資中
                <!-- {{ course.fundingEndDate }} -->
                <span class="text-success">
                  <p
                    class="mb-0"
                    v-if="typeof course.fundingEndDate !== 'number'"
                  >
                    結束日 {{ course.fundingEndDate }}
                  </p>
                  <br />

                  <p
                    class="mb-0"
                    v-if="typeof course.fundingEndDate === 'number'"
                  >
                    {{ countLeftDay(course.fundingEndDate) }}
                  </p>
                </span>
              </td>

              <td v-else-if="course.courseStatus === 'classOpen'">已開課</td>

              <td class="text-end">{{ course.origin_price }}</td>
              <td class="text-end">{{ course.price }}</td>
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

  <CourseModal
    ref="courseModal"
    :checked-course="checkedCourse"
    :checked-status="checkedStatus"
    @rander-course-list="getCoursesList(currentPage)"
  ></CourseModal>
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
import moment from "moment";
import "moment/dist/locale/zh-tw";
import Toast from "../../utils/Toast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      allCourseList: {},
      currentPage: 1,
      totalPage: 1,
      delClassTitle: "",
      delClassId: "",
      checkedCourse: {},
      checkedStatus: "",

      // todayDateStr: "", // 現在時間的時間戳
      // leftDay: "", // 剩餘天數
    };
  },
  components: { CourseModal, DelModal },
  mounted() {
    this.getCoursesList();

    // moment.locale("zh-tw");
    // setInterval(() => {
    //   this.todayDateStr = Date.parse(new Date());
    // }, 60000);
  },

  created() {
    moment.locale("zh-tw");

    // this.startTimer();
  },
  beforeUnmount() {
    // clearInterval(this.timer);
  },

  methods: {
    countLeftDay(endTimeStr) {
      const todayDateStr = Date.parse(new Date());

      if (todayDateStr > endTimeStr) {
        return "已結束募資";
      }

      // 換回時間格式
      endTimeStr = new Date(endTimeStr).toISOString();

      return moment(endTimeStr).fromNow();
    },

    // startTimer() {
    //   this.countDay();
    //   ``;
    //   this.timer = setInterval(this.countDay, 60000);
    // },

    // countDay(endTimeStr) {
    //   console.log(endTimeStr);
    //   this.todayDateStr = Date.parse(new Date());

    //   const distance = endTimeStr - this.todayDateStr;

    //   if (distance < 0) {
    //     clearInterval(this.timer);
    //     this.leftDay = "已結束";
    //   } else {
    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor(
    //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //     );
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     this.leftDay = `剩餘天數：${days}天${hours}小時${minutes}分鐘`;
    //   }
    // },

    getCoursesList(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          this.allCourseList = res.data;

          this.totalPage = res.data.pagination.total_pages;

          if (res.data.success === true) {
            Toast.fire({
              icon: "success",
              title: "成功取得產品資訊",
            });
          }
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
      this.getCoursesList(this.currentPage);
    },

    openModal(item, status) {
      if (status === "edit") {
        this.checkedCourse = item;
      } else if (status === "new") {
        this.checkedCourse = {};
      }
      this.checkedStatus = status;

      this.$refs.courseModal.showModal();
    },
    openDelModal(classTitle, classId) {
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
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
};
</script>
