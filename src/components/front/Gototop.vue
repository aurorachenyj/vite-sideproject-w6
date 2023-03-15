<template>
  <i
    class="bi bi bi-rocket fs-2 text-primary img-hover-enlarge d-none"
    id="toTopBtn"
    @click="this.$emit('toTop')"
    style="bottom: 4rem; right: 1.5rem; position: fixed; z-index: 2000"
  ></i>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.toTopBtnStatus);
  },
  methods: {
    goTotop() {
      window.scrollTo(0, 0);
    },
    toTopBtnStatus() {
      this.toTopBtn = document.querySelector("#toTopBtn");

      if (window.scrollY > 100) {
        this.toTopBtn.classList.remove("d-none");
        this.toTopBtn.classList.add("d-block");
      } else {
        this.toTopBtn.classList.remove("d-block");
        this.toTopBtn.classList.add("d-none");
      }
    },
  },
};
</script>
