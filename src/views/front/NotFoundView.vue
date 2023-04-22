<style>
@keyframes colorRotate {
  25% {
    color: red;
    transform: rotate(-5deg);
  }

  50% {
    color: darkblue;
    transform: translate(20px, -10px);
  }

  75% {
    color: orange;
    transform: rotate(3deg);
  }
}

.animate {
  animation: colorRotate 1s infinite;
}
.animateTwo {
  animation: colorRotate 3s infinite;
}
</style>

<template>
  <div class="container full-height">
    <div class="h3 mt-5 fw-bolder text-primary animate">4 0 4</div>

    <div class="fs-5 animateTwo">找不到頁面，將在{{ counter }}秒後回到首頁</div>
  </div>
</template>

<script>
export default {
  data() {
    return { counter: 3 };
  },
  methods: {
    countdown() {
      const timeStop = setInterval(() => {
        this.counter -= 1;
        if (this.counter === 0) {
          clearInterval(timeStop);
        }
      }, 1000);
    },
  },

  mounted() {
    //3秒回首頁
    setTimeout(() => {
      this.$router.push("/");
    }, 3000);
    // 秒數倒數顯示
    this.countdown();
  },
};
</script>
