// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
// import moment, { months } from 'moment'
// // 定义全局的过滤器
// // Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
// //   return moment(dataStr).format(pattern)
// // })
// Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss  ') {
//   return moment(dataStr).format(pattern)
// })

import moment, { months } from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern='YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})


// import vueResource from 'vue-resource'
// Vue.use(vueResource)

// 2.1 导入 axios
import axios from 'axios'
//把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://120.77.181.41:3000/api'; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 App 根组件
import app from './App.vue'



var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载路由对象到 VM 实例上
})