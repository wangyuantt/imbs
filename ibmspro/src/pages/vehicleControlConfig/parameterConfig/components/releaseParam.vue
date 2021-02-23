/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 16:20:42 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 16:57:19
 */
<template>
    <div class="release-parameters full-page">
        <el-row type="flex" justify="center">
            <el-col :span="10">
                <h4>出口配置</h4>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="10">
                <div style="margin-bottom:10px;font-size:14px">临时车位满是否放行</div>
                <el-button-group>
                    <el-button type="danger" plain size="small">不放行</el-button>
                    <el-button type="primary" plain size="small">放行</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div style="margin-bottom:10px;font-size:14px">固定车位满是否放行</div>
                <el-button-group>
                    <el-button type="danger" plain size="small">不放行</el-button>
                    <el-button type="primary" plain size="small">放行</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div style="margin-bottom:10px">黑名单布控</div>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="入场布控"></el-checkbox>
                    <el-checkbox label="出场布控"></el-checkbox>
                </el-checkbox-group>
                <span class="tip-span">布控后，禁止车辆入场/出场</span>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div style="margin-bottom:10px;font-size:14px">收费为0是否放行</div>
                <el-button-group>
                    <el-button type="danger" plain size="small">不放行</el-button>
                    <el-button type="primary" plain size="small">放行</el-button>
                </el-button-group>
                <span class="tip-span">异常收费为0或修改金额为0时，需要岗亭操作员确认后点击放行按钮放行。</span>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div >固定车牌识别容错位数</div>
                <el-slider v-model="sliderVal" :max='max'></el-slider>
                <span class="tip-span">车牌识别结果和系统登记的车牌相差位数在设置范围内，将认为是同一辆车。</span>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div style="margin-bottom:10px">固定车到期配置</div>
                <el-input v-model="days" size="small" placeholder="请输入天数"></el-input>
                <span class="tip-span">车辆即将到期时，将在出入口LED屏显到期时间。</span>
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
    name: 'releaseParameters',
    data () {
        return {
            checkList: [],
            sliderVal: 0,
            max: 5,
            days: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .release-parameters{
        overflow: auto
    }
</style>

