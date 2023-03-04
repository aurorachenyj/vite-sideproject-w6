<template>
  <div
    class="modal modal-xl modal-dialog-scrollable fade"
    ref="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <LoadingVue v-model:active="isLoading"> </LoadingVue>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <span v-if="checkedStatus === 'new'"> 新增 </span>
            <span v-else-if="checkedStatus === 'edit'"> 編輯 </span> 課程
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
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label"
                    >輸入圖片網址或上傳圖檔</label
                  >
                  <input
                    v-model="tempProduct.imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />

                  <input
                    type="file"
                    id="picFile"
                    style="display: none"
                    ref="fileInput"
                    @change="uploadPic('main')"
                  />

                  <button
                    @click="this.$refs.fileInput.click()"
                    class="btn btn-outline-primary mt-2 btn-sm"
                  >
                    上傳圖片
                  </button>
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <h3>多圖新增</h3>
              <div>
                <input
                  type="file"
                  style="display: none"
                  ref="imgsFileInput"
                  id="picsFile"
                  @change="uploadSubPic"
                />

                <button
                  @click="this.$refs.imgsFileInput.click()"
                  class="btn btn-outline-primary btn-sm mb-2"
                  :class="{ disabled: !this.tempProduct.imagesUrl }"
                >
                  上傳圖片
                </button>
              </div>

              <div>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template
                    v-for="(item, key) in tempProduct.imagesUrl"
                    :key="key + key"
                  >
                    <img
                      class="img-fluid"
                      :src="tempProduct.imagesUrl[key]"
                      style="margin: 0.5rem 0"
                    />
                  </template>

                  <button
                    @click="tempProduct.imagesUrl.push('')"
                    v-if="
                      !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    "
                    class="btn btn-outline-dark btn-sm d-block w-100"
                  >
                    新增圖片
                  </button>

                  <button
                    v-if="tempProduct.imagesUrl.length > 0"
                    @click="tempProduct.imagesUrl.pop()"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    style="margin: 0.5rem 0"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>

              <div v-if="tempProduct.imagesUrl === undefined">
                <button
                  class="btn btn-outline-dark btn-sm d-block w-100"
                  type="button"
                  @click="createPic"
                >
                  新增圖片 +
                </button>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  v-model="tempProduct.title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    v-model="tempProduct.category"
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">課程總時長</label>
                  <input
                    v-model="tempProduct.unit"
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入小時數"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="classSection" class="form-label">章節數 </label>
                  <input
                    v-model="tempProduct.classSectionNum"
                    id="classSection"
                    type="number"
                    class="form-control"
                    placeholder="請輸入章節數量"
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="classUnit" class="form-label">單元數</label>
                  <input
                    v-model="tempProduct.classUnitNum"
                    id="classUnit"
                    type="number"
                    class="form-control"
                    placeholder="請輸入單元數量"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    v-model.number="tempProduct.origin_price"
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    v-model.number="tempProduct.price"
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>

              <hr />
              <div class="bg-light p-3">
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-check mb-2">
                      <input
                        v-model="tempProduct.courseStatus"
                        value="classOpen"
                        class="form-check-input"
                        type="radio"
                        name="courseStatus"
                        id="classOpen"
                      />
                      <label class="form-check-label" for="classOpen">
                        已開課
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input
                        v-model="tempProduct.courseStatus"
                        value="classFunding"
                        class="form-check-input"
                        type="radio"
                        name="courseStatus"
                        id="classFunding"
                      />
                      <label class="form-check-label" for="classFunding">
                        募資中 (以下三欄位募資課程必填 )
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-3">
                    <label for="funding_price" class="form-label"
                      >募資價*</label
                    >
                    <input
                      :disabled="tempProduct.courseStatus === 'classOpen'"
                      v-model.number="tempProduct.funding_price"
                      id="funding_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入募資優惠價"
                    />
                  </div>

                  <div class="mb-3 col-md-3">
                    <label for="funding_target" class="form-label"
                      >達標金額*</label
                    >
                    <input
                      :disabled="tempProduct.courseStatus === 'classOpen'"
                      v-model.number="tempProduct.funding_target"
                      id="funding_target"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入募資達標金額"
                    />
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="fundingEndDate" class="form-label"
                      >募資結束日*</label
                    >

                    {{ switchTimeStamp(tempProduct.fundingEndDate) }}
                    <input
                      :disabled="tempProduct.courseStatus === 'classOpen'"
                      v-model="tempProduct.fundingEndDate"
                      id="fundingEndDate"
                      type="datetime-local"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">課程簡述(短)</label>
                <textarea
                  v-model="tempProduct.description"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入課程簡述"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">課程章節介紹(長)</label>

                <!-- <textarea
                  v-model="tempProduct.content"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入課程說明內容"
                >
                </textarea> -->

                <ckeditor
                  :editor="editor"
                  v-model="tempProduct.content"
                ></ckeditor>
              </div>

              <div class="mb-3">
                <label for="teacherInfo" class="form-label">講師介紹</label>

                <ckeditor
                  :editor="editor"
                  v-model="tempProduct.teacherInfo"
                ></ckeditor>
              </div>

              <div class="mb-3">
                <label for="skillTree" class="form-label">技能收穫</label>
                <ckeditor
                  :editor="editor"
                  v-model="tempProduct.skillTree"
                ></ckeditor>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    v-model="tempProduct.is_enabled"
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
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
          <button @click="postCourse" type="button" class="btn btn-danger">
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
      modal: "",
      isLoadong: false,
      tempProduct: {
        imagesUrl: [],
      },
      editor: ClassicEditor,
      // editorTeacherData: "<p>請輸入講師內容</p>",
      // editorSkillData: "<p>請輸入技能內容</p>",
      uploadPicData: {},
      uploadImgs: {},
    };
  },
  props: { checkedCourse: {}, checkedStatus: {} },
  mounted() {
    this.modal = new Modal(this.$refs.modal);

    this.uploadPicData = document.querySelector("#picFile");
    this.uploadImgs = document.querySelector("#picsFile");
  },
  watch: {
    checkedCourse() {
      this.tempProduct = this.checkedCourse;
    },
  },
  methods: {
    switchTimeStamp(timeStamp) {
      // console.log(typeof timeStamp);

      if (typeof timeStamp !== "number") {
        return;
      }

      console.log(timeStamp);

      const date = new Date(timeStamp);

      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hour = ("0" + date.getHours()).slice(-2);
      const minute = ("0" + date.getMinutes()).slice(-2);

      const formattedDate = `${year}-${month}-${day}T${hour}:${minute}`;

      return (this.tempProduct.fundingEndDate = formattedDate);
    },

    createPic() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push("");
    },
    uploadPic() {
      this.isLoadong = true;

      const file = this.uploadPicData.files[0];

      const formData = new FormData();
      formData.append("file-to-upload", file);

      this.$http
        .post(` ${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          this.tempProduct.imageUrl = res.data.imageUrl;
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

    uploadSubPic() {
      this.isLoadong = true;

      const file = this.uploadImgs.files[0];

      const formData = new FormData();
      formData.append("file-to-upload", file);

      this.$http
        .post(` ${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          this.tempProduct.imagesUrl.push(res.data.imageUrl);
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

    postCourse() {
      this.tempProduct.fundingEndDate = Date.parse(
        this.tempProduct.fundingEndDate
      );

      if (!this.tempProduct.courseStatus) {
        Toast.fire({
          icon: "error",
          title: "課程狀態必填",
        });

        return;
      }

      if (this.tempProduct.courseStatus === "classFunding") {
        if (
          !this.tempProduct.fundingEndDate ||
          !this.tempProduct.funding_price ||
          !this.tempProduct.funding_target
        ) {
          Toast.fire({
            icon: "error",
            title: "募資到期日、達標目標和募資價格必填",
          });

          return;
        }
      }

      let url = "";
      let method = "";

      if (this.checkedStatus === "new") {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
        method = "post";
      } else if (this.checkedStatus === "edit") {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        method = "put";
      }

      const data = this.tempProduct;

      this.$http[method](url, { data })
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          this.$emit("randerCourseList");
          this.modal.hide();
          this.tempProduct = {};
        })

        .catch((err) => {
          Toast.fire({
            icon: "error",
            title: err.response.data.message,
          });
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
