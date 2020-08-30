import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuelidate from 'vuelidate'  // 表单验证解决方案1 vuelidate
// import Vee, { Validator } from 'vee-validate' // 表单验证解决方案2 vee-validate
// import Vee_zh from 'vee-validate/dist/locale/zh_CN' // 使用中文error-message方法1
// import './local/index' // 使用中文error-message方法2
import Alert from './components/modules/alert'

// console.log(Alert);
Vue.use(Alert);
// Vue.use(Vee);

// Validator.localize('zh-CN', Vee_zh);
// 使用中文error-message方法2
// const validator = new Validator()
// validator.localize('zh-CN')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
