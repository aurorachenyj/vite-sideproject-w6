<template>
  <h3 class="text-center mt-5">文章管理</h3>

  <div class="text-end mb-4">
    <button @click="openModal(0, 'new')" class="btn btn-outline-secondary">
      新增文章
    </button>
  </div>
  <LoadingVue v-model:active="isLoading"> </LoadingVue>

  <div class="card">
    <div class="card-body p-0">
      <div class="table-responsive text-nowrap">
        <table class="table table-hover">
          <thead class="border-bottom border-3 bg-light">
            <tr class="align-middle">
              <th scope="col " class="ps-3">標題</th>
              <th scope="col" class="py-3">作者</th>
              <th scope="col">標籤</th>

              <th scope="col" class="text-end">建立時間</th>
              <th scope="col" class="text-end">是否公開</th>
              <th scope="col" class="text-end pe-3">編輯</th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="align-middle"
              v-for="article in allArticleList.articles"
              :key="article.id"
            >
              <td class="py-3 ps-3">{{ article.title }}</td>
              <td class="">{{ article.author }}</td>

              <td>
                <span
                  v-for="(oneTag, index) in article.tag"
                  :key="index + '1232'"
                  class="badge bg-success me-1"
                >
                  {{ oneTag }}
                </span>
              </td>

              <td v-if="typeof article.create_at === 'number'" class="text-end">
                {{
                  new Date(article.create_at * 1000).toISOString().split("T")[0]
                }}
              </td>

              <td v-else class="text-end">{{ article.create_at }}</td>

              <td class="text-end">
                <div
                  class="badge rounded-pill"
                  :class="[
                    { 'bg-warning': article.isPublic === true },
                    { 'bg-dark': article.isPublic === false },
                  ]"
                >
                  {{ article.isPublic ? "公開" : "未公開" }}
                </div>
              </td>

              <td class="text-end pe-3 text-danger">
                <div class="btn-group" role="group">
                  <button
                    @click="openModal(article, 'edit')"
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                  >
                    編輯
                  </button>

                  <button
                    @click="openDelModal(article.title, article.id)"
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
          v-if="allArticleList.pagination"
        >
          <li
            class="page-item"
            :class="{ disabled: !allArticleList.pagination.has_pre }"
            @click.prevent="changePage(currentPage - 1)"
          >
            <a class="page-link" href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="i in allArticleList.pagination.total_pages"
            :key="i + 'hlllq'"
            @click.prevent="changePage(i)"
            :class="{ active: i === currentPage }"
          >
            <a class="page-link" href="#">{{ i }} </a>
          </li>

          <li
            class="page-item"
            :class="{ disabled: !allArticleList.pagination.has_next }"
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
    ref="deleteModal"
    :del-article-title="delArticleTitle"
    :del-article-id="delArticleId"
    @del-item="deleteArticle"
  ></DelModal>

  <ArticleModal
    ref="articleModal"
    :item="checkedItem"
    :status="checkedStatus"
    @render-page="getAllArticleList(currentPage)"
  ></ArticleModal>
</template>

<script>
import DelModal from "@/components/admin/DelModal.vue";
import ArticleModal from "@/components/admin/ArticleModal.vue";
import Toast from "../../utils/Toast";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      allArticleList: {},
      checkedItem: {},
      checkedStatus: "",
      currentPage: 1,
      totalPage: 1,
      delArticleTitle: "",
      delArticleId: "",
    };
  },
  components: { DelModal, ArticleModal },
  mounted() {
    this.getAllArticleList();
  },

  watch: {},

  methods: {
    switchTime(timeStamp) {
      const switchTime = JSON.parse(JSON.stringify(timeStamp));
      // console.log(switchTime);
      return new Date(switchTime * 1000).toISOString().split("T")[0];
    },

    getAllArticleList(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/articles?page=${page}`)

        .then((res) => {
          this.allArticleList = res.data;
          this.totalPage = res.data.pagination.total_pages;
          if (res.data.success === true) {
            Toast.fire({
              icon: "success",
              title: "成功取得文章列表",
            });
          }

          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          alert(err.response.data.message);
        });
    },
    changePage(clickPage) {
      if (clickPage > this.totalPage || clickPage === 0) {
        return;
      }
      this.currentPage = clickPage;
      this.getAllArticleList(this.currentPage);
    },
    deleteArticle() {
      const id = this.delArticleId;

      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${id}`)

        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.getAllArticleList(this.currentPage);
        })
        .catch((err) => {
          // alert(err.response.data.message);

          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },

    openDelModal(title, id) {
      this.delArticleTitle = title;
      this.delArticleId = id;

      this.$refs.deleteModal.showModal();
    },
    openModal(item, status) {
      if (status === "new") {
        this.checkedItem = { isPublic: true };
      } else if (status === "edit") {
        this.checkedItem = item;
      }
      this.checkedStatus = status;
      this.$refs.articleModal.showModal();
    },
  },
};
</script>
