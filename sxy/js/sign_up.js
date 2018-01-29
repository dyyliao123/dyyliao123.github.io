/*作者：廖立伟*/
var data = new Vue({
	el : "#sign_up" ,
	data:{
		isShowWords		:	true	,	//是否展示隐藏文字
		isShowIcon		:	true	,	//是否选中复选框
		area_phoneType	:	"0"		,	//手机地区类型
		course_money	:	"3800"	,	//课程报名费用
		all_price		:	"3800"	,	//课程报名费用
		time_title		:	60		,	//固定时间
		count			: 	''		,	//展示时间
        timer			: 	null	,	//定时器
		isShow_timeTitle:	false	,	//是否展示时间标题
		phone_num		:	""		,	//手机号
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
		],
		books			:	[[
			{data_type : "name" , name : "廖立伟" },
			{data_type : "papers" , name : "0" },
			{data_type : "papers_num" , name : "3610241099507161813" },
			{data_type : "area" , name : "0" },
			{data_type : "phone" , name : "13170945968" },
		]]	,
		dataList		:	[
			{data_type : "name" , name : "" },
			{data_type : "papers" , name : "0" },
			{data_type : "papers_num" , name : "" },
			{data_type : "area" , name : "0" },
			{data_type : "phone" , name : "" },
		],
	},
	created:function(){
		
	},
	methods:{
		/*是否展示隐藏文字*/
		showWords(){
			var that = this ;
			that.isShowWords =  !that.isShowWords;
		},
		/*展示复选框*/
		showIcon(){
			var that = this ;
			that.isShowIcon = !that.isShowIcon
		},
		/*增加一个form模块*/
		add_form(){
			var that = this ;
			that.books.push(that.dataList)
			console.log(that.books)
			that.all_price = that.course_money*(that.books.length)
		},
		/*点击删除去掉点击的当前模块*/
		delete1(indexs){
			var that = this ;
			that.books.splice(indexs,1);
			console.log(that.books)
			that.all_price = that.course_money*(that.books.length)
		},
		//发送验证码
		sendCode(){
			var that = this ;
			if(that.phone_num){
				if (!this.timer) {
	                that.count = that.time_title;
	                that.isShow_timeTitle = true ;
	                that.timer = setInterval(function(){
	                	if (that.count > 0 && that.count <= that.time_title) {
	                    	that.count--;
	                  	} else {
	                    	that.isShow_timeTitle = false ;
	                    	clearInterval(that.timer);
	                    	that.timer = null;
	                  	}
	                },1000)
            	}
			}else{
				$.toast("请输入手机号码", "text")
			}
		},
		//点击提交
		git_commit(){
			var that = this ;
			console.log(that.books)
		}
	}
})