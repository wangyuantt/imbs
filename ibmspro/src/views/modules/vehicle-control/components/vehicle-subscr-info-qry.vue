/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 21:37:03 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 21:55:59
 */
<template>
    <div class="vehicle-subscr-info-qry">
      <el-form :inline="true" :model="dataForm" label-position="top" @keyup.enter.native="getDataList()">
        <el-form-item label="停车库标识">
          <el-input v-model="dataForm.parkSyscodes" placeholder="停车库标识" clearable></el-input>
        </el-form-item>
        <el-form-item label="车牌号码">
          <el-input v-model="dataForm.plateNo" placeholder="车牌号码" clearable></el-input>
        </el-form-item>
        <el-form-item style="margin-top:40px">
          <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
          <el-button @click="clearAllCondition()">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
        <el-table-column fixed prop="personName" label="车主"></el-table-column>
        <el-table-column fixed prop="plateNo" label="车牌号码"></el-table-column>
        <el-table-column fixed prop="cardNo" label="卡号"></el-table-column>
        <!-- <el-table-column fixed prop="parkName" label="停车库名称"></el-table-column> -->
        <el-table-column fixed prop="groupName" label="群组名称"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
</template>
<script>
export default {
  name: 'vehicle-subscr-info-qry',
  data () {
    return {
      pageSize: 10,
      pageNo: 1,
      total: 0,
      dataList: [],
      dataListLoading: false,
      dataForm: {
        parkSyscodes: '',
        plateNo: ''
      }
    }
  },
  methods: {
    queryAction () {
      console.log('dsd')
      this.getDataList()
    },
    getDataList () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/hikisecurecenter/car/charge/page'),
        method: 'post',
        data: this.$http.adornData({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          parkSyscodes: this.dataForm.parkSyscodes,
          plateNo: this.dataForm.plateNo
        })
      }).then(res => {
        this.dataListLoading = false
        console.log(res, 'dsds')
        if (res.code === 0) {
          if (res.data.code === '0') {
            this.total = res.data.data.total
            this.dataList = res.data.data.list
          } else {
            this.$message.error(res.data.msg)
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.pageNo = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.pageNo = val
      this.getDataList()
    },
    clearAllCondition () {
      this.dataForm.parkSyscodes = ''
      this.dataForm.plateNo = ''
    }
  }
}
</script>

