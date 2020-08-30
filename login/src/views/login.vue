<template>
  <div id="app">
    <div class="layui-container">
      <!-- <alert :isShow="true"></alert> -->
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
        <button type="button" class="layui-btn" @click="submit">点击登录</button>
        <a href class="forget-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { required, email } from "vuelidate/lib/validators";
import { getCode, login } from "@/API/login";
import { v4 as uuidv4 } from "uuid";

// import Alert from "@/components/modules/alert";

export default {
  name: "app",
  components: {},
  data() {
    return {
      captcha: "",
      name: "",
      psw: "",
      code: "",
      errorMsg: [],
      sid: "",
    };
  },

  mounted() {
    window.vue = this;
    // 检查sid
    let sid = "";
    if (localStorage.getItem("sid")) {
      sid = localStorage.getItem("sid");
    } else {
      sid = uuidv4();
      localStorage.setItem("sid", sid);
    }
    this.sid = sid;

    // 在vuex中保存
    this.$store.commit("setSid", sid);
    // console.log(sid);

    // 请求一个新验证码并给它唯一标记
    this.getNewCaptcha();
  },

  methods: {
    // 获取验证码
    getNewCaptcha() {
      let sid = this.$store.state.sid;
      // console.log(sid);
      getCode(sid).then((res) => {
        this.captcha = res.data;
      });
    },

    // 登录
    submit() {
      login({
        username: this.name,
        password: this.psw,
        code: this.code,
        sid: this.sid,
      }).then((res) => {
        console.log(res);
      });
    },
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
