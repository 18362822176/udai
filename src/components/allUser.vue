<template>
  <div>
    <h1>管理用户</h1>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop:'data',order:'descending'}"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="用户编号" prop="id"></el-table-column>
      <el-table-column label="注册时间" prop="regTime" sortable></el-table-column>
      <el-table-column label="登录时间" prop="loginTime" sortable></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="userPwd" label="密码" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //渲染全部用户
    getUserData() {
      this.$axios.get("/api/login/allUser").then(res => {
        this.tableData = res.data.data;
      });
    },
  }
};
</script>
<style scoped>
.el-table >>> td,
.el-table >>> th {
  text-align: center;
}
</style>
