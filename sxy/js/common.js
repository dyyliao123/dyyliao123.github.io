/*footer组件*/
Vue.component('footer_home',{
	props:['footer_list','_index'],
	template:'<div class="weui-tabbar">'
			    +'<a href="##" class="weui-tabbar__item weui-bar__item--on" v-for="(item,index) in footer_list" @click="link_href(item.href,index)">'
			      	+'<div class="weui-tabbar__icon">'
			        	+'<img :src="index == _index ? item.icon : item.normal_icon" alt="">'
			      	+'</div>'
			      	+'<p class="weui-tabbar__label" :style="{color:index==_index?item.selected_color:item.normal_color}">{{item.title}}</p>'
			    +'</a>'
			+'</div>',
	methods:{
		link_href:function(href,index){
			if(href=="index"){
				location.href="./index.html?navIndex=" + index
			}else if(href=="class"){
				location.href="./class.html?navIndex=" + index
			}else if(href=="hsshop"){
				location.href="./hsshop.html?navIndex=" + index
			}else if(href=="message"){
				location.href="./message.html?navIndex=" + index
			}else if(href=="mine"){
				location.href="./mine.html?navIndex=" + index
			}
		}
	}
	
})
//获取url头部想要的参数
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}