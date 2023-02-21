<template>
  <div
    class="modal modal-xl modal-dialog-scrollable fade"
    ref="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">新增課程</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          {{ tempProduct }}

          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    v-model="tempProduct.imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />

                  <input type="file" id="picFile" @change="uploadPic('main')" />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <h3>多圖新增</h3>
              <!-- <div>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template
                    v-for="(item, key) in tempProduct.imagesUrl"
                    :key="key + key"
                  >
                    <input
                      v-model="tempProduct.imagesUrl[key]"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    />

                    <img
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
                    class="btn btn-outline-primary btn-sm d-block w-100"
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
              </div> -->

              <div v-if="tempProduct.imagesUrl === undefined">
                <button
                  class="btn btn-warning btn-sm d-block w-100"
                  type="button"
                  @click="createPic"
                >
                  新增圖片
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
                  <label for="price" class="form-label">單位</label>
                  <input
                    v-model="tempProduct.unit"
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
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
                  <div class="col-md-6">
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
                        募資中
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="funding_price" class="form-label"
                      >募資價(募資課程必填)</label
                    >
                    <input
                      v-model.number="tempProduct.funding_price"
                      id="funding_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入募資優惠價"
                    />
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="fundingEndDate" class="form-label"
                      >募資結束日(募資課程必填)</label
                    >
                    <input
                      v-model="tempProduct.fundingEndDate"
                      id="fundingEndDate"
                      type="date"
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
                <label for="content" class="form-label">課程說明(長)</label>
                <textarea
                  v-model="tempProduct.content"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入課程說明內容"
                >
                </textarea>
              </div>

              <div class="mb-3">
                <label for="teacherInfo" class="form-label">講師介紹</label>
                <textarea
                  v-model="tempProduct.teacherInfo"
                  id="teacherInfo"
                  type="text"
                  class="form-control"
                  placeholder="請輸入講師介紹"
                >
                </textarea>
              </div>

              <div class="mb-3">
                <label for="skillTree" class="form-label">技能收穫</label>
                <textarea
                  v-model="tempProduct.skillTree"
                  id="teacherInfo"
                  type="text"
                  class="form-control"
                  placeholder="請輸入會獲得的技能"
                >
                </textarea>
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
          <button type="button" class="btn btn-danger">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      modal: "",
      tempProduct: {},
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
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
