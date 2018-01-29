var data = {
   	message: '查看全文',
   	all_text: false,//查看全文控制
}
Vue.component('all-text',{//查看全文组件
	props: ['content'],
	template:  '<div><span class="fn_14 co_000 conmmon_text" :class="{content_text:content.length>150&&!all_text}">{{content}}</span>'
			+'<p class="co_fe5 fn_14" v-if="content.length>150" @click="all_text=!all_text,message==\'查看全文\'?message=\'收起\':message=\'查看全文\'">{{message}}</p></div>',
	data: function(){
	return {//返回data  使他们不共同一个data
		message: '查看全文',
   			all_text: false
   		}
   	}
});
Vue.component('footer-home',{//主页footer组件
	props: ['_index', 'list'],
	template: '<div class="weui-tabbar" style="position: fixed;">'
            	+'<a href="##" class="weui-tabbar__item" v-for="(item, index) in list" :data-id="index" @click="navHref(item.href, index)">'
	                +'<div class="weui-tabbar__icon">'
	                  +'<img :src="index==_index?item.icon_selected:item.icon_normal">'
	                +'</div>'
	                +'<p class="weui-tabbar__label" :style="{color:index==_index?item.title_color_selected:item.title_color_normal}">{{item.title}}</p>'
            	+'</a>'
        	+'</div>',
    methods: {
    	navHref: function(href, index){
    		console.log(href, index)
 			//return false
			//navIndex是页面的底部的样式标识,据此显示相应的选中的样式
    		if (href=="home") {
    			location.href = "?g=web&m=index&navIndex="+index
    		}else if(href=="news_list"){
    			location.href = "?g=Web&m=index&a=index_news&navIndex="+index
    		}else if(href=="product_list"){
    			location.href = "?g=web&m=product&navIndex="+index
    		}else if(href=="category_list"){
    			location.href = "?g=Web&m=product&a=product_second_sort&navIndex="+index
    		}else if(href=="company_list"){
    			location.href = "?g=Web&m=company&navIndex="+index
    		}else if(href=="cart"){
    			location.href = "?g=Web&m=Member&a=shoping_car&navIndex="+index
    		}else if(href=="circle_list"){
    			location.href = "?g=web&m=circle&navIndex="+index
    		}else if(href=="need_list"){
    			location.href = "?g=Web&m=member&navIndex="+index
    		}else if(href=="mine"){
    			location.href = "?g=Web&m=member&appsign=0&navIndex="+index
    		}
    	}
    }
});
Vue.component('footer-comment',{//底部评论组件
	props: ['placeholder','value','send','login'],
	template:   '<footer>'
            	+'<input class="com_input" type="text" :value="value" @input="updataValue($event.target.value)" name="com_input" :placeholder="placeholder" @click="login">'
            	+'<button class="send" @click="send">发送</button>'
        		+'</footer>',
   	methods: {
   		updataValue: function(value){//实现子组件改变props
   			this.$emit('input',value);
   		}
   	}
});
Vue.component('header-com',{//普通头部组件
	props: ['header_title', 'right', 'tik', 'right_txt'],
	template: '<header class="header_com" v-cloak>'
        		+'<a class="header_left" href="javascript:history.back(-1)">'
            	+'<div class="dt">'
                +'<div></div>'
            	+'</div>'
        		+'</a>'
        		+'<p class="header_title">{{header_title}}</p>'
        		+'<p class="header_right" :class="right? \'icon\' : \'\'" @click.stop="tik">{{right_txt}}</p>'
    		+'</header>',
});
Vue.component('header-comtwo',{//右侧两个图表头部组件
	props: ['header_title', 'icon_1', 'tik_1', 'tik_2'],
	template:'<header class="header_com" v-cloak>'
        		+'<a class="header_left" href="javascript:history.back(-1)">'
            	+'<div class="dt">'
                +'<div></div>'
            	+'</div>'
        		+'</a>'
        		+'<p class="header_title">{{header_title}}</p>'
        		+'<p class="header_right">'
        			+'<span :class="icon_1" @click.stop="tik_1"></span>'      			
        			+'<span class="icon_2" @click.stop="tik_2"></span>'
        		+'</p>'
    		+'</header>',
});

//提示信息
Vue.component('hint-msg', {  
	props: ['hint_content', 'show_hint'],
	template: '<div class="hint fixed" :class="show_hint? \'hide\': \'\'">{{hint_content}}</div>'
});

//带有确定,取消的模态框
Vue.component('poroduct-modal', {
	props: ['modal_title', 'cancle', 'sure'],
	template: '<div><div class="div_board" @click="cancle"></div>'
				+'<div class="delDiv">'
					+'<div class="text_del">{{modal_title}}</div>'
					+'<div class="btns">'
						+'<div class="cancle" @click="cancle">取消</div>'
						+'<div class="sure" @click="sure">确定</div>'
					+'</div>'
				+'</div>'
			+'</div>'
})

//列表弹框
Vue.component("list_modal",{
	props: ['title','listmodal_show','list_data','list_index','hidelist_modal','make_sure', 'icon_select','choose'],
	template:'<div>'
			+'<div class="list_modal" v-if="listmodal_show">'
				+'<div class="board" @click="hidelist_modal"></div>'
				+'<div class="modalDiv fixed">'
					+'<h3>{{title}}</h3>'
					+'<div class="listModal_list">'
						+'<div class="listModal_item flex_between" v-if="item.group_id!=0" v-for="(item,index) in list_data">'
							+'{{item.title || item}}'
							+'<img :src="list_index==index ? icon_select.select:icon_select.noselect" width="20" height="20" @click="choose(index)" />'
						+'</div>'
					+'</div>'
					+'<div class="modalDiv_fun flex_around">'
						+'<span @click="hidelist_modal">取消</span>'
						+'<span @click="make_sure">确定</span>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>',
});
//填写备注,原因的textarea的modal
Vue.component("note_modal",{
	props: ['note_show', 'title', 'value', 'hide_note', 'note_sure', 'placeholder'],
	template:'<div class="closeNote" v-if="note_show">'
			+'<div class="board" @click="hide_note"></div>'
			+'<div class="modalDiv note_div fixed">'
				+'<h3>{{title}}</h3>'
				+'<textarea :placeholder="placeholder" :value="value" @input="changeVal($event.target.value)"></textarea>'
				+'<div class="modalDiv_fun closeOrder_fun flex_around">'
					+'<span @click="hide_note">取消</span>'
					+'<span @click="note_sure">确定</span>'
				+'</div>'
			+'</div>'
		+'</div>',
	methods: {
	    changeVal: function(value){  //实现子组件改变props
   			this.$emit('input', value);
   			console.log(value)
   		}
  	},
})

//上拉弹框
//Vue.component('upList', {
//	props: ['titleTxt', 'list'],
//	template: '<div class="freight">/
//				<div class="freight_board"></div>/
//				<div class="freight_list">/
//					<div class="freight_title">{{titleTxt}}</div>/
//					<ul>/
//						<li class="flex_between" v-for="item in list">/
//							<span>{{item}}</span>/
//							<img src="./Public/web/images/car_circle_nomal@2x.png" width="15" height="15"/>/
//						</li>/
//					</ul>/
//					<div class="sureBtn">确定</div>/
//				</div>/
//			</div>'
//})

//客服div部分
Vue.component('service', {
	props: ['show_kefu', 'system'],
	template: '<div class="kefu fixed" :class="show_kefu? \'hide\': \'\'">'
					+'<p @click="javascript:location.href=\'?g=Web&m=index&a=index_message\'">'
						+'<img src="./Public/web/images/lianximaijia@2x.png"/>消息'
					+'</p>'
					+'<p @click="javascript:location.href=\'?g=Web&m=index\'">'
						+'<img src="./Public/web/images/shouye@2x.png"/>首页'
					+'</p>'
					+'<p @click="system">'
						+'<img src="./Public/web/images/kefu@2x.png"/>系统客服'
					+'</p>'
				+'</div>'
})

//更多 功能div
Vue.component('more', {
	props: ['more', 'type', 'id', 'title','sub_title'],
	template:'<div class="weui-panel__ft index_more" @click="more(type, id, title)">'
                +'<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">'
	                +'<div class="weui-cell__bd">'
	                  	+'<span class="line">|</span>{{title}}'
	                  	+'<span class="more">{{sub_title}}</span>'
	                +'</div>'
                  	+'<span class="weui-cell__ft"></span>'
                +'</a>'
            +'</div>'
})

//分享弹框
Vue.component('share-div', {
	props: ['show_share', 'hide_share', 'to_circle', 'copy_link', 'hide_circle'],
	template:'<div>'
			+'<div class="board" v-if="show_share" @click="hide_share"></div>'
			+'<div class="show_share" v-if="show_share">'
				+'<h3>分享到</h3>'
				+'<div class="flex_center">'
					+'<div v-if="hide_circle" class="hangyequan" @click="to_circle">'
						+'<img src="./Public/web/images/hyq2x.png" height="50"/>'
						+'<p style="width:60px">行业圈</p>'
					+'</div>'
					+'<div class="copy_link" @click="copy_link">'
						+'<img src="./Public/web/images/fuzhilianjie@2x.png" height="50"/>'
						+'<p style="width:60px">复制连接</p>'
					+'</div>'
				+'</div>'
				+'<span @click="hide_share">取消</span>'
			+'</div>'
		+'</div>'
});



