<template>
  <div class="createBox">
    <h1>创建网点</h1>
    <div class="createMsgBox">
      <div class="outerBox">
        <div class="spanBox">
          <span>网点名:</span>
        </div>
        <input type="text" placeholder="请输入网点名字" class="inputBox" v-model="serverMsg.name">
      </div>
      <div class="outerBox">
        <div class="spanBox">
          <span>经度:</span>
        </div>
        <input type="text" placeholder="请输入经度" class="inputBox" v-model="serverMsg.lng">
      </div>
      <div class="outerBox">
        <div class="spanBox">
          <span>纬度:</span>
        </div>
        <input type="text" placeholder="请输入纬度" class="inputBox" v-model="serverMsg.lat">
      </div>
      <div class="outerBox">
        <div class="copyButton" @click="pick">拾取经纬度</div>
      </div>
      <div class="buttonBox">
        <div class="backButton" @click="back">返回</div>
        <div class="createButton" @click="create">创建</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import check from "../../utils/checkToken.js";
export default {
  name: "createPoint",
  data() {
    return {
      serverMsg: {
        name: "",
        lat: "",
        lng: ""
      }
    };
  },
  methods: {
    ...mapActions(["pointCreate"]),
    back() {
      this.$router.push({
        path: "/serverPoint"
      });
    },
    pick() {
      window.open("http://api.map.baidu.com/lbsapi/getpoint/index.html");
    },
    create() {
      if (check()) {
        this.pointCreate(this.serverMsg)
          .then(data => {
            alert("创建成功");
            this.$router.push({
              path: "/serverPoint"
            });
          })
          .catch(err => {});
      } else {
        alert("登陆超时,请重新登陆");
        this.$router.push({
          path: "/login"
        });
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/serverPointCreate.scss";
</style>
