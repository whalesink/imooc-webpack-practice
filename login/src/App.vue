<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="name"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              v-model.trim="name"
            />
          </div>
          <div class="error layui-form-mid"></div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="psw"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
              v-model.trim="psw"
            />
          </div>
          <div class="error layui-form-mid"></div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
              v-model="code"
            />
          </div>
          <div class="error layui-form-mid"></div>
          <div class="layui-form-mid svg" v-html="captcha" @click="getNewCaptcha"></div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a href="http://www.layui.com" class="forget-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { required, email } from "vuelidate/lib/validators";
import { getCode } from "@/API/login";

export default {
  name: "app",

  data() {
    return {
      captcha: "",
      name: "",
      psw: "",
      code: "",
      errorMsg: [],
    };
  },

  mounted() {
    getCode().then((res) => {
      this.captcha = res.data;
    });
  },

  methods: {
    // 获取验证码
    getNewCaptcha() {
      getCode().then((res) => {
        this.captcha = res.data;
      });
    },
    // getNewCaptcha() {
    //   axios
    //     .get("http://localhost:3000/getCaptcha")
    //     .then(res => {
    //       console.log(res);
    //       if (res.data.code === 200) {
    //         this.captcha = res.data.data;
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #f2f2f2;
}

.layui-container {
  background-color: #fff;
}

input {
  width: 190px;
}

.forget-link {
  margin-left: 10px;
  /**scss语法：这里的&即表示.forget-link */
  &:hover {
    color: violet;
  }
}

.svg {
  position: relative;
  top: -15px;
}

.error {
  color: red;
}
</style>
