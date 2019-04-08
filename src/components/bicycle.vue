<template>
  <div class="bicycleBox">
    <h1>单车列表</h1>
    <div class="listBox">
      <div class="createPoint" @click="create">创建单车</div>
      <div class="listTable">
        <div class="tableHeader">
          <div class="pointName">单车编号</div>
          <div class="pointName">价格(1次)</div>
          <div class="pointName">状态</div>
          <div class="operating">操作</div>
        </div>
        <div class="list" v-for="bicycle in list" :key="bicycle.index">
          <div class="name" v-html="bicycle.num"></div>
          <div class="name" v-html="bicycle.price"></div>
          <div class="name" v-html="bicycle.state"></div>
          <div class="operationName" @click="update(bicycle)">修改</div>
        </div>
      </div>
    </div>
    <div class="pageBox">
      <el-pagination
        layout="pager"
        :total="page"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import check from "../utils/checkToken.js";
export default {
  name: "serverPoint",
  data() {
    return {
      list: [],
      perPage: 14,
      page: 10,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions(["bicycleList"]),
    handleCurrentChange(val) {
      this.bicycleList({ per_page: this.perPage, page: val })
        .then(data => {
          const response = data;
          let list = response.data;
          list.forEach(bike => {
            if (bike.state == "ready") {
              bike.state = "空闲";
            } else if (bike.state == "booked") {
              bike.state = "已预订";
            } else {
              bike.state = "租借中";
            }
            this.list.push(bike);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getList() {
      this.bicycleList({ per_page: this.perPage })
        .then(data => {
          const response = data;
          let list = response.data;
          list.forEach(bike => {
            if (bike.state == "ready") {
              bike.state = "空闲";
            } else if (bike.state == "booked") {
              bike.state = "已预订";
            } else {
              bike.state = "租借中";
            }
            this.list.push(bike);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    create() {
      this.$router.push({
        path: "/bicycle/create"
      });
    },
    update(val) {
      this.$router.push({
        path: `/bicycle/${val.id}/update`,
        query: val
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
@import "../assets/css/bicycle.scss";
</style>
