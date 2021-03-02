/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-27 23:41:05 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-01 10:47:27
 */
<template>
    <div class="vehicle-parking-info-qry vpiq">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="过车记录查询" name="first">
          <keep-alive>
            <passed-vehicle-record-qry />
          </keep-alive>
        </el-tab-pane>
        <el-tab-pane label="泊位记录查询" name="fifth">
          <keep-alive>
            <parking-record-qry />
          </keep-alive>
        </el-tab-pane>
        <el-tab-pane label="场内停车信息查询" name="second">
          <vehicle-parked-inner-qry />
        </el-tab-pane>
        <el-tab-pane label="车辆包期信息查询" name="third">
          <keep-alive>
            <vehicle-subscr-info-qry />
          </keep-alive>
        </el-tab-pane>
        <el-tab-pane label="停车账单查询" name="fourth">
          <keep-alive>
            <parking-bill-qry />
          </keep-alive>
        </el-tab-pane>
        <!-- <el-tab-pane label="一户多车状态查询" name="fourth">一户多车状态查询</el-tab-pane>
        <el-tab-pane label="车辆包期退款记录查询" name="fifth">车辆包期退款记录查询</el-tab-pane> -->
        <!-- <el-tab-pane label="账户充值退款记录查询" name="sixth">账户充值退款记录查询</el-tab-pane> -->
        <!-- <el-tab-pane label="临时车缴费记录查询" name="seventh">临时车缴费记录查询</el-tab-pane>
        <el-tab-pane label="预约记录查询" name="eighth">预约记录查询</el-tab-pane>
        <el-tab-pane label="优惠卷记录查询" name="ninth">优惠卷记录查询</el-tab-pane>
        <el-tab-pane label="班次记录查询" name="tenth">班次记录查询</el-tab-pane>
        <el-tab-pane label="收费操作记录查询" name="eleventh">收费操作记录查询</el-tab-pane> -->
      </el-tabs>
    </div>
</template>
<script>
import passedVehicleRecordQry from './components/passed-vehicle-record-qry'
import vehicleSubscrInfoQry from './components/vehicle-subscr-info-qry'
import vehicleParkedInnerQry from './components/vehicle-parked-inner-qry'
import parkingBillQry from './components/parking-bill-qry'
import parkingRecordQry from './components/parking-record-qry'
export default {
  name: 'parking-info-qry',
  components: {
    passedVehicleRecordQry,
    vehicleSubscrInfoQry,
    vehicleParkedInnerQry,
    parkingBillQry,
    parkingRecordQry
  },
  data () {
    return {
      activeName: 'first',
      dataForm: {
        userName: ''
      }
    }
  },
  mounted () {
    let _activeName = sessionStorage.getItem('passed-vehicel-tab-active')
    if (_activeName) {
      this.activeName = _activeName
    } else {
      sessionStorage.setItem('passed-vehicel-tab-active', this.activeName)
    }
  },
  methods: {
    handleClick (tab) {
      sessionStorage.setItem('passed-vehicel-tab-active', tab.name)
    }
  }
}
</script>