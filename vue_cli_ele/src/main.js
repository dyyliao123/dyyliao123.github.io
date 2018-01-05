// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//axios请求方式；
import axios from 'axios'
Vue.prototype.$axios=axios;

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

// 超时时间
axios.defaults.timeout = 5000
//vuejs过滤器，所有请求前调用，next返回response处理
axios.interceptors.request.use(
    (config) => {
    	if ("ddfe859a454bdce527cf0184c8d8b45c") {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//  		console.log(localStorage.zhdj_token)
            config.headers.Authorization = "ddfe859a454bdce527cf0184c8d8b45c";
        }else{
        	router.replace({ path: 'login' })
        }
		return config;
    },err => {
        return Promise.reject(err);
    }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
