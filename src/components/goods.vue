<template>
<div>
    <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="查詢商品">
            <el-input v-model="keyGoods" placeholder="查詢商品"></el-input>
        </el-form-item>
    </el-form>
    <el-table :data="searchGoods(keyGoods)" style="width: 100%" height="600">
        <el-table-column
        label="商品编号"
        prop="id">
        </el-table-column>
        <el-table-column
        label="商品名称"
        prop="title">
        </el-table-column>
        <el-table-column
        label="商品简介"
        prop="desc">
        </el-table-column>
        <el-table-column
        label="商品价格"
        prop="price">
        </el-table-column>
    </el-table>
</div> 
</template>
<script>
export default {
   data() {
      return {
        tableData:[],
        keyGoods:''
      }
    },
    created() {
       this.getGoodsData()
    },
    methods:{
        //渲染全部商品
        getGoodsData(){
            this.$axios.get('http://localhost:3000/goods/allGoods').then(res=>{
                this.tableData = res.data.data
            })
        },
        //搜索商品
        searchGoods(keyName) {
            return this.tableData.filter(res=>{
                if(res.title.includes(keyName)){
                    return res
                }
            })
        }
    }
}
</script>
<style scoped>
</style>
