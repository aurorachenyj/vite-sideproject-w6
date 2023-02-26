<template>
  <!-- min-vh-100 -->
  <header class="position-relative mb-5" style="min-height: 60vh">
    <div
      class="bg-dark position-absolute bg-cover bg-attachment-fixed"
      style="
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-image: url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80);
      "
    ></div>

    <div class="position-absolute top-30 start-10">
      <p class="h2 text-primary fw-bold">學習無限可能 遇見更好的自己</p>

      <div class="input-group">
        <div class="dropdown">
          <button
            class="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            探索
          </button>
          <ul
            class="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li><a class="dropdown-item active" href="#">語言</a></li>
            <li><a class="dropdown-item" href="#">藝術</a></li>
            <li><a class="dropdown-item" href="#">商業</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">投資理財</a></li>
          </ul>
        </div>

        <input
          type="search"
          id="form1"
          class="form-control"
          placeholder="想學什麼呢？"
        />

        <button type="button" class="btn btn-primary">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-2 mb-5">
      <div class="col">
        <div class="d-flex align-items-center justify-content-center">
          <div class="img-cover me-2">
            <img src="../../../public/img/neural.png" alt="" />
          </div>

          <div>
            <h4>豐富多元</h4>
            <p>
              精彩豐富的內容 <br />
              各類課程等你選
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="d-flex align-items-center justify-content-center">
          <div class="img-cover me-2">
            <img src="../../../public/img/tier.png" alt="" />
          </div>

          <div>
            <h4>共同成長</h4>
            <p>
              和來自各地的學員 <br />
              一同學習與成長
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex align-items-center justify-content-center">
          <div class="img-cover me-2">
            <img src="../../../public/img/invest.png" alt="" />
          </div>

          <div>
            <h4>彈性學習</h4>
            <p>
              依照自己的步調 <br />
              輕鬆學習無負擔
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-light mb-5">
    <div class="container py-4">
      <div class="d-flex mb-3">
        <h3>熱門募資課程</h3>
        <a href="" class="fs-5 ms-auto link-primary text-decoration-none">
          看更多 <i class="bi bi-heart-arrow"></i>
        </a>
      </div>

      <div class="row">
        <div
          class="col position-relative"
          @mouseenter="setHover('0', true)"
          @mouseleave="setHover('0', false)"
        >
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5>課程名稱 課程名稱課程名稱</h5>
              <p>募資價 <span class="text-primary fw-bold"> NT$ 3880 </span></p>
              <div class="progress" style="height: 20px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                >
                  達標率 75%
                </div>
              </div>

              <div class="d-flex justify-content-between mt-2">
                <p class="text-muted mb-0">同學 15 人</p>

                <p class="text-muted mb-0">剩餘 6 天</p>
              </div>
            </div>
          </div>
          <!-- 隱藏的區塊 -->
          <div
            class="card text-white"
            v-if="isHover"
            style="
              position: absolute;
              top: 10px;
              right: -100px;
              width: 100%;
              background-color: rgba(48, 45, 42, 0.8);
              z-index: 100;
            "
          >
            <div class="card-body">
              <h4>課程描述</h4>
              <p>
                原本隱藏的內容原本隱藏的，內容原本隱藏的內容原本
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
                原本隱藏的內容原本隱藏的，內容原本隱藏的內容原本
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
              </p>

              <div class="d-flex flex-column">
                <button class="btn btn-primary btn-sm mb-3">加入購物車</button>

                <button class="btn btn-outline-primary btn-sm">收藏</button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col position-relative"
          @mouseenter="setHover('1', true)"
          @mouseleave="setHover('1', false)"
        >
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5>課程名稱 課程名稱課程名稱</h5>
              <p>募資價 <span class="text-primary fw-bold"> NT$ 3880 </span></p>
              <div class="progress" style="height: 20px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                >
                  達標率 75%
                </div>
              </div>

              <div class="d-flex justify-content-between mt-2">
                <p class="text-muted mb-0">同學 15 人</p>

                <p class="text-muted mb-0">剩餘 6 天</p>
              </div>
            </div>
          </div>
          <!-- 隱藏的區塊 -->
          <div
            class="card text-white"
            v-if="isHover"
            style="
              position: absolute;
              top: 10px;
              right: -100px;
              width: 100%;
              background-color: rgba(48, 45, 42, 0.8);
              z-index: 100;
            "
          >
            <div class="card-body">
              <h4>課程描述</h4>
              <p>
                原本隱藏的內容原本隱藏的，內容原本隱藏的內容原本
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
                原本隱藏的內容原本隱藏的，內容原本隱藏的內容原本
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
              </p>

              <div class="d-flex justify-content-between">
                <button class="btn btn-primary btn-sm">加入購物車</button>

                <button class="btn btn-outline-primary btn-sm">收藏</button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col position-relative"
          @mouseenter="setHover('2', true)"
          @mouseleave="setHover('2', false)"
        >
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5>課程名稱 課程名稱課程名稱</h5>
              <p>募資價 <span class="text-primary fw-bold"> NT$ 3880 </span></p>
              <div class="progress" style="height: 20px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                >
                  達標率 75%
                </div>
              </div>

              <div class="d-flex justify-content-between mt-2">
                <p class="text-muted mb-0">同學 15 人</p>

                <p class="text-muted mb-0">剩餘 6 天</p>
              </div>
            </div>
          </div>
          <!-- 隱藏的區塊 -->
          <div
            class="card text-white"
            v-if="isHover"
            style="
              position: absolute;
              top: 10px;
              right: -100px;
              width: 100%;
              background-color: rgba(48, 45, 42, 0.8);
              z-index: 100;
            "
          >
            <div class="card-body">
              <h4>課程描述</h4>
              <p>
                原本隱藏的內容原本隱藏的，內容原本隱藏的內容原本
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
                原本隱藏的內容原本隱藏的，內容原本隱藏的內容原本
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
                隱藏的內容原本隱藏的內容 原本隱藏的內容原本隱藏的內容
              </p>

              <div class="d-flex justify-content-between">
                <button class="btn btn-primary btn-sm">加入購物車</button>

                <button class="btn btn-outline-primary btn-sm">收藏</button>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col"><div class="card"></div></div>
        <div class="col"><div class="card"></div></div>
        <div class="col"><div class="card"></div></div>
        <div class="col"><div class="card"></div></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHover: "",
    };
  },

  mounted() {},

  methods: {
    setHover(index, status) {
      console.log(index, status);
    },
  },
};
</script>
