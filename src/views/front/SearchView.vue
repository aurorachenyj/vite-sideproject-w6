<template>
  <div class="container full-height">
    <div class="row">
      <div class="col-md-3">
        <div class="col-12" v-if="allarticleTag">
          <div
            class="card bg-light border-0"
            style="background: url(../../../public/img/content-bg.png)"
          >
            <div class="card-body">
              <a
                @click.prevent="searchTagArticle(tag)"
                v-for="tag in allarticleTag"
                :key="tag + 'jojo'"
                href=""
                class="m-1 badge text-decoration-none rounded-pill fs-7 hover-bg-primary"
                >#{{ tag }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mouted() {},
  methods: {},
};
</script>
