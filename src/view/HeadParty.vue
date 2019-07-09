<template>
  <el-header>
    <div class="headMain">
      <div class="system_name">
        运营管理平台
      </div>
      <div class="system_right">
        <el-dropdown @command="handleCommand" trigger="click">
  <span class="el-dropdown-link">
    欢迎您:修改测试<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="updatePass">修改密码</el-dropdown-item>
            <el-dropdown-item command="outLogin">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-dialog
      title="修改密码"
      :visible.sync="centerDialogVisible"
      width="20%"
      center>
      <el-form :label-position="labelPosition" ref="updatePwd" label-width="80px" :model="updatePwd" :rules="rules">
        <el-form-item label="旧密码" prop="pass">
          <el-input v-model="updatePwd.pass"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPass">
          <el-input v-model="updatePwd.newPass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="reNewPass">
          <el-input v-model="updatePwd.reNewPass"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="submit('updatePwd')">提 交</el-button>
  </span>
    </el-dialog>

  </el-header>
</template>

<script>
  export default {
    name: "HeadParty",
    data() {
      let self = this;
      let newPassValidator = function (rule,value,callback) {
        switch (rule.field) {
          case "pass":
            if(value === ""){
              callback(new Error("旧密码不能为空"));
            }
            break;
          case "newPass":
            if(value === ""){
              callback(new Error("新密码不能为空"));
            }
            if(!(6<=value<=12)){
              callback(new Error("密码必须6到12位，且包含数字和字母"));
            }
            break;
          case "reNewPass":
            if(value === ""){
              callback(new Error("重复新密码不能为空"));
            }
            if(self.updatePwd.newPass !== self.updatePwd.reNewPass){
              callback(new Error("新密码填写不一致"));
            }
            break;
        }

      };

      return {
        centerDialogVisible: true,
        labelPosition: 'left',
        updatePwd: {
          pass: '',
          newPass: '',
          reNewPass: ''
        },
        rules: {
          pass: [
            {validator:newPassValidator, trigger: 'blur'}
          ],
          newPass: [
            {validator:newPassValidator, trigger: 'blur'}
          ],
          reNewPass: [
            {validator:newPassValidator, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      handleCommand(command) {
        if (command == "updatePass") {/*修改密码*/
          this.centerDialogVisible = true;
        } else if (command == "outLogin") {/*注销*/
          alert(334)
        }
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.centerDialogVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">

  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .headMain {
    width: 100%;
    height: 60px;

    .system_name {
      line-height: 60px;
      width: auto;
      float: left;
      font-size: 24px;
      color: white;
    }

    .system_right {
      width: auto;
      float: right;
      line-height: 60px;
      height: 60px;
    }
  }
</style>
