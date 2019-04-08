<template>
  <div class="menuBox">
    <div
      class="menuItem"
      v-for="menu in menuList"
      :key="menu.name"
      v-html="menu.name"
      @click="go(menu.router)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "menuBar",
  data() {
    return {
      menuList: [
        {
          name: "网点",
          router: "/serverPoint"
        },
        {
          name: "单车",
          router: "/bicycle"
        },
        {
          name: "订单",
          router: "/order"
        }
      ]
    };
  },
  methods: {
    go(name) {
      this.$router.push({
        path: name
      });
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="sass" scoped>
@import "../assets/css/menu.scss";
</style>