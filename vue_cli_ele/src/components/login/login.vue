<template>
	<div class="login">
		<!--登录框-->
		<div class="login_box">
			<div class="manage_title">llw管理后台</div>
			<el-form ref="form" :model="form" label-width="110px" label-position="right" :rules="rules">
				<!--账号-->
				<el-row>
					<el-col :span="20">
		  				<el-form-item label="账号" prop="account_number">
		    				<el-input v-model="form.account_number"></el-input>
		  				</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="20">
		  				<el-form-item label="密码" prop="password">
		    				<el-input v-model="form.password"></el-input>
		  				</el-form-item>
					</el-col>
				</el-row>
				<div class="login_btn" @click="login_submit('form')">登录</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default({
		name : "login" ,
		data(){
			return{
				form:{
					account_number 	: 	""   	,  		//账号
					password		:	""		,		//密码
				},
				rules:{
          			account_number	: [
            			{ required: true, message: '请输入登录账号', trigger: 'blur' },
          			],
          			password		: [
            			{ required: true, message: '请输入登录密码', trigger: 'blur' },
          			],
				},
			}
		},
		methods:{
			/*点击登录按钮*/
			login_submit(formName){
				var that = this ;
				that.$refs[formName].validate((valid) => {
          			if (valid) {
            			if(that.form.account_number == "admin" && that.form.password == "123456"){
            				that.$message.success('登录成功');
            			}else{
            				that.$message.error('登录账号或者密码填写错误');
            			}
          			} else {
            			console.log('error submit!!');
            		return false;
         			}
        		});
			}
		}
	})
</script>

<style lang="less">
	html,body,#app{
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>
<style scoped="scoped" lang="less">
	.login{
		height: 100%;
		width:100%;
		background-image: url(../../../static/images/login.jpg);
		background-size: 100% 100%;
		.login_box{
			height: 400px;
			width: 600px;
			background: #fff;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			border-radius: 5px;
			.manage_title{
				height: 30px;
				line-height: 30px;
				text-align: center;
				margin: 60px 0 0;
				font-size: 18px;
			}
			form{
				position: relative;
				top: 33%;
				left: 50%;
				transform: translate(-50%,-50%);
				.login_btn{
					background: #3197fa;
					width: 360px;
					height: 45px;
					line-height: 45px;
					margin: 20px auto;
					color: #fff;
					cursor: pointer;
					border-radius: 3px;
					font-size: 14px;
				}
			}
		}
	}
</style>