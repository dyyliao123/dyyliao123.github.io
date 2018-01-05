<template>
	<div class="add_group">
		<el-tree
  			:data="data2"
  			show-checkbox
  			node-key="id"
  			:props="defaultProps">
		</el-tree>
	</div>
</template>

<script>
	export default({
		name : "add_group" ,
		data(){
			return{
				data2 : [] ,
				defaultProps: {
          			children: 'sub',
          			label: 'title'
       			}
			}
		},
		created(){
			var that = this ;
			that.$axios.get(process.env.BASE_URL+"/miniprogram/background/jurisdictionCreate",{
				params:{ token : "ddfe859a454bdce527cf0184c8d8b45c"}
			}).then((res)=>{
				console.log(res)
				that.data2 = res.data.list.group
			})
		},
		methods:{
			
		}
	})
</script>

<style>
</style>