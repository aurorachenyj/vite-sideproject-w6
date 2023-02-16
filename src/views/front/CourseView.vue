<template>
  <div class="container">
    <div>單一課程詳細頁面</div>

    {{ classData }}
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      classId: "",
      classData: {},
    };
  },
  mounted() {
    this.classId = this.$route.params.id;
    this.getClassData();
  },
  methods: {
    getClassData() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.classId}`)
        .then((res) => {
          this.classData = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
