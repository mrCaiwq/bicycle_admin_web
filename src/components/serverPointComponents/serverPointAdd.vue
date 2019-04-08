<template>
  <div class="createBox">
    <h1>绑定单车</h1>
    <div class="createMsgBox">
      <div class="selectBox">
        <span>未绑定单车:</span>
        <div class="inputBox">
          <el-checkbox
            v-for="select in bikeList"
            :key="select.index"
            v-model="select.isSelect"
          >{{select.num + '号单车'}}</el-checkbox>
        </div>
      </div>
      <div class="buttonBox">
        <div class="backButton" @click="back">返回</div>
        <div class="createButton" @click="add">创建</div>
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
      bikeList: [],
      addBicyclesId: []
    };
  },
  methods: {
    ...mapActions(["pointCreate", "bicycleList", "pointAddBicycle"]),
    back() {
      this.$router.push({
        path: "/serverPoint"
      });
    },

    add() {
      let a = new Array();
      this.bikeList.forEach(bike => {
        if (bike.isSelect) {
          a.push(bike.id);
        }
      });
      // this.addBicyclesId = this.addBicyclesId.join(",").split(",");
      console.log(a);
      const addMsg = {
        id: this.$router.history.current.params.id,
        msg: { ids: a }
      };
      this.pointAddBicycle(addMsg)
        .then(data => {
          alert("绑定成功");
          this.$router.push({
            path: "/serverPoint"
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getList() {
      this.bicycleList({ per_page: 200 })
        .then(data => {
          const response = data;
          let list = response.data;
          list.forEach(bike => {
            if (bike.servicePointId == null) {
              bike.isSelect = false;
              this.bikeList.push(bike);
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {},
  mounted() {
    this.getList();
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/serverPointAdd.scss";
</style>
