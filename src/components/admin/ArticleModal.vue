<template>
  <div
    class="modal modal-xl fade"
    id="exampleModal"
    tabindex="-1"
    ref="modal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">新增文章</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        {{ tempArticle }} {{ status }} {{ item }}

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

            <div class="col-md-12">文章套件(待研究)</div>

            <hr />
            <div class="col-md-12">
              <div class="mb-3">
                <label for="content" class="form-label">
                  文章內容簡易版(先擋一下)</label
                >
                <textarea
                  v-model="tempArticle.content"
                  id="content"
                  class="form-control"
                  style="height: 100px"
                >
                </textarea>
              </div>
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      modal: "",
      tempArticle: {},
    };
  },
  props: { item: {}, status: {} },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  watch: {
    item() {
      this.tempArticle = this.item;
    },
  },

  methods: {
    postArticle() {
      console.log(this.tempArticle);

      //   console.log();

      this.tempArticle.tag = this.tempArticle.tag.split(",");

      this.tempArticle.create_at =
        Date.parse(this.tempArticle.create_at) / 1000;
      console.log(Date.parse(this.tempArticle.create_at) / 1000);

      const data = this.tempArticle;
      console.log(data);

      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`, { data })

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
