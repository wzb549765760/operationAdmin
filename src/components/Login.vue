<template>
    <div>
      <div class="loginBC"></div>
      <div class="loginMain">
        <div class="brand">
          <span>运营管理平台</span>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-position="formLabelAlign">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名/手机/邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="ruleForm.pwd" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
          </el-form-item>
          <el-form-item style="text-align: right;">
            <a class="forget">忘记密码</a>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        formLabelAlign:"top",
        ruleForm: {
          name: '',
          pwd:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名/手机/邮箱', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({
              path: 'index'
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
 .loginBC{
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   background-color: #C0CAAE;
   background-repeat: repeat-x;
   background-image: url("../../src/assets/images/bc.png");
 }
  .loginMain{
    padding-top: 25px;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 25px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -196px;
    margin-top: -176px;
    width: 320px;
    box-sizing: border-box;
    background-color:white;
    border: solid 1px #555555;
  }
  .brand{
    float: left;
    width: 100%;
    color: #004ea2;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    margin-bottom: 15px;
  }
 .el-button{
   width: 100%;
 }
  .forget{
    color: rgb(20, 121, 202);
    text-decoration: underline;
    cursor: pointer;
  }
</style>
