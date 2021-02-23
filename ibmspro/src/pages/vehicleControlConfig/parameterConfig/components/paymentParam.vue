/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 17:04:20 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 18:23:48
 */
<template>
    <div class="payment-parameters">
        <div class="payment-parameters full-page">
            <el-row type="flex" justify="center">
                <el-col :span="10">
                    <h4>缴费超时时间配置</h4>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" style="margin-top:30px">
                <el-col :span="10">
                    <div style="margin-bottom:10px">未出场超时时间</div>
                    <el-input v-model="days" size="small" placeholder="请输入分钟数"></el-input>
                    <span class="tip-span">车辆在中心缴费后可在场内逗留的时间，超时后需要补交停车费用。</span>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" style="margin-top:30px">
                <el-col :span="10">
                    <div style="margin-bottom:10px">车主账户配置</div>
                    <div class="tip-span" style="margin-bottom:10px">账户扣款自动放行</div>
                    <el-switch v-model="switchValue" active-color="#44ce6e" inactive-color="#999"></el-switch>
                    <div class="tip-span" style="margin:10px 0">账户扣款最大金额</div>
                    <el-input placeholder="账户扣款最大金额" v-model="input1" size="small">
                        <template slot="prepend">¥</template>
                    </el-input>
                    <div class="tip-span" style="margin:10px 0">单次扣款最大上限，超过限额后不进行自动扣费。</div>
                    <div class="tip-span" style="margin:10px 0">账户余额提醒金额</div>
                    <el-input placeholder="账户余额提醒金额" v-model="input1" size="small">
                        <template slot="prepend">¥</template>
                    </el-input>
                    <div class="tip-span" style="margin:10px 0">配置后将在出入口LED显示余额提醒。</div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" style="margin-top:30px">
                <el-col :span="10">
                    <div style="margin-bottom:10px">一户多车计费模式配置</div>
                    <div class="tip-span" style="margin:10px 0">计费模式</div>
                     <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="tip-span" style="margin:10px 0">1、后进收费：车主有效包期车位停满后进场的车辆视为临时车，按临时车收费规则进行计费。</div>
                    <div class="tip-span" style="margin:10px 0">2、先出收费：车主有效包期车位停满后又有名下车辆进入，则先出的先收费，停车费用是超过有效车位的停车时段的费用。</div>
                    <div class="warn-span">
                        注：一户多车先出收费模式下只支持岗亭缴费。
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" style="margin-top:30px">
                <el-col :span="10">
                    <el-button type="primary">保存</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: "paymentParameters",
    data () {
        return {
            switchValue: false,
            input1: '',
            value: '',
            options: [
                {
                    value: '1',
                    label: '后进收费'
                },
                {
                    value: '2',
                    label: '先出收费'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .payment-parameters{
        overflow: auto
    }
</style>