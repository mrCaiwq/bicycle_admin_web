<template>
  <div class="indexBox">
    <serverPoint v-if="this.$route.path != '/serverPoint'"/>
  </div>
</template>

<script>
import serverPoint from "../components/serverPoint";
export default {
  name: "Index",
  components: { serverPoint },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="sass" scoped>
@import "../assets/css/index.scss";
</style>
