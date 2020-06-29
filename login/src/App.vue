<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid">图片</div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a href="http://www.layui.com" class="forget-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {}
  },

  mounted () {
    axios.get('localhost:3000/getCaptcha').then(res => {
      console.log(res)
    })
      .catch(err => {
        console.log(err)
      })
  }
}
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
</style>
