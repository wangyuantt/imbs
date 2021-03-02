/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 22:03:36 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 22:48:20
 */
<template>
  <div class="vehicle-parked-inner-qry">
    <el-form :inline="true" :model="dataForm" ref="dataForm" :rules="dataRule" label-position="top" @keyup.enter.native="getDataList()">
      <el-form-item label="车牌号码" prop="plateNo">
        <el-input v-model="dataForm.plateNo" placeholder="车牌号码" clearable></el-input>
      </el-form-item>
      <el-form-item label="卡号" prop="cardNo">
        <el-input v-model="dataForm.cardNo" placeholder="卡号" clearable></el-input>
      </el-form-item>
      <el-form-item label="停车库" prop="parkIndexCode">
        <el-select v-model="dataForm.parkIndexCode" placeholder="请选择">
          <el-option
            v-for="item in parkingGarageOptions"
            :key="item.parkIndexCode"
            :label="item.parkName"
            :value="item.parkIndexCode">
          </el-option>
        </el-select>
        <!-- <el-input v-model="dataForm.parkSyscodes" placeholder="停车库标识" clearable></el-input> -->
      </el-form-item>
      <el-form-item label="停车时长 (小时)" prop="parkTime">
        <el-input v-model="dataForm.parkTime" placeholder="停车时长(小时)" clearable></el-input>
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
          v-model="dataForm.endTime"
          type="datetime"
          size="small"
          placeholder="选择结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item style="margin-top:40px">
        <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
        <el-button @click="clearAllCondition('dataForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
      <el-table-column prop="plateNo" label="车牌号码"></el-table-column>
      <el-table-column prop="plateNoPicUri" label="车牌图片"></el-table-column>
      <el-table-column prop="cardNo" label="卡号"></el-table-column>
      <el-table-column prop="parkName" label="停车库"></el-table-column>
      <el-table-column prop="parkTime" label="停车时长"></el-table-column>
      <el-table-column prop="inTime" label="入场时间">
        <template slot-scope="scope">
            <span>{{ scope.row.inTime | ISO8601Format }}</span>
          </template>
      </el-table-column>
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
  name: 'vehicle-parked-inner-qry',
  data () {
    return {
      dataList: [],
      dataListLoading: false,
      pageNo: 1,
      pageSize: 10,
      total: 0,
      dataForm: {
        plateNo: '',
        cardNo: '',
        parkIndexCode: null,
        parkTime: '',
        startTime: '',
        endTime: ''
      },
      dataRule: {
        plateNo: [
          { required: true, message: '车牌号码不能为空', trigger: 'blur' }
        ]
      },
      parkingGarageOptions: [
        {
          createTime: '',
          parentParkIndexCode: '',
          parkIndexCode: null,
          parkName: '全部',
          updateTime: ''
        }
      ]
    }
  },
  mounted () {
    this.getParkingGarageList()
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
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          startTime: this.dataForm.startTime,
          endTime: this.dataForm.endTime,
          parkSyscode: this.dataForm.parkIndexCode,
          plateNo: this.dataForm.plateNo,
          cardNo: this.dataForm.cardNo,
          parkTime: this.dataForm.parkTime
        })
      }).then(res => {
        this.dataListLoading = false
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
    getParkingGarageList () {
      this.$http({
        url: this.$http.adornUrl('/hikisecurecenter/park/parkList'),
        method: 'post',
        data: this.$http.adornData({
          parkIndexCodes: '' // 停车库唯一标识集合 7e09fddb66264eaab4146ef2d6dadbbb
        })
      }).then(res => {
        if (res && res.code === 0) {
          this.parkingGarageOptions = this.parkingGarageOptions.concat(res.data.data)
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
    clearAllCondition (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
