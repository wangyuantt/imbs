/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 15:57:01 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 16:34:47
 */
<template>
  <div class="monitoring-point-list">
    <el-form :inline="true" :model="dataForm" label-position="top" @keyup.enter.native="getDataList()">
      <el-form-item label="监控点名称">
        <el-input v-model="dataForm.cameraName" placeholder="监控点名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="是否级联">
        <el-select v-model="dataForm.isCascade" placeholder="请选择">
            <el-option
              v-for="item in isCascadeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item style="margin-top:40px">
        <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
        <el-button @click="clearAllCondition">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
      <el-table-column prop="cameraName" label="监控点名称"></el-table-column>
      <el-table-column prop="createTime" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | ISO8601Format }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="cameraTypeName" label="监控点类型说明"></el-table-column>
      <el-table-column prop="channelNo" label="通道编号"></el-table-column>
      <el-table-column prop="channelType" label="通道类型">
        <template slot-scope="scope">
          <span>{{ scope.row.channelType | channelType }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="transType" label="传输协议">
        <template slot-scope="scope">
            <span>{{ scope.row.transType | transType }}</span>
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
  name: 'monitoring-point-list',
  data () {
    return {
      dataListLoading: false,
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      dataList: [],
      isCascadeOptions: [
        {
          value: 2,
          label: '不限'
        }, {
          value: 0,
          label: '非级联'
        }, {
          value: 1,
          label: '级联'
        }
      ],
      dataForm: {
        cameraName: '',
        isCascade: 2
      }
    }
  },
  methods: {
    queryAction () {
      this.currentPage = 1
      this.getDataList()
    },
    getDataList () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/hikisecurecenter/camera/advance/cameraList'),
        method: 'post',
        data: this.$http.adornData({
          pageNo: this.currentPage,
          pageSize: this.pageSize,
          cameraIndexCodes: '',
          cameraName: this.dataForm.cameraName,
          encodeDevIndexCode: '',
          regionIndexCode: '',
          isCascade: this.dataForm.isCascade
        })
      }).then(res => {
        this.dataListLoading = false
        if (res.code === 0) {
          if (res.data.data) {
            this.totalPage = res.data.data.total
            this.dataList = res.data.data.list
          }
        }
      })
    },
    clearAllCondition () {
      this.dataForm.cameraName = ''
      this.dataForm.isCascade = 2
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
