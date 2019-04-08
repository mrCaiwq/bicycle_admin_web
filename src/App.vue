<template>
  <div id="app">
    <topBar id="topBar"/>
    <div id="mainBox">
      <menuBar v-if="this.$route.path != '/login'" id="menuBar"/>
      <router-view id="routerView"/>
    </div>
  </div>
</template>

<script>
import topBar from "@/components/topBar";
import menuBar from "@/components/menu";
export default {
  name: "App",
  components: { topBar, menuBar }
};
</script>

<style>
html,
body,
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  background: #eaeaea;
  height: 100%;
}

#topBar {
  height: 6%;
}

#mainBox {
  height: 93.9%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#menuBar {
  width: 14%;
}

#routerView {
  width: 86%;
  height: 100%;
}
</style>
