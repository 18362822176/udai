<template>
    <el-container style="height: 900px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>产品管理</template>
                <el-menu-item-group>
                <el-menu-item index="1-1"><router-link to='/index/goods' tag='span'>商品管理</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to='/index/allGoods' tag='span'>全部商品</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
                <el-menu-item-group>
                <el-menu-item index="2-1"><router-link to='/index/allUser' tag="span">管理用户</router-link></el-menu-item>
                <el-menu-item index="2-2">用户资料</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>订单管理</template>
                <el-menu-item-group>
                <el-menu-item index="2-1">用户订单</el-menu-item>
                <el-menu-item index="2-2">订单详情</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px; height:56px;line-height:56px;">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  }
</script>
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
  .el-submenu{
      background: #3c3c3c;
  }
  .el-submenu>>>.el-submenu__title{
      color:#fff;
  }
  .el-submenu.is-active .el-submenu__title{
      color:#000;
  }
  .el-submenu>>>.el-submenu__title:hover{
      color:#000;
  }
</style>
