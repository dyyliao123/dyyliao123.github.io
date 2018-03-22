<template>
	<div class="map_container" id="demo_map">
		 <input type="text" />
	</div>
</template>

<script>
	import AMap from 'AMap'
	console.log(AMap)
	export default({
		data(){
			return{
				
			}
		},
		mounted(){
			var that = this ;
			that.loadmap()
		},
		methods:{
			loadmap(){
		        var map = new AMap.Map('demo_map', {
		          	zoom: 15,
      				center: [120.266434, 30.307917],
      				 resizeEnable: true
		        });
		        var marker = new AMap.Marker({
		    		position: [116.480983, 39.989628],//marker所在的位置
		    		map:map//创建时直接赋予map属性
				});
				//输入提示
			    var autoOptions = {
			        input: "tipinput"
			    };
			    var auto = new AMap.Autocomplete(autoOptions);
			    var placeSearch = new AMap.PlaceSearch({
			        map: map
			    });  //构造地点查询类
			    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
			    function select(e) {
			        placeSearch.setCity(e.poi.adcode);
			        placeSearch.search(e.poi.name);  //关键字查询查询
			    }
		        /*AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
		          	map.addControl(new AMap.ToolBar())
		          	map.addControl(new AMap.Scale())
		        })*/
	      	}
		}
	})
</script>

<style>
.map_container {
    height: 500px;
    width:900px;
}
</style>