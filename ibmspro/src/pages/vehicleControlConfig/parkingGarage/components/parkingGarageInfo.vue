/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 14:05:29 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 14:55:45
 */

<template>
    <div class="parking-garage-info flex-center">
        <div class="form-info">
            <el-form label-position="top" label-width="80px" :model="formLabelAlign">
                <el-form-item label="停车库名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="车位数" style="margin:0">
                    <el-row type="flex" justify="start">
                        <el-col :span="10">
                            <el-input v-model="formLabelAlign.name"></el-input>
                            <span class="el-input-span">总车位数</span>
                        </el-col>
                        <el-col :span="2" style="display:flex;justify-content: center">
                            <span class="el-input-span"> - </span>
                        </el-col>
                        <el-col :span="10">
                            <el-input v-model="formLabelAlign.name"></el-input>
                            <span class="el-input-span">空余车位数</span>
                        </el-col>
                    </el-row>
                </el-form-item>
                <span style="font-size:14px" class="el-input-span">空余车位数 = 总车位数 - 已停车辆数</span>
                <el-form-item label="固定车位数" style="margin:0">
                    <el-row type="flex" justify="start">
                        <el-col :span="10">
                            <el-input v-model="formLabelAlign.name"></el-input>
                            <span class="el-input-span">固定车位数</span>
                        </el-col>
                        <el-col :span="2" style="display:flex;justify-content: center">
                            <span class="el-input-span"> - </span>
                        </el-col>
                        <el-col :span="10">
                            <el-input v-model="formLabelAlign.name"></el-input>
                            <span class="el-input-span">空余固定车位数</span>
                        </el-col>
                    </el-row>
                </el-form-item>
                <span style="font-size:14px" class="el-input-span">固定车位数≤总车位数,空余固定车位数≤固定车位数且小于空余车位数</span>
                <el-form-item label="可预约车位数">
                    <el-input v-model="formLabelAlign.name"></el-input>
                    <span style="font-size:14px" class="el-input-span">可预约车位数≤总车位数-固定车位数</span>
                </el-form-item>
            </el-form>
            <el-row>
                <el-col :span="24">
                    <div>一户多车</div>
                    <el-switch
                    v-model="switchValue"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
                    <div class="el-input-span">开启后，该停车库将启用一户多车规则。</div>
                    <div class="el-input-span">一个人名下有一个车位两辆车的情况下，只需要保证场内只有一辆车，两辆车中任意一辆车进出均不收费</div>
                    <div class="el-input-span">挡两辆车同时在场内，其中一辆车需要收费，两辆车共享一个车位，仅需对一辆车进行充值</div>
                </el-col>
                <el-col :span="24" style="margin-top:20px">
                    <el-button type="primary">保存</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'parkingGarageInfo',
    data () {
        return {
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            switchValue: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .parking-garage-info {
        width: 100%;
        height: 100%;
        .form-info {
            width: 60%;
            min-height: 300px;
            .el-input-span {
                font-size: 14px;
                color: #999
            }
        }
    }
</style>
