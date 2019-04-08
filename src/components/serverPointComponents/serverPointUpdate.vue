<template>
  <div class="createBox">
    <h1>创建网点</h1>
    <div class="createMsgBox">
      <div class="outerBox">
        <span>网点名:</span>
        <input type="text" placeholder="请输入网点名字" class="inputBox" v-model="serverMsg.name">
      </div>
      <div class="outerBox">
        <span>经度:</span>
        <input type="text" placeholder="请输入经度" class="inputBox" v-model="serverMsg.lng">
      </div>
      <div class="outerBox">
        <span>纬度:</span>
        <input type="text" placeholder="请输入纬度" class="inputBox" v-model="serverMsg.lat">
      </div>
      <div class="outerBox">
        <div class="copyButton">拾取经纬度</div>
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
      serverMsg: {
        name: "",
        lat: "",
        lng: ""
      }
    };
  },
  methods: {
    ...mapActions(["getPointDetail", "pointUpdate"]),
    getDetail() {
      this.getPointDetail(this.$router.history.current.params.id)
        .then(data => {
          const response = data.data;
          this.serverMsg.name = response.name;
          this.serverMsg.lat = response.lat;
          this.serverMsg.lng = response.lng;
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.push({
        path: "/serverPoint"
      });
    },
    update() {
      const date = {
        id: this.$router.history.current.params.id,
        msg: this.serverMsg
      };
      this.pointUpdate(date)
        .then(data => {
          alert("修改成功");
          this.$router.push({
            path: "/serverPoint"
          });
        })
        .catch(err => {});
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
