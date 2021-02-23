/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 19:14:11 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 19:32:19
 */
<template>
    <div class="voice-broadcast-parameters">
        <el-row style="margin-top:30px">
            <el-col :span="24">
                <el-alert
                    title="语音播报将按照以下优先级播报：黑名单>特殊车>群组车>预约车>固定车>临时车"
                    type="warning"
                    show-icon>
                </el-alert>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div>固定车</div>
                <div class="tip-span" style="margin:10px 0">入场播报</div>
                <el-checkbox-group v-model="checkboxGroupEnter" size="small">
                    <el-checkbox label="车牌号码" border></el-checkbox>
                    <el-checkbox label="欢迎光临/车位已满" border></el-checkbox>
                    <el-checkbox label="到期提醒" border></el-checkbox>
                </el-checkbox-group>
                <div class="tip-span" style="margin:10px 0">
                    最多选择三项。
                </div>
                <div class="tip-span" style="margin:10px 0">出场播报</div>
                <el-checkbox-group v-model="checkboxGroupOut" size="small">
                    <el-checkbox label="车牌号码" border></el-checkbox>
                    <el-checkbox label="到期提醒" border></el-checkbox>
                </el-checkbox-group>
                <div class="tip-span" style="margin:10px 0">
                    最多选择三项。
                </div>
                <div class="tip-span" style="margin:10px 0">旅行播报</div>
                <el-checkbox-group v-model="checkboxGroupTravl" size="small">
                    <el-checkbox label="一路顺风" border></el-checkbox>
                </el-checkbox-group>
                <div class="tip-span" style="margin:10px 0">
                    配置内容只针对系统语音播报方式。
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div>临时车</div>
                <div class="tip-span" style="margin:10px 0">入场播报</div>
                <el-checkbox-group v-model="t_checkboxGroupEnter" size="small">
                    <el-checkbox label="车牌号码" border></el-checkbox>
                    <el-checkbox label="欢迎光临/车位已满" border></el-checkbox>
                    <el-checkbox label="到期提醒" border></el-checkbox>
                </el-checkbox-group>
                <div class="tip-span" style="margin:10px 0">
                    最多选择三项。
                </div>
                <div class="tip-span" style="margin:10px 0">出场播报</div>
                <el-checkbox-group v-model="t_checkboxGroupOut" size="small">
                    <el-checkbox label="车牌号码" border></el-checkbox>
                    <el-checkbox label="收费金额" border></el-checkbox>
                    <el-checkbox label="到期提醒" border></el-checkbox>
                </el-checkbox-group>
                <div class="tip-span" style="margin:10px 0">
                    最多选择三项。
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <el-button type="primary" size="smanll">保存</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'voiceBroadcastParam',
    data () {
        return {
            admissionAnnouncement: '',
            checkboxGroupEnter: [],
            checkboxGroupOut: [],
            checkboxGroupTravl: [],
            t_checkboxGroupEnter: [],
            t_checkboxGroupOut: []
        }
    }
}
</script>
