<template>
  <div class="createBox">
    <h1>创建单车</h1>
    <div class="createMsgBox">
      <div class="outerBox">
        <span>编号:</span>
        <input type="text" placeholder="请输入单车编号" class="inputBox" v-model="bicycleMsg.num">
      </div>
      <div class="outerBox">
        <span>经度:</span>
        <input type="text" placeholder="请输入经度" class="inputBox" v-model="bicycleMsg.lng">
      </div>
      <div class="outerBox">
        <span>纬度:</span>
        <input type="text" placeholder="请输入纬度" class="inputBox" v-model="bicycleMsg.lat">
      </div>
      <div class="outerBox">
        <div class="copyButton" @click="pick">拾取经纬度</div>
      </div>
      <div class="outerBox">
        <span>单价:</span>
        <input type="number" placeholder="请输入单价" class="inputBox" v-model="bicycleMsg.price">
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
      bicycleMsg: {
        num: "",
        lat: "",
        lng: "",
        price: 0
      }
    };
  },
  methods: {
    ...mapActions(["bicycleCreate"]),
    back() {
      this.$router.push({
        path: "/bicycle"
      });
    },
    pick() {
      window.open("http://api.map.baidu.com/lbsapi/getpoint/index.html");
    },
    create() {
      if (check()) {
        this.bicycleCreate(this.bicycleMsg)
          .then(data => {
            alert("创建成功");
            this.$router.push({
              path: "/bicycle"
            });
          })
          .catch(err => {
            console.log(data);
          });
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
@import "../../assets/css/createBicycle.scss";
</style>
