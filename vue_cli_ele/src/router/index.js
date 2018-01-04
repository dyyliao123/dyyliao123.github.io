import Vue from 'vue'
import Router from 'vue-router'
/*主体共用页面*/
import MainPage from '@/components/main_page'
import login from '@/components/login/login'
import Content from '@/components/content'

/*首页*/
import Index from '@/components/index/index'
/*产品*/
import productManage from '@/components/product/product_manage'
/*订单*/
import orderList from '@/components/order/order_list'
/*访问量*/
import pageView from '@/components/data/page_view'
/*我的钱款*/
import myMoney from '@/components/money/my_money'
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
	    	]},
	    	{	path:'/index',name:'首页',component:Content,children:[
	    		{	path:'/index',name:'概况',component:Index	}    //首页概况
	    	]},
	    	{	path:'/product',name:'产品',component:Content,children:[
	    		{	path:'/product_manage',name:'产品管理',component:productManage	}    //产品管理
	    	]},
	    	{	path:'/order',name:'订单',component:Content,children:[
	    		{	path:'/order_list',name:'订单列表',component:orderList	}    //订单列表
	    	]},
	    	{	path:'/data',name:'数据',component:Content,children:[
	    		{	path:'/page_view',name:'访问量',component:pageView	}    //访问量
	    	]},
	    	{	path:'/money',name:'资产',component:Content,children:[
	    		{	path:'/my_money',name:'我的钱款',component:myMoney	}    //我的钱款
	    	]},
			]},
  ]
})
