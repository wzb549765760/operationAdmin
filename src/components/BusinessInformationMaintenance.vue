<template>
  <div>
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
        tableData: [],
        currentPage1: 5,
        loading: true
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
</style>
