/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 18:28:04 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 18:52:26
 */
<template>
    <div class="ali-tent-param">
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div style="margin-bottom:10px">支付宝信息配置</div>
                <div class="tip-span">启用</div>
                <el-switch v-model="aliSwitchValue" active-color="#44ce6e" inactive-color="#999"></el-switch>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div style="margin-bottom:10px">微信信息配置</div>
                <div class="tip-span">启用</div>
                <el-switch v-model="weixinSwitchValue" active-color="#44ce6e" inactive-color="#999"></el-switch>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <el-button type="primary" size="small">保存</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'AlipayWeChatConnectionParameters',
    data () {
        return {
            aliSwitchValue: true,
            weixinSwitchValue: false
        }
    }
}
</script>

