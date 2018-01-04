import Vue from 'vue'
import Router from 'vue-router'
/*主体共用页面*/
import MainPage from '@/components/main_page'
import login from '@/components/login/login'
import Content from '@/components/content'

/*设置*/
import CompanyInfo from '@/components/setting/company_info'

Vue.use(Router)

export default new Router({
  routes: [
  		{ path: '*', redirect: '/login' },
    	{	path: '/login',name: 'login',component: login	},					//登录页面
			{	path: '/main_page',name: '后台管理',component: MainPage,children:[
				{	path:'/setting',name:'设置',component:Content,children:[
	    		{	path:'/company_info',name:'企业资料',component:CompanyInfo	}    //企业资料
	    	]}
			]},
  ]
})
