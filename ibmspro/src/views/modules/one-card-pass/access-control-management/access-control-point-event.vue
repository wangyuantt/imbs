/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 18:19:27 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 22:16:36
 */
<template>
    <div class="access-control-point-event">
      <el-form :inline="true" :model="dataForm" ref="dataForm" :rules="dataRule" label-position="top" @keyup.enter.native="getDataList()">
        <el-form-item label="人员姓名">
          <el-input v-model="dataForm.personName" placeholder="人员姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="门禁点名称">
          <el-input v-model="dataForm.doorName" placeholder="门禁点名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="startingTime">
          <el-date-picker
            @change='choseStratTime'
            v-model="dataForm.startingTime"
            type="datetime"
            size="small"
            placeholder="选择开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="endingTime">
          <el-date-picker
            @change='choseEndTime'
            v-model="dataForm.endingTime"
            type="datetime"
            size="small"
            placeholder="选择结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="margin-top:40px">
          <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
          <el-button @click="clearAllCondition">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
        <el-table-column prop="personName" label="人员名称"></el-table-column>
        <el-table-column prop="eventName" label="事件名称"></el-table-column>
        <el-table-column prop="eventId" label="事件ID"></el-table-column>
        <el-table-column prop="eventTime" label="事件产生时间">
          <template slot-scope="scope">
            <span>{{ scope.row.eventTime | ISO8601Format }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="eventType" label="事件类型码">
          <!-- <template slot-scope="scope">
            <span>{{ scope.row.channelType | accessChannelType }}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="inAndOutType" label="进出类型">
          <template slot-scope="scope">
            <span>{{ scope.row.inAndOutType | inAndOutType }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="orgName" label="组织名称"></el-table-column>
        <el-table-column prop="orgIndexCode" label="组织编码"></el-table-column>
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
  name: 'access-control-point-event',
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataList: [],
      dataForm: {
        personName: '',
        doorName: '',
        startingTime: '',
        endingTime: ''
      },
      dataRule: {
        startingTime: [
          { required: true, message: '开始时间不能为空', trigger: 'blur' }
        ],
        endingTime: [
          { required: true, message: '结束时间不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    queryAction () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.getDataList()
        }
      })
    },
    getDataList () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/hikisecurecenter/door/events'),
        method: 'post',
        data: this.$http.adornData({
          pageNo: this.currentPage,
          pageSize: this.pageSize,
          startTime: this.dataForm.startingTime,
          endTime: this.dataForm.endingTime,
          doorName: this.dataForm.doorName
          // eventType: 1,
          // personName: '',
          // "personIds": [
          //     "1"
          // ],
          // "doorIndexCodes": [
          //     "1f276203e5234bdca08f7d99e1097bba"
          // ],
          // "doorRegionIndexCode": "3f9512ec067248dfa0679cf4a1634800",
          // "sort": "personName",
          // "order": "acs"
        })
      }).then(res => {
        this.dataListLoading = false
        if (res.code === 0) {
          if (res.data.code === '0') {
            this.totalPage = res.data.data.total
            this.dataList = res.data.data.list
          } else {
            this.$message.error(res.data.msg)
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    choseStratTime () {
      let vm = this
      let _startTime = vm.$moment(vm.dataForm.startingTime).format()
      vm.dataForm.startingTime = _startTime
    },
    choseEndTime () {
      let vm = this
      let _endTime = vm.$moment(vm.dataForm.endingTime).format()
      vm.dataForm.endingTime = _endTime
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
    },
    clearAllCondition () {
      this.dataForm.personName = ''
      this.dataForm.doorName = ''
      this.dataForm.startingTime = ''
      this.dataForm.endingTime = ''
    }
  }
}
</script>

