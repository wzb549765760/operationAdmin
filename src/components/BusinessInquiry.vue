<template>
  <div>
    <div class="search_main">
      <div class="search-col">
        <label>商户名称:</label><el-input v-model="searchObj.businessNum" placeholder="请输入商户号"></el-input>
      </div>
      <div class="search-col">
        <label>商户号:</label><el-input v-model="searchObj.businessNum" placeholder="请输入商户号"></el-input>
      </div>
      <div class="search-col">
        <label>商户手机号:</label><el-input v-model="searchObj.businessNum" placeholder="请输入商户号"></el-input>
      </div>
      <div class="search-col">
        <label>身份证号码:</label><el-input v-model="searchObj.businessNum" placeholder="请输入商户号"></el-input>
      </div>
      <div class="search-col">
        <label>设备SN:</label><el-input v-model="searchObj.businessNum" placeholder="请输入商户号"></el-input>
      </div>
      <div class="search-col">
        <label>总店后缀:</label><el-input v-model="searchObj.businessNum" placeholder="请输入商户号"></el-input>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="info">查看
          </el-button>
          <!--          <el-button-->
          <!--            size="mini"-->
          <!--            type="danger"-->
          <!--            @click="handlecompile(scope.$index, scope.row.serviceOrderId,scope.row.status)">删除-->
          <!--          </el-button>-->
          <!--          <el-button-->
          <!--            size="mini"-->
          <!--            type="primary"-->
          <!--            @click="handlecompile(scope.$index, scope.row.serviceOrderId,scope.row.status)">修改-->
          <!--          </el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage1: 5,
        loading: true,
        searchObj:{
          businessNum:""
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

    },
    created() {
      setTimeout(() => {
        this.loading = false
      }, 2000);
    }

  }
</script>
<style scoped lang="less">
  .block {
    margin-top: 20px;
  }
  .search_main{
    width: 100%;
    background-color: white;
    margin-bottom: 20px;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
    display: inline-block;
    .search-col{
      width: 230px;
      height: 40px;
      margin-right: 20px;
      float: left;
      margin-bottom: 20px;
      display: flex;
      label{
        width: auto;
        padding-right: 10px;
        height: 40px;
        line-height: 40px;
        text-align: left;
        font-size: 16px;
        color: #5d5d5d;
      }
    }
  }
  .el-input{
    flex: 1;
  }
</style>
