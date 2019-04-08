<template>
  <div class="serverBox">
    <h1>网点列表</h1>
    <div class="listBox">
      <div class="createPoint" @click="goCreate">创建网点</div>
      <div class="listTable">
        <div class="tableHeader">
          <div class="pointName">网点名</div>
          <div class="bicycleCount">已有单车数量(辆)</div>
          <div class="operating">操作</div>
        </div>
        <div class="list" v-for="point in serverList" :key="point.index">
          <div class="name" v-html="point.name"></div>
          <div class="count" v-html="point.bicycleCount"></div>
          <div class="operationName" @click="go(point.id)">修改</div>
          <div class="operationName" @click="goAdd(point.id)">绑定</div>
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
      serverList: [],
      perPage: 14,
      page: 10,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions(["serverGet"]),
    handleCurrentChange(val) {
      if (check()) {
        this.serverGet({ per_page: this.perPage, page: val })
          .then(data => {
            const response = data;
            this.page = response.meta.page * 10;
            this.serverList = response.data;
          })
          .catch(err => {});
      } else {
        alert("登陆超时,请重新登陆");
        this.$router.push({
          path: "/login"
        });
      }
    },
    go(id) {
      this.$router.push({
        path: `/update/${id}`
      });
    },
    goAdd(id) {
      this.$router.push({
        path: `/serverPoint/${id}/add`
      });
    },
    goCreate() {
      this.$router.push({
        path: "/create"
      });
    },
    getServerList() {
      if (check()) {
        this.serverGet({ per_page: this.perPage })
          .then(data => {
            const response = data;
            this.page = response.meta.page * 10;
            this.serverList = response.data;
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
  mounted() {
    this.getServerList();
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/css/serverPoint.scss";
</style>
