/*作者：廖立伟*/
var data = new Vue({
	el : ".problem_feedback" ,
	data:{
		problem_desc	:	""	,	//问题描述
		words_num		:	0	,	//文字字数
		link_way		:	""	,	//联系方式
	},
	created(){
		
	},
	methods:{
		//监听文字字数
		descInput(){
			var that = this ;
			var txtVal = that.problem_desc.length;  
            that.words_num = txtVal;
		},
		/*提交*/
		git_commit(){
			var that = this ;
			console.log(that.problem_desc , that.link_way)
		}
	}
})