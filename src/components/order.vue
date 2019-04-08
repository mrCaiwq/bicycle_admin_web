<template>
  <div class="orderBox">
    <h1>订单列表</h1>
    <div class="listBox">
      <div class="listTable">
        <div class="tableHeader">
          <div class="pointName">订单号</div>
          <div class="pointName">租借时间</div>
          <div class="pointName">归还时间</div>
          <div class="pointName">总金额</div>
          <div class="orderState">状态</div>
        </div>
        <div class="list" v-for="order in list" :key="order.index">
          <div class="name" v-html="order.orderNum"></div>
          <div class="name" v-html="order.leaseTime"></div>
          <div class="name" v-html="order.returnTime"></div>
          <div class="name" v-html="order.total"></div>
          <div class="orderState" v-html="order.state == 'finish' ? '完成' : '租借中'"></div>
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
  name: "Order",
  data() {
    return {
      list: [
        {
          orderNum: "123456789",
          leaseTime: "2017-08-09 12:11:11",
          returnTime: "2017-08-09 13:11:11",
          total: "150"
        }
      ],
      currentPage: 1,
      perPage: 14,
      page: 0
    };
  },
  methods: {
    ...mapActions(["orderList"]),
    handleCurrentChange(val) {},
    getList() {
      if (check()) {
        this.orderList({ per_page: this.perPage })
          .then(data => {
            const response = data;
            this.list = response.data;
            console.log(data);
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
    this.getList();
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/css/order.scss";
</style>
