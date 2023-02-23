<template>
  <div
    class="modal modal-xl fade"
    id="exampleModal"
    tabindex="-1"
    ref="modal"
    aria-hidden="true"
  >
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <span v-if="status === 'new'"> 新增 </span>
            <span v-else-if="status === 'edit'"> 編輯 </span>

            文章
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        {{ tempArticle }} ||| {{ status }} ||| {{ item }}

        <div class="modal-body">
          <div class="row">
            <div class="col-md-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  v-model="tempArticle.title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  v-model="tempArticle.author"
                  id="author"
                  type="text"
                  class="form-control"
                  placeholder="請輸入作者名稱"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="mainPic" class="form-label">主圖連結</label>
                <input
                  v-model="tempArticle.image"
                  id="mainPic"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片網址"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="tag" class="form-label">標籤(請用,間隔)</label>
                <input
                  v-model="tempArticle.tag"
                  id="tag"
                  type="text"
                  class="form-control"
                  placeholder="範例: 關鍵字1,關鍵字2"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="createdTime" class="form-label">建立時間</label>
                {{ switchTimeStamp(tempArticle.create_at) }}
                <input
                  v-model="tempArticle.create_at"
                  id="createdTime"
                  type="date"
                  class="form-control"
                />
              </div>
            </div>

            <div class="col-md-12">
              <div class="mb-3">
                <div class="form-check">
                  <input
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label" for="isPublic"
                    >是否公開</label
                  >
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <div class="mb-3">
                <label for="description" class="form-label"> 文章引言</label>
                <textarea
                  v-model="tempArticle.description"
                  id="description"
                  class="form-control"
                >
                </textarea>
              </div>
            </div>

            <div class="col-md-12">
              <ckeditor :editor="editor" v-model="editorData"></ckeditor>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            @click="postArticle"
            type="button"
            class="btn btn-outline-danger"
          >
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import Toast from "../../utils/Toast";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      modal: "",
      tempArticle: {},
      editor: ClassicEditor,
      editorData: "<p>請輸入文章內容</p>",
      // editorConfig: {
      //   toolbar: ["heading", "|", "bold", "italic", "link"],
      // },
    };
  },
  props: { item: {}, status: {} },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  watch: {
    item() {
      this.tempArticle = this.item;
      console.log(this.tempArticle);
      console.log(this.tempArticle.id);
      if (this.tempArticle.id) {
        this.isLoading = true;
        const id = this.tempArticle.id;
        this.$http
          .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${id}`)
          .then((res) => {
            console.log(res.data);
            console.log(res.data.article.content);
            this.editorData = res.data.article.content;
            this.isLoading = false;
          })
          .catch((err) => {
            console.log(err);
            this.isLoading = false;
          });
      }
    },
  },

  methods: {
    switchTimeStamp(timeStamp) {
      console.log(typeof timeStamp);

      if (typeof timeStamp !== "number") {
        return;
      }

      console.log(timeStamp);

      this.tempArticle.create_at = new Date(timeStamp * 1000)
        .toISOString()
        .split("T")[0];

      return this.tempArticle.create_at;
    },

    postArticle() {
      if (!this.tempArticle.tag) {
        Toast.fire({
          icon: "error",
          title: "標籤不可為空",
        });

        return;
      }

      let url = "";
      let method = "";

      console.log(this.tempArticle);
      this.tempArticle.content = this.editorData;
      if (!Array.isArray(this.tempArticle.tag)) {
        this.tempArticle.tag = this.tempArticle.tag.split(",");
      }

      if (this.status === "new") {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`;
        method = "post";
      } else if (this.status === "edit") {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        method = "put";
      }

      this.tempArticle.create_at =
        Date.parse(this.tempArticle.create_at) / 1000;
      const data = this.tempArticle;
      console.log(data);

      this.$http[method](url, { data })

        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          this.modal.hide();
          this.$emit("renderPage");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    hideModal() {
      console.log("hideModal");
      this.modal.hide();
    },
    showModal() {
      console.log("showModal");
      this.modal.show();
    },
  },
};
</script>
