// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' // 載入 Element
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App' // 載入 App 元件
import router from './router' // 載入路由

Vue.config.productionTip = false // 開發環境提示，預設為 false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App) // components + template = render
})
