<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex_star{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.flex_between{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.flex_around{
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.flex_end{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
/*分页样式重写*/
	.el-pagination{margin: 20px 0; text-align: right; margin-right: 100px;}
	.el-pagination .el-pager .active{background: linear-gradient(to right, #23F9A2 , #00DEFD); color: white; border-radius: 3px;}
</style>
