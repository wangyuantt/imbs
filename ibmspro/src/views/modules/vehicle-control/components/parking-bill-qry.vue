/*
 * @Author: Wang Yuan 
 * @Date: 2021-03-01 09:59:37 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-02 23:11:37
 */
<template>
    <div class="parking-bill-qry">
      <el-form :inline="true" :model="dataForm" ref="dataForm" :rules="dataRule" label-position="top" @keyup.enter.native="queryAction()">
        <el-form-item label="车牌号码" prop="plateNo">
          <el-input v-model="dataForm.plateNo" placeholder="车牌号码" clearable></el-input>
        </el-form-item>
        <el-form-item label="停车库" prop="parkSyscode">
          <el-select v-model="dataForm.parkSyscode" placeholder="请选择" @change="choseParkingGarage">
          <el-option
            v-for="item in parkingGarageOptions"
            :key="item.parkIndexCode"
            :label="item.parkName"
            :value="item.parkIndexCode">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item style="margin-top:40px">
          <el-button type='primary' :disabled="dataListLoading" @click="queryAction">查询</el-button>
          <el-button @click="clearAllCondition('dataForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
        <el-table-column prop="plateNo" label="车牌号码"></el-table-column>
        <el-table-column prop="cardNo" label="卡号"></el-table-column>
        <el-table-column prop="parkName" label="停车库"></el-table-column>
        <el-table-column prop="enterTime" label="入场时间">
          <template slot-scope="scope">
              <span>{{ scope.row.enterTime | ISO8601Format }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="parkTime" label="停车时长(分钟)"></el-table-column>
        <el-table-column prop="supposeCost" label="应收金额(元)"></el-table-column>
        <el-table-column prop="deduceCost" label="减免金额(元)"></el-table-column>
        <el-table-column prop="paidCost" label="已支付金额(元)"></el-table-column>
        <el-table-column prop="totalCost" label="账单总金额(元)"></el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'parking-bill-qry',
  data () {
    return {
      dataList: [],
      dataListLoading: false,
      dataForm: {
        plateNo: '',
        parkSyscode: ''
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
          parkIndexCode: '',
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
          this.getDataList()
        }
      })
    },
    getDataList () {
      this.dataListLoading = true
      let data = {
        parkSyscode: this.dataForm.parkSyscode, // 停车库唯一标识
        plateNo: this.dataForm.plateNo // 车牌
      }
      this.$imbsRequest.quickPreBill(data).then(res => {
        this.dataListLoading = false
        if (res.code === 0) {
          if (res.data.code === '0') {
            this.dataList = []
            this.dataList.push(res.data.data)
          } else {
            this.$message.error(res.data.msg)
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getParkingGarageList () {
      let data = {
        parkIndexCodes: '' // 停车库唯一标识集合 7e09fddb66264eaab4146ef2d6dadbbb
      }
      this.$imbsRequest.parkingGarageList(data).then(res => {
        if (res && res.code === 0) {
          this.parkingGarageOptions = this.parkingGarageOptions.concat(res.data.data)
        }
      })
    },
    choseParkingGarage (val) {
      this.dataForm.parkSyscode = val
    },
    clearAllCondition (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

