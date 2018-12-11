import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // 載入 HelloWorld 元件，命名為 HelloWorld
import HardenDown from '@/components/HardenDown' // 載入 HardenDown 組件，命名為 HardenDown

Vue.use(Router) // 告訴 Vue 要使用路由

export default new Router({
  routes: [
    {
      path: '/', // 設定路由路徑
      name: 'HelloWorld', // 設定路由名稱
      component: HelloWorld // 掛載元件
    },
    // 綁定 HardenDown 組件到 /down 路徑上
    {
      path: '/down',
      name: 'HardenDown',
      component: HardenDown
    }
  ]
})
