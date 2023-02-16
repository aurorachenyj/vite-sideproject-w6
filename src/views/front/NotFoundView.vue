<template>
  <div class="container">
    404
    <br />
    找不到頁面，將在{{ counter }}秒後回到首頁
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
