<template>
  <el-dialog title=" 修改商品信息" :visible.sync="dialogEdit.show" width="30%">
    <el-form
      :model="edit"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品编号" prop="id">
        <el-input type="text" v-model="edit.id" readonly autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" prop="title">
        <el-input type="text" v-model="edit.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input type="text" v-model="edit.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品库存" prop="stock">
        <el-input type="text" v-model="edit.stock" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品风格" prop="style">
        <el-input type="text" v-model="edit.style" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="style">
        <el-input type="text" v-model="edit.sort" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogEdit: {
      type: Object
    },
    edit: {
      type: Object
    }
  },
  data() {
    return {
      rules: {
        title: [{ required: true, message: "商品名必填", trigger: "blur" }],
        price: [{ required: true, message: "商品原价必填", trigger: "blur" }],
        cellPrice: [{ required: true, message: "商品现价必填", trigger: "blur" }],
        stock: [{ required: true, message: "商品库存必填", trigger: "blur" }],
        style: [{ required: true, message: "商品风格必填", trigger: "blur" }],
        sort: [{ required: true, message: "商品分类必填", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.put("/api/goods/updGoods", this.edit).then(res => {
            if (res.data.errorNo === 0) {
              this.$message({
                type: "success",
                message: res.data.message
              });
              this.$emit("add");
              this.$emit("hide");
            } else {
              this.$message({
                type: "error",
                message: "修改失败"
              });
            }
          });
        } else {
          console.log("error submit!!");
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
</style>
