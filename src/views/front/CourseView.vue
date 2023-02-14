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
    console.log(this.$router); // 路由方法
    console.log(this.$route.params.id); // 路由 屬性 值
    this.classId = this.$route.params.id;
    this.getClassData();
  },
  methods: {
    getClassData() {
      console.log("classid", this.classId);
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.classId}`)
        .then((res) => {
          console.log(res.data);
          this.classData = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
