/*作者：廖立伟*/
var data = new Vue({
	el : "#sign_up" ,
	data:{
		isShowWords		:	true	,	//是否展示隐藏文字
		isShowIcon		:	true	,	//是否选中复选框
		area_phoneType	:	"0"		,	//手机地区类型
		phoneTypeList	:	[
			{ title : "中国(+86)" , value : "0"},
			{ title : "马来西亚(+60)" , value : "1"},
			{ title : "中国台湾(+886)" , value : "2"},
			{ title : "中国香港(+852)" , value : "3"},
			{ title : "美国(+1)" , value : "4"},
			{ title : "中国澳门(+853)" , value : "5"},
			{ title : "韩国(+82)" , value : "6"},
		],
		papersType		:	"0"		,
		papersList		:	[
			{ title : "身份证" , value : "0"}	,
			{ title : "护照" , value : "1"}	,
		]
	},
	created:function(){
		
	},
	methods:{
		/*是否展示隐藏文字*/
		showWords(){
			var that = this ;
			that.isShowWords =  !that.isShowWords;
		},
		showIcon(){
			var that = this ;
			that.isShowIcon = !that.isShowIcon
		}
	}
})