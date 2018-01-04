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
			<div>
				<span>常用功能</span>
			</div>
			<div class="common_info" v-for="item in common_list">
				<img :src="item.icon" alt="" />
				<span>{{item.name}}</span>
			</div>
		</div>
		<!--营销应用-->
		<div class="application">
			<div>
				<span>营销应用</span>
				<span>营销中心</span>
			</div>
			<div>
				<ul>
					<li v-for="item in application_list" :style="{background: item.bgColor}">
						<p>{{item.big_title}}</p>
						<p>{{item.small_title}}</p>
					</li>
				</ul>
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
					{name:"查看订单",icon:"../static/images/gn02@2x.png"},
					{name:"添加资讯",icon:"../static/images/gn03@2x.png"},
					{name:"添加企业",icon:"../static/images/gn04@2x.png"},
					{name:"代发货订单",icon:"../static/images/gn010@2x.png"},
					{name:"添加站内信",icon:"../static/images/gn06@2x.png"},
					{name:"添加广告",icon:"../static/images/gn07@2x.png"},
					{name:"添加管理员",icon:"../static/images/gn08@2x.png"},
					{name:"运费设置",icon:"../static/images/gn09@2x.png"},
					{name:"系统设置",icon:"../static/images/gn05@2x.png"},
				],
				application_list:[
					{big_title:"广告管理" , small_title:"增加曝光率促成交易" ,bgColor:"#ff6a75"},
					{big_title:"优惠券" , small_title:"快速成交增加用户粘性" ,bgColor:"#65ca4a"},
					{big_title:"分销" , small_title:"集群裂变式营销" ,bgColor:"#fe974a"},
					{big_title:"限时抢购" , small_title:"饥饿营销提高销售额" ,bgColor:"#879bfe"},
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
						display: inline-block;
						height: 60px;
						width: 100%;
						line-height: 80px;
					}
					div{
						font-size: 14px;
						height: 60px;
						width: 100%;
						line-height: 50px;
					}
					display: inline-block;
					width: 33.3%;
					height: 120px;
					text-align: center;
				}
			}
		}
		.common_fun{
			margin-top: 40px;
			text-align: left;
			div:nth-child(1){
				text-align:left;
				margin-bottom:40px;
				span{
					font-size: 13px;
					font-weight: 600;
				}
			}
			.common_info{
				display: inline-block;
				margin: 3px;
				width: calc(~"20% - 6px");
				height: 60px;
				line-height: 60px;
				background: #f5f5f5;
				cursor: pointer;
				img{
					position: relative;
					top: 5px;
					margin-right: 5px;
					margin-left: 10%;
				}
				span{
					display: inline-block;
					width: 70%;
					text-align: left;
					font-size: 14px;
				}
			}
			.common_info:hover{
				background: #f1f1f1;
			}
		}
		.application{
			margin-top: 40px;
			text-align: left;
			div:nth-child(1){
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
			div:nth-child(2){
				ul{
					list-style: none;
					padding: 0;
					margin-top: 40px;
					li{
						margin: 0 3px;
						padding: 15px 0;
						display: inline-block;
						width: calc(~"25% - 6px");
						cursor: pointer;
						border-radius: 5px;
						p{
							text-align: center;
							color: #f5f5f5;
						}
						p:nth-child(1){
							font-size: 17px;
						}
						p:nth-child(2){
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>