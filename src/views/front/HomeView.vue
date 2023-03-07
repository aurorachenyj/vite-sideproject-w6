<template>
  <!-- min-vh-100 -->

  {{ showFinalorderInfoData }}

  <LoadingVue v-model:active="isLoading"> </LoadingVue>

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

    <!-- position-absolute top-30 start-10 -->
    <div class="banner-text-position">
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
            <li><a class="dropdown-item" href="#">所有課程</a></li>

            <li><a class="dropdown-item" href="#">語言</a></li>
            <li><a class="dropdown-item" href="#">藝術</a></li>
            <li><a class="dropdown-item" href="#">攝影</a></li>
            <li><a class="dropdown-item" href="#">商業</a></li>

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
            <img src="/img/neural.png" alt="" />
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
            <img src="/img/tier.png" alt="" />
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
            <img src="/img/invest.png" alt="" />
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

  <div class="bg-light mb-3 py-4">
    <div class="container py-4">
      <div class="d-flex mb-3">
        <h3>熱門募資課程</h3>
        <a href="" class="fs-5 ms-auto link-primary text-decoration-none">
          看更多 <i class="bi bi-heart-arrow lg"></i>
        </a>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <!-- 募資卡片開始 -->

        <div
          v-for="fundClass in fundingClass"
          :key="fundClass.id"
          class="col position-relative"
          @mouseenter="setHover(fundClass.id, true)"
          @mouseleave="setHover(fundClass.id, false)"
        >
          <div class="card h-100">
            <RouterLink
              :to="`/course/${fundClass.id}`"
              class="text-decoration-none"
            >
              <div class="ratio ratio-16x9">
                <img
                  :src="fundClass.imageUrl"
                  class="card-img-top img-cover"
                  alt="..."
                />
              </div>
            </RouterLink>

            <div class="card-body">
              <div class="h-100 d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <h5>{{ fundClass.title }}</h5>
                  <!-- <i class="bi bi-bookmark-fill img-hover-enlarge"></i> -->

                  <i
                    v-if="bookmarkData.includes(fundClass.id)"
                    class="bi bi-bookmark-fill img-hover-enlarge"
                    @click="BookmarkAction(fundClass.id)"
                    style="
                      font-size: 1.5rem;
                      color: orange;
                      font-weight: 500;
                      cursor: pointer;
                    "
                  ></i>

                  <i
                    v-else
                    class="bi bi-bookmark img-hover-enlarge"
                    @click="BookmarkAction(fundClass.id)"
                    style="
                      font-size: 1.5rem;
                      color: orange;
                      font-weight: 500;
                      cursor: pointer;
                    "
                  ></i>
                </div>

                <div class="mt-auto">
                  <p>
                    募資價
                    <span class="text-primary fw-bold h3">
                      NT$ {{ fundClass.funding_price }}
                    </span>
                  </p>
                  <div class="progress" style="height: 20px">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 75%"
                    >
                      達標率 ?? %
                    </div>
                  </div>

                  <div class="d-flex justify-content-between mt-2">
                    <p class="text-muted mb-0">同學 ?? 人</p>

                    <p class="text-muted mb-0">
                      <span class="text-secondary fw-bolder">
                        {{ countLeftDay(fundClass.fundingEndDate) }}
                      </span>
                      結束
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 隱藏的區塊 -->
          <div
            class="card text-white w-50 d-none d-md-block border-5 border-primary border-end-0 border-bottom-0"
            v-if="isHover === fundClass.id"
            style="
              position: absolute;
              top: 10px;
              right: -100px;
              width: 100%;
              background-color: rgba(48, 45, 42, 0.9);
              z-index: 100;
            "
          >
            <!-- background-color: rgba(48, 45, 42, 0.8); -->

            <div class="card-body">
              <!-- <h4>課程描述</h4> -->
              <p>
                {{ fundClass.description }}
              </p>

              <div class="d-flex flex-column">
                <button class="btn btn-outline-primary btn-sm mb-2">
                  <RouterLink
                    :to="`/course/${fundClass.id}`"
                    class="text-white text-decoration-none"
                  >
                    查看詳情
                  </RouterLink>
                </button>

                <a
                  v-if="showCheck.includes(fundClass.id)"
                  href="#/cart"
                  type="button"
                  class="btn btn-primary text-white btn-sm"
                >
                  已選購，結帳去
                </a>

                <button
                  v-else
                  @click="addToCart(fundClass.id)"
                  class="btn btn-primary btn-sm"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 募資卡片結束 -->
      </div>
    </div>
  </div>

  <!-- 最新募資課程 -->
  <div class="container py-4 mb-3">
    <div class="d-flex mb-3">
      <h3>最新募資課程</h3>
      <a href="" class="fs-5 ms-auto link-primary text-decoration-none">
        看更多 <i class="bi bi-heart-arrow"></i>
      </a>
    </div>

    <div class="row">
      <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>
          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  募資價
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>
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
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>
          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  募資價
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>
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
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>

          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課 課程名稱課</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  募資價
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>
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
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>
          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  募資價
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 已開課熱門課程 -->
  <div class="container py-4 mb-3">
    <div class="d-flex mb-3">
      <h3>已開課熱門課程</h3>
      <a href="" class="fs-5 ms-auto link-primary text-decoration-none">
        看更多 <i class="bi bi-heart-arrow"></i>
      </a>
    </div>

    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
      <div class="col" v-for="openClass in openingClass" :key="openClass.id">
        <div class="card h-100">
          <RouterLink
            :to="`/course/${openClass.id}`"
            class="text-decoration-none"
          >
            <div class="ratio ratio-16x9">
              <img
                :src="openClass.imageUrl"
                class="card-img-top img-cover"
                alt="..."
              />
            </div>
          </RouterLink>

          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>{{ openClass.title }}</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  <del>NT$ {{ openClass.origin_price }}</del>
                  <span class="text-primary fw-bold h3">
                    NT$ {{ openClass.price }}
                  </span>
                </p>

                <div
                  class="d-flex justify-content-between mt-2 align-items-center"
                >
                  <p class="text-muted mb-0">同學 ?? 人</p>

                  <a
                    v-if="showCheck.includes(openClass.id)"
                    href="#/cart"
                    type="button"
                    class="btn btn-primary text-white btn-sm"
                  >
                    已選購，結帳去
                  </a>

                  <button
                    v-else
                    @click="addToCart(openClass.id)"
                    class="btn btn-outline-primary btn-sm"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>

          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  <del>NT$ 3900</del>
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>

                <div
                  class="d-flex justify-content-between mt-2 align-items-center"
                >
                  <p class="text-muted mb-0">同學 15 人</p>

                  <button class="btn btn-outline-primary btn-sm">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>

          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課222</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  <del>NT$ 3900</del>
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>

                <div
                  class="d-flex justify-content-between mt-2 align-items-center"
                >
                  <p class="text-muted mb-0">同學 15 人</p>

                  <button class="btn btn-outline-primary btn-sm">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <a href="">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              class="card-img-top"
              alt="..."
          /></a>

          <div class="card-body">
            <div class="h-100 d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h5>課程名稱 課程名稱課</h5>
                <i
                  class="bi bi-bookmark img-hover-enlarge"
                  style="
                    font-size: 1.5rem;
                    color: orange;
                    font-weight: 500;
                    cursor: pointer;
                  "
                ></i>
              </div>

              <div class="mt-auto">
                <p>
                  <del>NT$ 3900</del>
                  <span class="text-primary fw-bold h3"> NT$ 1111 </span>
                </p>

                <div
                  class="d-flex justify-content-between mt-2 align-items-center"
                >
                  <p class="text-muted mb-0">同學 15 人</p>

                  <button class="btn btn-outline-primary btn-sm">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>

  <!-- 學生回饋 -->
  <div class="bg-light py-4 mb-5">
    <div class="container">
      <h3 class="text-center mb-3">學生回饋</h3>

      <div
        class="d-flex align-items-center col-md-8 col-lg-6 mb-3 p-3 border-bottom img-hover-enlarge"
      >
        <img
          src="/img/jernej-graj-GY5gWDimEyg-unsplash.jpg"
          class="img-fluid rounded-circle me-3"
          style="height: 100px; width: 100px"
          alt="..."
        />

        <div class="position-relative bg-white p-2 round-10">
          <p class="mb-0">
            <i
              class="bi bi-quote position-absolute top-0 start-0 translate-middle"
              style="font-size: 2rem; color: #ff4066"
            ></i>
            <br />

            課程內容非常實用，老師講解清晰易懂，能夠讓我快速掌握技能，非常感謝！
          </p>
          <br />
          <i
            class="bi bi-quote xy-flip position-absolute bottom-0 end-0"
            style="font-size: 1.5rem; color: #ff4066"
          ></i>
        </div>
      </div>

      <div class="d-flex flex-row-reverse">
        <div
          class="col-md-8 col-lg-6 d-flex flex-row-reverse align-items-center mb-3 p-3 border-bottom img-hover-enlarge"
        >
          <img
            src="/img/ke-atlas-eqHRrgRQDew-unsplash.jpg"
            class="img-fluid rounded-circle ms-3"
            style="height: 100px; width: 100px"
            alt="..."
          />

          <div class="position-relative bg-white p-2 round-10">
            <p class="mb-0">
              <i
                class="bi bi-quote position-absolute top-0 start-0 translate-middle"
                style="font-size: 2rem; color: #fb8c00"
              ></i>
              <br />

              講師的教學深入淺出，適合初學者和進階者，讓我們都能夠從中學到東西，非常充實，大推！
            </p>
            <br />
            <i
              class="bi bi-quote xy-flip position-absolute bottom-0 end-0"
              style="font-size: 1.5rem; color: #fb8c00"
            ></i>
          </div>
        </div>
      </div>

      <div
        class="d-flex align-items-center col-md-8 col-lg-6 mb-3 p-3 border-bottom img-hover-enlarge"
      >
        <img
          src="/img/sung-wang-g4DgCF90EM4-unsplash.jpg"
          class="img-fluid rounded-circle me-3"
          style="height: 100px; width: 100px"
          alt="..."
        />

        <div class="position-relative bg-white p-2 round-10">
          <p class="mb-0">
            <i
              class="bi bi-quote position-absolute top-0 start-0 translate-middle"
              style="font-size: 2rem; color: #fb8c00"
            ></i>
            <br />

            老師授課方式非常生動有趣，充滿互動，讓我能夠更加融入課程，學習效果更好~
          </p>
          <br />
          <i
            class="bi bi-quote xy-flip position-absolute bottom-0 end-0"
            style="font-size: 1.5rem; color: #fb8c00"
          ></i>
        </div>
      </div>

      <div class="d-flex flex-row-reverse">
        <div
          class="col-md-8 col-lg-6 d-flex flex-row-reverse align-items-center p-3 border-bottom img-hover-enlarge"
        >
          <img
            src="/img/lau-keith-dcZsxUAAJXs-unsplash.jpg"
            class="img-fluid rounded-circle ms-3"
            style="height: 100px; width: 100px"
            alt="..."
          />

          <div class="position-relative bg-white p-2 round-10">
            <p class="mb-0">
              <i
                class="bi bi-quote position-absolute top-0 start-0 translate-middle"
                style="font-size: 2rem; color: #ff4066"
              ></i>
              <br />

              學習資源非常豐富，包括影片、練習題、測驗等，讓我們能夠有更多的學習機會和挑戰，非常棒！
            </p>
            <br />
            <i
              class="bi bi-quote xy-flip position-absolute bottom-0 end-0"
              style="font-size: 1.5rem; color: #ff4066"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 課程類別 -->
  <div class="container pt-3 pb-4 mb-5">
    <h3 class="mb-3 text-center">課程類別</h3>

    <div class="row row-cols-1 row-cols-md-5">
      <div class="col">
        <a
          href=""
          class="btn btn-outline-primary w-100 border-top-0 border-start-0 shadow-sm"
          >語言學習 <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-translate"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
            />
            <path
              d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
            />
          </svg>
        </a>
      </div>

      <div class="col">
        <a
          href=""
          class="btn btn-outline-secondary w-100 border-top-0 border-start-0 shadow-sm"
          >藝術 <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-brush"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"
            />
          </svg>
        </a>
      </div>

      <div class="col">
        <a
          href=""
          class="btn btn-outline-primary w-100 border-top-0 border-start-0 shadow-sm"
          >攝影 <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-camera-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path
              d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
            />
          </svg>
        </a>
      </div>

      <div class="col">
        <a
          href=""
          class="btn btn-outline-secondary w-100 border-top-0 border-start-0 shadow-sm"
        >
          商業
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-briefcase"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </a>
      </div>

      <div class="col">
        <a
          href=""
          class="btn btn-outline-primary w-100 border-top-0 border-start-0 shadow-sm"
          >投資理財 <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-cash-coin"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
            />
            <path
              d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
            />
            <path
              d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"
            />
            <path
              d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/dist/locale/zh-tw";
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cartStore.js";
import orderStore from "../../stores/orderStore.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      isHover: "",
      fundingClass: [],
      openingClass: [],
      bookmarkData: [],
    };
  },
  created() {
    moment.locale("zh-tw");
  },
  mounted() {
    this.getFundingAndOpenClassList();
    this.getLocalStorageBookmark();
    this.getAllCourse();

    // this.setLocalStorageBookmark();
  },
  watch: {
    bookmarkData() {
      this.setLocalStorageBookmark();
    },
    ShowCourseList() {
      this.getCartList();
    },
    cartList() {
      this.checkedClass();
    },
  },
  computed: {
    ...mapState(cartStore, ["cartList", "ShowCourseList", "showCheck"]),
    ...mapState(orderStore, ["showFinalorderInfoData"]),
  },

  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "addToCart",
      "checkedClass",

      "getAllCourse",
    ]),

    countLeftDay(endTimeStr) {
      const todayDateStr = Date.parse(new Date());

      if (todayDateStr > endTimeStr) {
        return "已";
      }

      // 換回時間格式
      endTimeStr = new Date(endTimeStr).toISOString();

      return moment(endTimeStr).fromNow();
    },

    setLocalStorageBookmark() {
      localStorage.setItem("learnfundBookmark", this.bookmarkData);
    },

    getLocalStorageBookmark() {
      const bookmarkStr = localStorage.getItem("learnfundBookmark");
      this.bookmarkData = bookmarkStr.split(",");
      console.log(this.bookmarkData);
    },

    BookmarkAction(id) {
      console.log(this.bookmarkData);

      if (event.target.classList.contains("bi-bookmark")) {
        event.target.classList.remove("bi-bookmark");
        event.target.classList.add("bi-bookmark-fill");
        this.bookmarkData.push(id);
        this.setLocalStorageBookmark();
      } else {
        const targetIndex = this.bookmarkData.indexOf(id);
        console.log(targetIndex);
        this.bookmarkData.splice(targetIndex, 1);
        this.setLocalStorageBookmark();
        console.log(this.bookmarkData);
        event.target.classList.remove("bi-bookmark-fill");
        event.target.classList.add("bi-bookmark");
      }
    },

    setHover(hoverClassId, status) {
      console.log(hoverClassId, status);

      if (status === true) {
        this.isHover = hoverClassId;
      } else {
        this.isHover = "";
      }
      console.log(this.isHover);
    },

    getFundingAndOpenClassList() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          console.log(res.data.products);
          this.isLoading = false;

          this.fundingClass = res.data.products.filter((course) => {
            return course.courseStatus === "classFunding";
          });
          console.log(this.fundingClass);

          this.openingClass = res.data.products.filter((course) => {
            return course.courseStatus === "classOpen";
          });
          console.log(this.openingClass);
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
};
</script>
