import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
  // 仅在开发环境下引入
  require('@/mock/api');
}

new Vue({
  render: h => h(App),
}).$mount('#app')
