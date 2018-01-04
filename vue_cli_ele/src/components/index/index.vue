<template>
	<div class="Index">
		<!--数据概览-->
		<div class="data_list">
			<div>
				<span>数据概览</span>
				<span>数据中心</span>
			</div>
			<div class="traffic">
				<div class="traffic_item" v-for="item in data_list">
					<strong>{{item.number}}</strong>
					<div>{{item.title}}</div>
				</div>
			</div>
		</div>
		<!--常用功能-->
		<div class="common_fun">
			<div class="common_info flex_around" v-for="item in common_list">
				<img :src="item.icon" alt="" />
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name : "Index" ,
		data(){
			return{
				data_list:[
					{title:"昨日访问量" , number:"20"},
					{title:"昨日成单量" , number:"2"},
					{title:"昨日交易额" , number:"50.00"},
				],
				common_list:[
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
					{name:"添加商品",icon:"../static/images/gn01@2x.png"},
				]
			}
		},
		methods:{
		}
	})
</script>

<style scoped="scoped" lang="less">
	.Index{
		padding: 50px 60px 0 60px;
		.data_list{
			text-align: left;
			div{
				span{
					font-size: 13px;
				}
				span:nth-child(1){
					font-weight: 600;
				
				}
				span:nth-child(2){
					color: #3197fa;
					margin-left: 30px;
					cursor: pointer;
				}
			}
			.traffic{
				margin-top: 40px;
				background: #f5f5f5;
				.traffic_item{
					strong{
						color: #3197fa;
					}
					div{
						font-size: 14px;
					}
					display: inline-block;
					width: 33.3%;
					height: 120px;
					text-align: center;
					line-height: 60px;
				}
			}
		}
		.common_fun{
			.common_info{
				display: inline-block;
				width: 25%;
				height: 40px;
				line-height: 40px;
			}
		}
	}
</style>