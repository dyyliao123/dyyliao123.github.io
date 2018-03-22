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
					<el-form-item label="添加时间" prop="time_val">
						<div class="block" style="text-align: left;">
						    <el-date-picker
						      v-model="formCompany.time_val"
						      type="datetime"
						      placeholder="选择日期时间">
						    </el-date-picker>
  						</div>
					</el-form-item>
				</el-col>
			</el-row>
			<!--公司地址-->
			<el-row>
				<el-col :span="8">
					<el-form-item label="公司地址" prop="selectedOptions">
						<div class="block">
					  		<el-cascader
					    		:options="options"
					    		v-model="formCompany.selectedOptions"
					    		:props="props"
					    		@change="handleChange">
					  		</el-cascader>
						</div>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
		  			<el-form-item label="企业图片" prop="imageUrl">
		    			<el-upload
  							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:on-success="handleAvatarSuccess"
							:before-upload="beforeAvatarUpload">
							<img v-if="formCompany.imageUrl" :src="formCompany.imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
		  			</el-form-item>
				</el-col>
			</el-row>
			<!--富文本-->
			<el-row>
				<el-col :span="8" class="flex_star">
		  			<el-form-item label="企业介绍">
					</el-form-item>
					<UE_editor :defaultMsg='formCompany.content' :config="config" ref="ue"></UE_editor>
				</el-col>
			</el-row>
			<!--企业地图-->
			<el-row style="margin: 15px 0;">
				<el-col :span="12" class="flex_star">
		  			<el-form-item label="企业地图">
					</el-form-item>
					<MAPs></MAPs>
				</el-col>
			</el-row>
			<el-row class="complete_btn">
				<el-col :span="5">
					<el-button type="primary" @click="successBtn('formCompany')">完成</el-button>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
	import UE_editor from '@/components/editor.vue';
	import MAPs from '@/components/map.vue';
	export default({
		name : "company_info" ,
		data(){
			return{
        		formCompany: {
		          	company_name	: 	''	,
		          	company_job		: 	''	,
		          	company_type	:	''	,
		          	content			:   ''	,
		          	imageUrl 		: 	''	,
		          	time_val		: 	''	,
		        	selectedOptions : 	[]	,		//默认地址数据
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
          			imageUrl:[
          				{ required: true, message: '请上传企业资质照片', trigger: 'blur' }
          			],
          			time_val:[
          				{ required: true, message: '请选择时间', trigger: 'blur' }
          			],
          			selectedOptions:[
          				{ required: true, message: '请选择公司地址', trigger: 'change' }
          			]
          		},
		        config: {
		          	initialFrameWidth  : 800,		//宽度
		          	initialFrameHeight : 350,		//高度
		          	scaleEnabled	   : true,
		          	indentValue		   : '2em',		//首行缩进
		          	wordCount          : false,		//字数统计
		          	elementPathEnabled : false,		//是否启用路径
		          	zIndex             : 9,			//层级
		        },
		        options			: []		,		//城市三级联动数据
		        props: {
        			label:"name",
          			value: 'regions_id',
          			children: 'child'
        		},
			}
		},
		components: { UE_editor , MAPs},
		created(){
			var that = this ;
			that.getRegions()
		},
		methods:{
			handleAvatarSuccess(res, file) {
        		this.formCompany.imageUrl = URL.createObjectURL(file.raw);
      		},
      		beforeAvatarUpload(file) {
		        const isImgType = file.type === 'image/jpeg' || 'image/png';
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isImgType) {
		          this.$message.error('上传的图片只能是 JPG 格式 或者PNG格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传的图片大小不能超过 2MB!');
		        }
		        return isImgType && isLt2M;
		    },
		    //三级联动数据
		    getRegions(){
		    	var that = this ;
		    	that.$axios.get(process.env.BASE_URL+"/miniprogram/activity/getRegions").then((res)=>{
					console.log(res)
					if(res.data.code == 40000){
						that.options = res.data.list.regions
					}else{
						that.$message.error(res.data.hint);
					}
				})
		    },
		    //地址三级联动
      		handleChange(value) {
      			var that = this ;
        		console.log(value)
        		that.formCompany.selectedOptions = value 
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
  .company_info .block{
  	text-align: left;
  }
</style>
<style scoped="scoped" lang="less">
	.company_info{
		form{
			padding: 15px 0px 0px 60px;
			.complete_btn{
				margin: 30px 0;
			}
		}
	}
</style>