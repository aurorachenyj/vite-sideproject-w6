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

        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <input
                  style="display: none"
                  type="file"
                  ref="articlePic"
                  id="articlePicFile"
                  @change="uploadArticlePic"
                />

                <button
                  @click="this.$refs.articlePic.click()"
                  class="btn btn-primary text-white"
                  type="button"
                >
                  上傳主圖
                </button>
              </div>
            </div>

            <div class="col-md-8">
              <div class="mb-3">
                <img class="img-fluid" :src="tempArticle.image" alt="" />
              </div>
            </div>
            <hr />
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

            <div class="col-md-6">
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
            <div class="col-md-6">
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
      articlePicData: {},
      tempArticle: {},
      editor: ClassicEditor,
      editorData: "<p>請輸入文章內容</p>",
    };
  },
  props: { item: {}, status: {} },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.articlePicData = this.$refs.articlePic;
  },
  watch: {
    item() {
      this.tempArticle = this.item;

      if (this.tempArticle.id) {
        this.isLoading = true;
        const id = this.tempArticle.id;
        this.$http
          .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${id}`)
          .then((res) => {
            this.editorData = res.data.article.content;
            this.isLoading = false;
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    },
  },

  methods: {
    uploadArticlePic() {
      const file = this.articlePicData.files[0];

      const formData = new FormData();
      formData.append("file-to-upload", file);

      this.$http
        .post(` ${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          //console.log(res.data.imageUrl);

          this.tempArticle.image = res.data.imageUrl;
          this.isLoadong = false;

          if (res.data.success === true) {
            Toast.fire({
              icon: "success",
              title: "成功上傳圖片",
            });
          }
        })
        .catch((err) => {
          this.isLoadong = false;
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },

    switchTimeStamp(timeStamp) {
      // console.log(typeof timeStamp);

      if (typeof timeStamp !== "number") {
        return;
      }

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
      this.modal.hide();
    },
    showModal() {
      this.modal.show();
    },
  },
};
</script>
