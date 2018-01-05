// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*引入element框架*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 引入UEditor富文本
import '../static/ueditorPhp-1.4.3.3/ueditor.config.js'
import '../static/ueditorPhp-1.4.3.3/ueditor.all.min.js'
import '../static/ueditorPhp-1.4.3.3/lang/zh-cn/zh-cn.js'
import '../static/ueditorPhp-1.4.3.3/ueditor.parse.min.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
