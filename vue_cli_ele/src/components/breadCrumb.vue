<template>
	<div class="breadCrumb">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  	<el-breadcrumb-item v-for="item in $route.matched" :key="item.name">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default({
		name : "breadCrumb" ,
//		props : ['bread_data'],
		data(){
			return{
				
			}
		},
		created(){
			console.log(this.$route)
			console.log(this.$route.matched.length)
		},
		methods:{
			
		}
	})
</script>

<style>
</style>