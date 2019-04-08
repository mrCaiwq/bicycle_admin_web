<template>
  <div class="topBarBox">
    <p>后台管理系统</p>
    <div class="loginOut" @click="loginOut" v-if="this.$route.path != '/login'">
      <span>退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {};
  },
  methods: {
    loginOut() {
      localStorage.clear();
      this.$router.push({
        path: "/login"
      });
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="sass" scoped>
@import "../assets/css/topBar.scss";
</style>
