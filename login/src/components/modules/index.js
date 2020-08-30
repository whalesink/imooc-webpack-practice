import AlertComponent from './alert.vue'

const Alert = {}

// 参考 Vue 插件 https://cn.vuejs.org/v2/guide/plugins.html
Alert.install = (Vue) => {
    console.log('slot --');
    const AlertConstructor = Vue.extend(AlertComponent)
    const instance = new AlertConstructor()
    instance.$mount(document.createElement('div'));
    
    // 4. 添加实例方法
    Vue.prototype.$alert = (msg) => {
        document.body.appendChild(instance.$el)
        instance.msg = msg
        instance.isShow = true
    }
}



// Alert.install = (Vue) => {
//   const AlertConstructor = Vue.extend(AlertComponent)
//   const instance = new AlertConstructor()
//   instance.$mount(document.createElement('div'))

//   // 4. 添加实例方法
//   Vue.prototype.$alert = (msg) => {
//     document.body.appendChild(instance.$el)
//     // 逻辑...
//     instance.type = 'alert'
//     instance.msg = msg
//     instance.isShow = true
//     instance.instance = instance
//   }

//   Vue.prototype.$confirm = (msg, success, cancel) => {
//     document.body.appendChild(instance.$el)
//     // 逻辑...
//     instance.type = 'confirm'
//     instance.msg = msg
//     instance.isShow = true
//     instance.instance = instance
//     if (typeof success !== 'undefined') {
//       instance.success = success
//     }
//     if (typeof cancel !== 'undefined') {
//       instance.cancel = cancel
//     }
//   }
// }

// export default Alert

export default Alert