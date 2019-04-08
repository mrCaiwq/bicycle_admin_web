<template>
  <div class="loginBox">
    <div class="login-box">
      <h1>登录</h1>
      <div class="msg-box">
        <input
          type="text"
          v-model="loginMsg.cellphone"
          class="input-box"
          placeholder="请输入手机号码"
          maxlength="11"
        >
        <input type="password" v-model="loginMsg.password" class="input-box" placeholder="请输入密码">
      </div>
      <div class="login-button" @click="login" v-html="buttonText"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginMsg: {
        cellphone: "",
        password: ""
      },
      buttonState: true,
      buttonText: "登录"
    };
  },
  methods: {
    ...mapActions(["loginPost"]),
    login() {
      if (this.buttonState) {
        this.buttonText = "登录中...";
        this.loginPost(this.loginMsg)
          .then(data => {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("loginTime", new Date());
            this.$router.push({
              path: "/"
            });
          })
          .catch(data => {
            console.log(data);
          });
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="sass" scoped>
@import "../assets/css/login.scss";
</style>
