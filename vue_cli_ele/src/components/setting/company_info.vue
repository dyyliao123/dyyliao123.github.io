<template>
	<div class="company_info">
		<el-form label-position="right" label-width="120px" :model="formCompany" :rules="rules" ref="formCompany">
			<el-row>
				<el-col :span="8">
		  			<el-form-item label="企业名称" prop="company_name">
		    			<el-input v-model="formCompany.company_name"></el-input>
		  			</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
		  			<el-form-item label="主营行业" prop="company_job">
		    			<el-input v-model="formCompany.company_job"></el-input>
		  			</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
		  			<el-form-item label="企业分类" prop="company_type">
		    			<el-input v-model="formCompany.company_type"></el-input>
		  			</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
		  			<el-form-item label="企业图片">
		    			<el-upload
  							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:on-success="handleAvatarSuccess"
							:before-upload="beforeAvatarUpload">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
		  			</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
		  			<el-form-item label="企业简介" prop="company_intro">
		    			<el-input type="textarea" :rows="10" v-model="formCompany.company_intro"></el-input>
		  			</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="5">
					<el-button type="primary" @click="successBtn('formCompany')">完成</el-button>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
	export default({
		name : "company_info" ,
		data(){
			return{
        		formCompany: {
		          	company_name	: 	''	,
		          	company_job		: 	''	,
		          	company_intro	: 	''	,
		          	company_type	:	''
		        },
		        rules: {
          			company_name: [
            			{ required: true, message: '请输入企业名称', trigger: 'blur' },
          			],
          			company_job: [
            			{ required: true, message: '请输入企业主营行业', trigger: 'blur' },
          			],
          			company_type: [
            			{ required: true, message: '请输入企业分类', trigger: 'blur' },
          			],
          			company_intro: [
            			{ required: true, message: '请输入企业简介', trigger: 'blur' },
          			],
          		},
		        imageUrl : ''
			}
		},
		methods:{
			handleAvatarSuccess(res, file) {
        		this.imageUrl = URL.createObjectURL(file.raw);
      		},
      		beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg' || 'image/png';
		        const isLt2M = file.size / 1024 / 1024 < 2;
		
		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		    successBtn(formName){
		    	this.$refs[formName].validate((valid) => {
          			if (valid) {
            			alert('submit!');
          			} else {
            			console.log('error submit!!');
            			return false;
          			}
        		});
		    }
		}
	})
</script>
<style>
  .company_info .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .company_info .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .company_info .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .company_info .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .company_info .avatar-uploader{
  	width: 180px;
  }
  .el-textarea__inner{
  	resize: none!important;
  }
</style>
<style scoped="scoped" lang="less">
	.company_info{
		form{
			padding: 60px 0px 0px 60px;
		}
	}
</style>