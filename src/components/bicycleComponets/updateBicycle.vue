<template>
  <div class="createBox">
    <h1>修改单车</h1>
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
        <div class="copyButton">拾取经纬度</div>
      </div>
      <div class="outerBox">
        <span>单价:</span>
        <input type="number" placeholder="请输入单价" class="inputBox" v-model="bicycleMsg.price">
      </div>
      <div class="buttonBox">
        <div class="backButton" @click="back">返回</div>
        <div class="createButton" @click="update">修改</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import check from "../../utils/checkToken.js";
export default {
  name: "serverPointList",
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
    ...mapActions(["updateBicycle"]),
    getDetail() {
      const bikeMsg = this.$router.history.current.query;
      this.bicycleMsg.num = bikeMsg.num;
      this.bicycleMsg.lat = bikeMsg.lat;
      this.bicycleMsg.lng = bikeMsg.lng;
      this.bicycleMsg.price = bikeMsg.price;
    },
    back() {
      this.$router.push({
        path: "/bicycle"
      });
    },
    update() {
      if (check()) {
        const sendMsg = {
          id: this.$router.history.current.query.id,
          msg: this.bicycleMsg
        };
        this.updateBicycle(sendMsg)
          .then(data => {
            alert("修改成功");
            this.$router.push({
              path: "/bicycle"
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("登录超时，请重新登录");
        this.$router.push({
          path: "/login"
        });
      }
    }
  },
  computed: {},
  mounted() {
    this.getDetail();
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/serverPointUpdate.scss";
</style>
