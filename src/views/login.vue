<template>
  <div id="bg">
    <div id="login">
      <h1>登录</h1>
      <el-form
        :model="login"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="login.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input type="password" v-model="login.userPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left:100px">
          <el-button type="success" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')" type="primary">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名!"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码!"));
      } else {
        if (value.length < 6) {
          callback(new Error("密码不得小于6位!"));
        }
        callback();
      }
    };
    return {
      login: {
        userName: "",
        userPwd: ""
      },
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        userPwd: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/api/login/user",this.login).then(res => {
            if (res.data.errorNo === 0) {
              alert("登录成功!");
              this.$router.push({ path: "/index" });
            } else {
              this.$message({
                showClose: true,
                message: "登录失败",
                type: "error"
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
#bg{
    width:100%;
    height:937px;
    background:url('../assets/bg.jpg') no-repeat center;
    overflow: hidden;
}
#login {
  width: 500px;
  margin: 200px auto;
  border: 1px solid #000;
  padding: 0 50px 0px 0;
  border-radius: 25px;
  box-shadow: 0px 0 10px #000;
}
h1 {
  text-align: center;
  margin-left: 60px;
}
.el-form-item {
  margin-bottom: 40px;
}
</style>
