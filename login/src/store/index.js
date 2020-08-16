import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
  },
  mutations: {
    // 唯一可以改变sid的函数
    setSid(state, value){
      state.sid = value
    }
  },
  actions: {
  },
  modules: {
  }
})
