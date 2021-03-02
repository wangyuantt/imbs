/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 17:33:08 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 18:12:39
 */
<template>
    <div class="access-control-point-list acpl">
      <el-form :inline="true" :model="dataForm" label-position="top" @keyup.enter.native="getDataList()">
      <el-form-item label="门禁点名称">
        <el-input v-model="dataForm.doorName" placeholder="门禁设备名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="门禁点唯一标识">
        <el-input v-model="dataForm.doorIndexCodes" placeholder="门禁点唯一标识" clearable></el-input>
      </el-form-item>
      <el-form-item label="门禁设备唯一标识">
        <el-input v-model="dataForm.acsDevIndexCode" placeholder="门禁设备唯一标识" clearable></el-input>
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
      <el-table-column prop="doorName" label="门禁点名称"></el-table-column>
      <el-table-column prop="doorNo" label="门禁点序号"></el-table-column>
      <el-table-column prop="channelNo" label="通道号"></el-table-column>
      <el-table-column prop="channelType" label="通道类型">
        <template slot-scope="scope">
          <span>{{ scope.row.channelType | accessChannelType }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="installLocation" label="安装位置">
        <template slot-scope="scope">
          <span>{{ scope.row.installLocation | installLocation }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | ISO8601Format }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
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
  name: 'access-control-point-list',
  data () {
    return {
      dataListLoading: false,
      dataList: [],
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      dataForm: {
        doorName: '',
        regionIndexCode: '',
        acsDevIndexCode: '',
        doorIndexCodes: ''
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
        url: this.$http.adornUrl('/hikisecurecenter/acsDoor/advance/acsDoorList'),
        method: 'post',
        data: this.$http.adornData({
          pageNo: this.currentPage,
          pageSize: this.pageSize,
          acsDevIndexCode: this.dataForm.acsDevIndexCode,
          doorIndexCodes: this.dataForm.doorIndexCodes,
          doorName: this.dataForm.doorName,
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
      this.dataForm.doorName = ''
      this.dataForm.regionIndexCode = ''
      this.dataForm.acsDevIndexCode = ''
      this.dataForm.doorIndexCodes = ''
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
