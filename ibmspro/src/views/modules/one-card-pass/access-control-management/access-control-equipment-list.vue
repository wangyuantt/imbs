/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 16:55:15 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 17:31:11
 */
<template>
  <div class="access-control-equipment-list acel">
    <el-form :inline="true" :model="dataForm" label-position="top" @keyup.enter.native="getDataList()">
      <el-form-item label="门禁设备名称">
        <el-input v-model="dataForm.acsDevName" placeholder="门禁设备名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="设备唯一标识">
        <el-input v-model="dataForm.acsDevIndexCodes" placeholder="设备唯一标识" clearable></el-input>
      </el-form-item>
      <el-form-item label="所属区域唯一标识">
        <el-input v-model="dataForm.regionIndexCode" placeholder="所属区域唯一标识" clearable></el-input>
      </el-form-item>
      <el-form-item style="margin-top:40px">
        <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
        <el-button @click="clearAllCondition">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
      <el-table-column prop="acsDevName" label="门禁设备名称"></el-table-column>
      <el-table-column prop="acsDevCode" label="门禁设备编号"></el-table-column>
      <el-table-column prop="acsDevTypeDesc" label="门禁设备类型描述"></el-table-column>
      <el-table-column prop="acsDevTypeCode" label="门禁设备类型编号"></el-table-column>
      <el-table-column prop="acsDevIp" label="门禁设备IP"></el-table-column>
      <el-table-column prop="acsDevPort" label="门禁设备port"></el-table-column>
      <el-table-column prop="treatyType" label="接入协议"></el-table-column>
      <el-table-column prop="createTime" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | ISO8601Format }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'access-control-equipment-list',
  data () {
    return {
      dataListLoading: false,
      dataList: [],
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      dataForm: {
        acsDevName: '',
        regionIndexCode: '',
        acsDevIndexCodes: ''
      }
    }
  },
  methods: {
    queryAction () {
      this.getDataList()
    },
    getDataList () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/hikisecurecenter/acsDevice/advance/acsDeviceList'),
        method: 'post',
        data: this.$http.adornData({
          pageNo: this.currentPage,
          pageSize: this.pageSize,
          acsDevIndexCodes: this.dataForm.acsDevIndexCodes,
          acsDevName: this.dataForm.acsDevName,
          regionIndexCode: this.dataForm.regionIndexCode
        })
      }).then(res => {
        this.dataListLoading = false
        if (res.code === 0) {
          if (res.data.data) {
            this.totalPage = res.data.data.total
            this.dataList = res.data.data.list
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    clearAllCondition () {
      this.dataForm.acsDevName = ''
      this.dataForm.regionIndexCode = ''
      this.dataForm.acsDevIndexCodes = ''
    },
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.currentPage = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.currentPage = val
      this.getDataList()
    }
  }
}
</script>
