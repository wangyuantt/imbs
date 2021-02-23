/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 18:49:59 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 19:12:18
 */
<template>
    <div class="card-isuing-device-parameters">
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div>基础配置</div>
                <div class="tip-span" style="margin:10px 0">设备类型</div>
                <el-select v-model="deviceType" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in deviceOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="tip-span" style="margin:10px 0">
                    DS-K1F100-D8E为卡片发卡器，支持发卡：Mifare卡号、Mifare卡扇区加密、CPU卡号、CPU卡加密、ID卡、身份证序列号。
                </div>
                <div class="tip-span">
                    DS-K1F100-D8为卡片发卡器，支持发卡：Mifare卡号、Mifare卡扇区加密、CPU卡号、CPU卡加密。
                </div>
                <div class="tip-span" style="margin:10px 0">
                    DS-K1F110-1（USB）/ DS-K1F1110-AB为身份证阅读器，可阅读身份证信息、Mifare卡卡号。
                </div>
                <div class="tip-span">
                    DS-TRD400-4为蓝牙桌面发卡器，433M蓝牙有源发卡器，蓝牙支持距离3-15CM。
                </div>
                <div class="tip-span" style="margin:10px 0">
                    DS-TRD900-1为900M无源发卡器，PRID支持距离10CM。
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div>高级配置</div>
                <div class="tip-span" style="margin:10px 0">读卡频率</div>
                <el-input placeholder="读卡频率" v-model="input1" size="small">
                        <template slot="append">毫秒</template>
                </el-input>
                <div class="tip-span" style="margin:10px 0">
                    发卡设备每隔多少时间读取一次卡片信息。
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
    name: 'cardIssuingDeviceParameters',
    data () {
        return {
            input1:'',
            deviceType: '',
            deviceOptions: [
                {
                    value: '1',
                    label: 'DS-K1F100-D8E'
                },
                {
                    value: '2',
                    label: 'DS-K1F100-D8'
                },
                {
                    value: '3',
                    label: 'DS-K1F110-1（USB）/ DS-K1F1110-AB'
                },
                {
                    value: '4',
                    label: 'DS-TRD400-4'
                },
                {
                    value: '5',
                    label: 'DS-TRD900-1'
                }
            ]
        }
    }
}
</script>

