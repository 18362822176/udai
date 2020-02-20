<template>
  <div>
    <div>
      <el-button type="primary" @click="addGoods">添加商品</el-button>
    </div>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" height="700">
      <el-table-column label="商品编号" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="title"></el-table-column>
      <el-table-column label="商品库存" prop="stock"></el-table-column>
      <el-table-column label="商品价格" prop="price"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <add-goods :dialogAdd="dialogAdd" @hide="addGoods" @add="getGoodsData"></add-goods>
    <edit-goods :dialogEdit="dialogEdit" @hide="changeEdit" @add="getGoodsData" :edit="editGoods"></edit-goods>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[4, 6, 9, 10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import EditGoods from "./editGoods";
import AddGoods from "./addGoods";
export default {
  data() {
    return {
    	tableData: [],
      	dialogAdd: {
        	show: false
      	},
      	dialogEdit: {
        	show: false
      	},
	  	editGoods: {},
	  	currentPage:1, //初始页
    	pagesize:9,    //    每页的数据
	};
  },
  components: {
    AddGoods,
    EditGoods
  },
  created() {
    this.getGoodsData();
  },
  methods: {
    getGoodsData() {
      this.$axios.get("/api/goods/allGoods").then(res => {
        this.tableData = res.data.data;
      });
    },
    handleEdit(index, row) {
      this.changeEdit();
      this.editGoods = row;
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.delete(`/api/goods/delGoods?id=${row.id}`).then(res => {
            if (res.data.errorNo === 0) {
              this.$message({
                type: "success",
                message: res.data.message
              });
              this.getGoodsData();
            } else {
              this.$message({
                type: "error",
                message: "删除失败"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    changeEdit() {
      this.dialogEdit.show = !this.dialogEdit.show;
    },
    addGoods() {
      this.dialogAdd.show = !this.dialogAdd.show;
    },
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
  }
};
</script>
<style scoped>
.el-table>>>td, .el-table>>>th{
  text-align: center;
}
</style>
