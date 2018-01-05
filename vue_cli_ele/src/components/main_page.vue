<template>
	<div class="main_page">
		<!--顶部-->
		<div class="main_header flex_star">
			<img src="../../static/images/data_image_png;base….png" alt="" width="149"/>
			<div class="flex_between">
				<span>后台管理平台</span>
				<el-dropdown trigger="click" style="text-align: right;">
					<span class="el-dropdown-link" style="cursor: pointer;">
				        admin<i class="el-icon-arrow-down el-icon--right"></i>
				    </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="exit">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="flex_star slide_middle">
			<!--左侧栏-->
			<div class="slide">
				<el-row class="tac">
		  			<el-col :span="24">
		    			<el-menu
		      				:default-active="nav_active"
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
					<!--面包屑-->
					<bread_crumb></bread_crumb>
					<!--<bread_crumb :bread_data="bread_data"></bread_crumb>-->
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
	
	import bread_crumb from './breadCrumb.vue'
	export default({
		name : "main_page" ,
		data(){
			return{
				nav_active:"index",
				leftSlide_data:[
					{
						header_title : "首页",
						icon : shouye,
						childer:[
							{name : "概况",link:'index'},
						]
					},
					{
						header_title : "产品",
						icon : chanpin,
						childer:[
							{name : "产品管理",link:'product_manage'},
						]
					},
					{
						header_title : "设置",
						icon : setting,
						childer:[
							{name : "企业资料",link:'company_info'},
						]
					},
				],
//				bread_data : ""   ,  //路由自定义名字
			}
		},
		created(){
			var that = this ;
			that.nav_active = that.$route.matched[that.$route.matched.length-1].path.slice(1);
		},
		components:{ bread_crumb },
		methods:{
			//退出
			exit() {
				let that = this;
				this.$confirm('确定退出?', '提示', {
					type: 'warning'
				}).then(() => {
					that.$router.push({path:"/login"})
				}).catch(() => {});
			},
			handleOpen(key, keyPath) {
        		console.log(key, keyPath);
      		},
      		handleClose(key, keyPath) {
        		console.log(key, keyPath);
      		}
		},
//		watch:{'$route' (to,from){
//				console.log(to,from)
//			}
//		}
	})
</script>

<style>
	body,html,#app{
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	.main_page .el-submenu .el-menu-item{
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
	.el-breadcrumb{
		margin: 30px 0 20px 20px;
	}
	.popper__arrow{
		left: 26px!important;
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
					display: inline-block;
					width: 150px;
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