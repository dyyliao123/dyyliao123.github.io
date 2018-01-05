<template>
	<div class="productManage">
		<div style="text-align: right;margin-bottom: 30px;">
			<el-row>
				<el-col>
					<el-button type="warning" @click="batchDelet">批量删除</el-button>
				</el-col>
			</el-row>
		</div>
		<el-table
		    ref="multipleTable"
		    :data="tableData3"
		    tooltip-effect="dark"
		    style="width: 100%"
		    @selection-change="handleSelectionChange">
    		<el-table-column
      			type="selection"
     			width="55">
    		</el-table-column>
    		<el-table-column
    			v-for="(item,index) in tableHeader"
    			:key="index"
    			:prop="item.prop"
      			:label="item.title"
      			:width="item.width">
    		</el-table-column>
    		<el-table-column label="商品图片" width="150" align="center"> 
				<template slot-scope="scope"> 
					<img src="../../../static/images/goods.jpg" width="60" height="60"/>
				</template> 
			</el-table-column>
    		<el-table-column align="center" label="操作" width="160" fixed="right">
    			<template slot-scope="scope">
					<el-button type="text" size="small" @click="editor(scope.row.id)">编辑</el-button>
					<el-button type="text" size="small" @click="delet(scope.row.id)">删除</el-button>
				</template>
    		</el-table-column>
  		</el-table>
  		<!--分页-->
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :page-size="10" layout="prev, pager, next, jumper" :total="7"> </el-pagination>
	</div>
</template>

<script>
	export default({
		name : "productManage" ,
		data(){
			return{
				tableHeader:[
					{title : "ID" 		, 	prop:"id" 					, 	width: "80" , 	tooptip:"false"} ,
					{title : "商品信息" 	, 	prop:"product_info" 		, 	width: "" , 	tooptip:"true"} ,
					{title : "访问量" 	, 	prop:"view_num" 			, 	width: "120" , 	tooptip:"false"} ,
					{title : "库存" 		, 	prop:"total_num" 			, 	width: "120" , 	tooptip:"false"} ,
					{title : "总销量" 	, 	prop:"all_buy" 				, 	width: "120" , 	tooptip:"false"} ,
					{title : "商品分类" 	, 	prop:"goods_type" 			, 	width: "120" , 	tooptip:"false"} ,
					{title : "状态" 		, 	prop:"statue" 				, 	width: "120" , 	tooptip:"false"} ,
				],
				tableData3: [
					{id:"1",product_info:"农家蜜蜂园 "	,view_num: '10',total_num: '1000',	all_buy: '99',goods_type:"干果炒货",statue:"上架"},
					{id:"2",product_info:"农家纯手工叶菜"			,view_num: '20',total_num: '2000',	all_buy: '20',goods_type:"干果炒货",statue:"上架"}, 
					{id:"3",product_info:"农家猪血豆腐粑豆腐干制品"		,view_num: '30',total_num: '1000',	all_buy: '30',goods_type:"干果炒货",statue:"上架"},
					{id:"4",product_info:"农家手工自制即食地瓜干红薯"		,view_num: '40',total_num: '3000',	all_buy: '40',goods_type:"干果炒货",statue:"上架"},
					{id:"5",product_info:"2017春浆天然新鲜蜂王浆"	,view_num: '50',total_num: '999',	all_buy: '199',goods_type:"干果炒货",statue:"上架"},
					{id:"6",product_info:"2017年特级英山红茶"		,view_num: '60',total_num: '1999',	all_buy: '299',goods_type:"干果炒货",statue:"上架"},
					{id:"7",product_info:"2017新茶叶英山毛尖"		,view_num: '70',total_num: '5000',	all_buy: '3999',goods_type:"干果炒货",statue:"上架"},
				],
        		multipleSelection: []		,	//被选中的项
			}
		},
		methods:{
			//全选
      		handleSelectionChange(val) {
        		this.multipleSelection = val;
      		},
      		//编辑
      		editor(index){
      			console.log(index)
      		},
      		//单个删除
      		delet(index){
      			let that = this ;
      			console.log(index)
      			that.$confirm('确定删除吗？', '提示', {
					type: 'warning'
				}).then(() => {
      				that.$message.success('删除成功');
				}).catch(()=>{})
      		},
      		//批量删除
      		batchDelet(){
      			let that = this ;
      			if(that.multipleSelection.length > 0){
      				that.$confirm('批量删除所选？', '提示', {
						type: 'warning'
					}).then(() => {
						let ids = [] ;
		      			for(var i = 0 ; i < that.multipleSelection.length ; i++){
		      				ids.push(that.multipleSelection[i].id)
		      			}
	      				console.log(ids.join(","))
	      				that.$message.success('删除成功');
					}).catch(()=>{})
      			}else{
      				that.$message.error('请选择删除项');
      			}
      		},
      		//点击分页
      		handleSizeChange(val) {
				var that = this ;
      		},
      		//点击分页前进按钮
      		handleCurrentChange(val) {
      			var that = this ;
      		}
		}
	})
</script>
<style>
	.productManage .el-table th{
		text-align: center!important;
	}
</style>
<style scoped="scoped" lang="less">
	.productManage{
		padding: 30px;
	}

</style>