<template>
	<div class="main_page">
		<div class="main_header flex_star">
			<img src="../../static/images/data_image_png;base….png" alt="" width="149"/>
			<div class="flex_between">
				<span>后台管理平台</span>
				<span>admin</span>
			</div>
		</div>
		<div class="flex_star slide_middle">
			<div class="slide">
				<el-row class="tac">
		  			<el-col :span="24">
		    			<el-menu
		      				default-active="2"
		      				class="el-menu-vertical-demo"
		      				@open="handleOpen"
		     				@close="handleClose"
		     				background-color="#343D4E"
	      					text-color="#fff"
	      					active-text-color="#3197fa"
	      					:unique-opened="true"
	      					:router="true">
		     				<div v-for="(item,index) in leftSlide_data" :key="item.header_title">
					      		<el-submenu :index="item.header_title">
							        <template slot="title">
							          	<img :src="item.icon" alt="" width="18" class="img_icon"/>
			    						<span slot="title">{{item.header_title}}</span>
							        </template>
			      					<el-menu-item v-for="(item,index) in item.childer" :key="item.name" :index="item.link">{{item.name}}</el-menu-item>
			  					</el-submenu>
		     				</div>
		    			</el-menu>
		  			</el-col>
		  		</el-row>
			</div>
			<!--主体部分-->
			<div class="main_content">
				<div class="content_page">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import shouye from '../../static/images/01@2x.png'
	import chanpin from '../../static/images/03@2x.png'
	import order from '../../static/images/05@2x.png'
	import shuju from '../../static/images/13@2x.png'
	import zichan from '../../static/images/15@2x.png'
	import setting from '../../static/images/18@2x.png'
	export default({
		name : "main_page" ,
		data(){
			return{
				leftSlide_data:[
					{
						header_title : "首页",
						icon : shouye,
						childer:[
							{name : "概况",link:'index1'},
						]
					},
					{
						header_title : "产品",
						icon : chanpin,
						childer:[
							{name : "产品管理",link:'index2'},
							{name : "进货管理",link:'index3'},
							{name : "多规格属性",link:'index4'},
						]
					},
					{
						header_title : "订单",
						icon : order,
						childer:[
							{name : "订单列表",link:'index5'},
							{name : "我的订单",link:'index6'},
						]
					},
					{
						header_title : "数据",
						icon : shuju,
						childer:[
							{name : "数据概况",link:'index7'},
							{name : "访问量",link:'index8'},
							{name : "成交金额",link:'index9'},
							{name : "加入购物车",link:'index10'},
							{name : "收藏",link:'index11'},
						]
					},
					{
						header_title : "资产",
						icon : zichan,
						childer:[
							{name : "我的钱款",link:'index12'},
							{name : "钱款提现",link:'index13'},
							{name : "交易账户",link:'index14'},
						]
					},
					{
						header_title : "设置",
						icon : setting,
						childer:[
							{name : "运费模板",link:'index15'},
							{name : "企业资料",link:'company_info'},
						]
					},
				]
			}
		},
		methods:{
			handleOpen(key, keyPath) {
        		console.log(key, keyPath);
      		},
      		handleClose(key, keyPath) {
        		console.log(key, keyPath);
      		}
		}
	})
</script>

<style>
	body,html,#app{
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	.el-submenu .el-menu-item{
		min-width: 110px;
		padding: 0;
		padding-left: 20px!important;
		background: #343D4E;
	}
	.el-submenu__title{
		text-align: left;
	}
	.el-menu{
		border-right: solid 1px #343D4E;
	}
</style>
<style scoped="scoped" lang="less">
	.main_page{
		height: 100%;
		background: #343D4E;
		.main_header{
			height: 54px;
			div{
				width: 100%;
				span{
					font-size: 16px;
					color: #fff;
					padding: 0 30px;
				}
			}
		}
		.slide_middle{
			height:calc(~"100% - 54px");
			.slide{
				width: 150px;
				height:100%;
				.img_icon{
					margin-right: 7px;
				}
			}
			.main_content{
				height:100%;
				width:calc(~"100% - 149px");
				background: #f5f5f5;
				.content_page{
					min-height:calc(~"100% - 20px") ;
					max-height: calc(~"100% - 20px");
					width: calc(~"100% - 20px");
					overflow: auto;
					margin: 10px;
					background: #fff;
				}
			}
		}
	}
</style>