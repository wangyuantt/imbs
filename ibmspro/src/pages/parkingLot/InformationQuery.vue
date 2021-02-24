/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 20:27:49 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 16:42:26
 */
<template>
    <div class="information-query">
        <div class="information-query-breadcrumb breadcrumb">
            <span>{{navTitle}}</span>
        </div>
        <div class="information-query-content flex-start">
            <div class="information-query-aside">
                <el-row type="flex" justify="center" style="margin-top:10px">
                    <el-col :span="22">
                        <div @click="switemItem(index)" class="item" :class="itemActive === index ? 'itemActive': ''" v-for="(item, index) in asideArr" :key="index">
                            {{item.name}}
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="information-query-main">
                <passedVehicleRecordQuery v-if="itemActive === 0" />
                <vehicleQueryWarehouse v-if="itemActive === 1" />
                <berthRecordQuery v-if="itemActive === 2" />
                <multiVehicleStatusQuery v-if="itemActive === 3" />
                <carRentalRefundRecordQuery v-if="itemActive === 4" />
                <accountRechargeAndRefundRecordQuery v-if="itemActive === 5" />
                <temporaryCarPaymentRecordQuery v-if="itemActive === 6" />
                <appointmentRecordQuery v-if="itemActive === 7" />
                <couponRecordQuery v-if="itemActive === 8" />
                <shiftRecordQuery v-if="itemActive === 9" />
            </div>
        </div>
    </div>
</template>
<script>
import passedVehicleRecordQuery from './passedVehicleRecordQuery/passedVehicleRecordQuery' // 过车记录查询
import vehicleQueryWarehouse from './vehicleQueryWarehouse/vehicleQueryWarehouse' // 库内车辆查询
import berthRecordQuery from './berthRecordQuery/berthRecordQuery' // 泊位记录查询
import multiVehicleStatusQuery from './multiVehicleStatusQuery/multiVehicleStatusQuery' // 一户多车状态查寻
import carRentalRefundRecordQuery from './carRentalRefundRecordQuery/carRentalRefundRecordQuery' // 车辆包期退款记录查询
import accountRechargeAndRefundRecordQuery from './accountRechargeAndRefundRecordQuery/accountRechargeAndRefundRecordQuery' // 账户充值退款记录查询
import temporaryCarPaymentRecordQuery from './temporaryCarPaymentRecordQuery/temporaryCarPaymentRecordQuery' // 临时车缴费记录查询
import appointmentRecordQuery from './appointmentRecordQuery/appointmentRecordQuery' // 预约记录查询
import couponRecordQuery from './couponRecordQuery/couponRecordQuery'
import shiftRecordQuery from './shiftRecordQuery/shiftRecordQuery'

export default {
    name: 'informationQuery',
    components: {
        passedVehicleRecordQuery,
        vehicleQueryWarehouse,
        berthRecordQuery,
        multiVehicleStatusQuery,
        carRentalRefundRecordQuery,
        accountRechargeAndRefundRecordQuery,
        temporaryCarPaymentRecordQuery,
        appointmentRecordQuery,
        couponRecordQuery,
        shiftRecordQuery
    },
    data () {
        return {
            itemActive: 0,
            asideArr: [
                {
                    name: '过车记录查询'
                },{
                    name: '库内车辆查询'
                },{
                    name: '泊位记录查询'
                },{
                    name: '一户多车状态查寻'
                },{
                    name: '车辆包期退款记录查询'
                },{
                    name: '账户充值退款记录查询'
                },{
                    name: '临时车缴费记录查询'
                },{
                    name: '预约记录查询'
                },{
                    name: '优惠卷记录查询'
                },{
                    name: '班次记录查询'
                },{
                    name: '收费操作记录查询'
                }
            ]
        }
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.title + ' > ' + meta.currentPageTitle
        }
    },
    methods: {
        switemItem (index) {
            this.itemActive = index
        }
    }
}
</script>

<style lang="scss" scoped>
    .information-query {
        width: 100%;
        height: 100%;
        .breadcrumb{
            width: 100%;
            height: 34px;
            font-size: 14px;
            line-height: 34px;
            color: #666;
            padding-left: 20px;
            border-bottom: 1px solid #F3f5f7;
            box-sizing: border-box;
        }
        .information-query-content {
            width: 100%;
            height: calc(100% - 34px);
            .information-query-aside {
                width: 300px;
                height: 100%;
                border-right: 1px solid #f3f5f7;
                box-sizing: border-box;
                .item {
                    width: 100%;
                    height: 30px;
                    cursor: pointer;
                    line-height: 30px;
                    font-size: 14px;
                    text-indent: 12px;
                    border-radius: 4px;
                    margin: 5px 0;
                }
                .itemActive {
                    background-color: #409eff;
                    color:#fff
                }
            }
            .information-query-main {
                width: calc(100% - 300px);
                height: 100%
            }
        }
    }
</style>
