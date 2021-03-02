/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-28 12:20:04 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-02 22:55:32
 */
<template>
  <div class="passed-vehicle-record-qry pvrq">
    <el-form :inline="true" :model="dataForm" label-position="top" @keyup.enter.native="getDataList()">
      <el-form-item label="车牌号码">
        <el-input v-model="dataForm.licensePlateNumber" placeholder="车牌号码" clearable></el-input>
      </el-form-item>
      <el-form-item label="卡号">
        <el-input v-model="dataForm.cardNumber" placeholder="卡号" clearable></el-input>
      </el-form-item>
      <el-form-item label="停车库">
        <el-select v-model="dataForm.parkingGarage" placeholder="请选择" @change="choseParkingGarage">
          <el-option
            v-for="item in parkingGarageOptions"
            :key="item.parkIndexCode"
            :label="item.parkName"
            :value="item.parkIndexCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出入口">
        <el-select v-model="dataForm.entrance" placeholder="请选择">
          <el-option
            v-for="item in entranceOptions"
            :key="item.entranceIndexCode"
            :label="item.entranceName"
            :value="item.entranceIndexCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker
          @change='choseStratTime'
          v-model="dataForm.startingTime"
          type="datetime"
          size="small"
          placeholder="选择开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
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
        <el-button @click="clearAllCondition(dataForm)">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
      <el-table-column fixed prop="plateNo" label="车牌号码"></el-table-column>
        <el-table-column prop="cardNo" label="卡号"></el-table-column>
        <el-table-column prop="vehicleType" label="车辆类型">
            <template slot-scope="scope">
                <span>{{ scope.row.vehicleType | vehicleType}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="tCarType" label="车牌图片">
            <template>
                <span>d</span>
            </template>
        </el-table-column>
        <el-table-column prop="tSnapPicture" label="抓拍图片">
            <template>
                <span>d</span>
            </template>
        </el-table-column>
        <el-table-column prop="crossTime" label="通过时间" width="150">
            <template slot-scope="scope">
                <span>{{ scope.row.crossTime | ISO8601Format }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="parkName" label="停车库"></el-table-column>
        <el-table-column prop="entranceName" label="出入口"></el-table-column>
        <el-table-column prop="vehicleOut" label="过车方向">
            <template slot-scope="scope">
                <span>{{ scope.row.vehicleOut | vehicleOut}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="releaseResult" label="放行结果">
            <template slot-scope="scope">
                <span>{{ scope.row.releaseResult | releaseResult}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="releaseWay" label="放行方式">
            <template slot-scope="scope">
                <span>{{ scope.row.releaseWay | releaseWay}}</span>
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
  name: 'passed-vehicle-record-qry',
  data () {
    return {
      dataListLoading: false,
      currentPage: 1,
      pageSize: 10,
      totalPage: 0,
      dataList: [],
      parkingGarageOptions: [
        {
          createTime: '',
          parentParkIndexCode: '',
          parkIndexCode: null,
          parkName: '全部',
          updateTime: ''
        }
      ],
      entranceOptions: [
        {
          createTime: '',
          entranceIndexCode: null,
          entranceName: '全部',
          parkIndexCode: '',
          roadNum: '',
          updateTime: ''
        }
      ],
      dataForm: {
        licensePlateNumber: '',
        cardNumber: '',
        parkingGarage: null,
        entrance: null,
        startingTime: '',
        endingTime: ''
      }
    }
  },
  mounted () {
    this.getParkingGarageList()
  },
  methods: {
    queryAction () {
      this.currentPage = 1
      this.getDataList()
    },
    getDataList () {
      this.dataListLoading = true
      let data = {
        parkSyscode: this.parkingGarage, // 停车库唯一标识
        entranceSyscode: this.entrance, // 出入口唯一标识
        plateNo: this.dataForm.licensePlateNumber, // 车牌
        cardNo: this.dataForm.cardNumber, // 卡号
        startTime: this.dataForm.startingTime, // 查询开始时间  SO8601格式：yyyy-MM-ddTHH:mm:ss+当前时区，例如北京时间：2018-07-26T15:00:00+08:00
        endTime: this.dataForm.endingTime, // 查询结束时间
        pageNo: this.currentPage, // true
        pageSize: this.pageSize // true (0, 1000]
        // vehicleOut: '', // 进出场标识 0:进场，1:出场
        // vehicleType: '', // 车辆类型 0：其他车 1：小型车 2：大型车 3：摩托车
        // releaseResult: '', // 放行结果 0-未放行 1-正常放行 2-离线放行
        // releaseWay: '', // 放行方式 10-未开闸 11-自动开闸 12-人工/人工开闸 13-遥控器开闸
        // releaseReason: '', // 放行原因 100-固定车自动放行 101-临时车自动放行 102-预约车自动放行 103-一户多车自动放行
        // carCategory: '', // 车辆分类  9-黑名单 10-固定车 11-临时车 12-预约车 14-特殊车
      }
      this.$imbsRequest.passedRecoedList(data).then(res => {
        this.dataListLoading = false
        if (res && res.code === 0) {
          this.dataList = res.data.data.list
          this.totalPage = res.data.data.total
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
      this.getEntranceList(val)
    },
    getEntranceList (parkIndexCodes) {
      this.entranceOptions = [
        {
          createTime: '',
          entranceIndexCode: null,
          entranceName: '全部',
          parkIndexCode: null,
          roadNum: '',
          updateTime: ''
        }
      ]
      let data = {
        parkIndexCodes: parkIndexCodes // 停车场唯一标识集 多个值使用英文逗号分隔,不超过1000个，可通过获取停车库列表接口获取
      }
      this.$imbsRequest.entranceList(data).then(res => {
        if (res.code === 0) {
          if (res.data.data) {
            this.entranceOptions = this.entranceOptions.concat(res.data.data)
          } else {
            this.entranceOptions = [
              {
                createTime: '',
                entranceIndexCode: null,
                entranceName: '全部',
                parkIndexCode: null,
                roadNum: '',
                updateTime: ''
              }
            ]
            this.$message.error(res.data.msg)
          }
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
    clearAllCondition (dataForm) {
      this.dataForm.parkingGarage = null
      this.dataForm.entrance = null
      this.dataForm.licensePlateNumber = ''
      this.dataForm.cardNumber = ''
      this.dataForm.startingTime = ''
      this.dataForm.endingTime = ''
    }
  }
}
</script>

