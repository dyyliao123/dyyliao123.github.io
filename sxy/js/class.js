/*作者：廖立伟*/
var data = new Vue({
	el : "#class" ,
	data:{
		footer_list : [
			{icon:"../static/image/index@2x.png",normal_icon:"../static/image/index_normal@2x.png",title:"首页",href:"index",normal_color:"#333",selected_color:"#FE5722"},
			{icon:"../static/image/company_select@2x.png",normal_icon:"../static/image/company_nomal@2x.png",title:"课程",href:"class",normal_color:"#333",selected_color:"#FE5722"},
			{icon:"../static/image/product@2x.png",normal_icon:"../static/image/product_normal@2x.png",title:"会搜商城",href:"hsshop",normal_color:"#333",selected_color:"#FE5722"},
			{icon:"../static/image/car_select@2x.png",normal_icon:"../static/image/car_normal@2x.png",title:"消息",href:"message",normal_color:"#333",selected_color:"#FE5722"},
			{icon:"../static/image/mine@2x.png",normal_icon:"../static/image/mine_normal@2x.png",title:"我的",href:"mine",normal_color:"#333",selected_color:"#FE5722"},
		],
		navIndex : "0"
	},
	created:function(){
		var that = this ;
		that.navIndex = GetQueryString("navIndex")
	},
	methods:{
		
	}
})
