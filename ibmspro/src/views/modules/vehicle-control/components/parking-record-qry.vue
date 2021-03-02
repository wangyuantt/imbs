/*
 * @Author: Wang Yuan 
 * @Date: 2021-03-01 10:44:14 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-01 17:24:03
 */
<template>
    <div class="parking-record-qry">
      <el-form :inline="true" :model="dataForm" ref="dataForm" :rules="dataRule" label-position="top" @keyup.enter.native="queryAction()">
        <el-form-item label="查询方式" prop="queryType">
          <el-select v-model="dataForm.queryType" placeholder="查询方式" @change="choseQueryType">
            <el-option
              v-for="item in queryTypeOptions"
              :key="item.value"
              :label="item.type"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号码" prop="plateNo">
          <el-input v-model="dataForm.plateNo" placeholder="车牌号码" clearable></el-input>
        </el-form-item>
        <el-form-item label="车位号" prop="spaceNo">
          <el-input v-model="dataForm.spaceNo" placeholder="车位号" clearable></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="startTime">
          <el-date-picker
            @change='choseStratTime'
            v-model="dataForm.startTime"
            type="datetime"
            size="small"
            placeholder="选择开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="endTime">
          <el-date-picker
            @change='choseEndTime'
            v-model="dataForm.endTime"
            type="datetime"
            size="small"
            placeholder="选择结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="margin-top:40px">
          <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
          <el-button @click="clearAllCondition(dataForm)">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
        <el-table-column prop="plateNo" label="车牌号码"></el-table-column>
        <el-table-column prop="spaceNo" label="车位号"></el-table-column>
        <el-table-column prop="parkingTime" label="停车时间">
          <template slot-scope="scope">
              <span>{{ scope.row.parkingTime | ISO8601Format }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="parkName" label="停车库"></el-table-column>
        <el-table-column prop="floorName" label="楼层"></el-table-column>
        <el-table-column prop="parkTime" label="停车时长(分钟)"></el-table-column>
        <el-table-column prop="spacePicUri" label="车位图片"></el-table-column>
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
  name: 'parking-record-qry',
  data () {
    return {
      pageNo: 1,
      pageSize: 10,
      total: 0,
      dataList: [],
      dataListLoading: false,
      dataForm: {
        parkSyscode: '',
        plateNo: '',
        spaceNo: '',
        queryType: 1,
        startTime: '',
        endTime: ''
      },
      dataRule: {
        plateNo: [
          { required: true, message: '车牌号码不能为空', trigger: 'blur' }
        ]
      },
      queryTypeOptions: [
        {
          value: 1,
          type: '车牌查询'
        }, {
          value: 2,
          type: '车位查询'
        }, {
          value: 3,
          type: '停车时间段查询'
        }, {
          value: 4,
          type: '无牌车停车查询'
        }
      ]
    }
  },
  methods: {
    queryAction () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.pageNo = 1
          this.getDataList()
        }
      })
    },
    getDataList () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/hikisecurecenter/tempCarInRecords/page'),
        method: 'post',
        data: this.$http.adornData({
          queryType: this.dataForm.queryType,
          parkSyscode: this.dataForm.parkSyscode, // 停车库唯一标识
          plateNo: this.dataForm.plateNo, // 车牌
          spaceNo: this.dataForm.spaceNo,
          startTime: this.dataForm.startTime,
          endTime: this.dataForm.endTime,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        })
      }).then(res => {
        this.dataListLoading = false
        if (res.code === 0) {
          if (res.data.code === '0') {
            if (res.data.data.list) {
              this.total = res.data.data.total
              this.dataList = res.data.data.list
            }
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
      let _startTime = vm.$moment(vm.dataForm.startTime).format()
      vm.dataForm.startTime = _startTime
    },
    choseEndTime () {
      let vm = this
      let _endTime = vm.$moment(vm.dataForm.endTime).format()
      vm.dataForm.endTime = _endTime
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
    choseQueryType (val) {
      this.dataForm.queryType = val
    },
    clearAllCondition (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
