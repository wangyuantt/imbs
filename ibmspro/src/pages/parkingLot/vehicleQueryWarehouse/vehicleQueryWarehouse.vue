/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 22:02:13 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 22:24:40
 */
<template>
    <div class="vehicle-warehouse-query">
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">车牌号码</div>
                        <el-input size="small" v-model="licensePlateNumber" placeholder="请输入车牌号码"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">卡号</div>
                        <el-input size="small" v-model="cardNumber" placeholder="请输入卡号"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">识别准确度小于</div>
                        <el-slider v-model="recognitionAccuracy" :max="sliderMax"></el-slider>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">停车库</div>
                        <el-select v-model="parkingGarage" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in parkingGarageOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="condition-six condition">
                        <div class="tip-span margin-top-bottom">放行结果</div>
                        <el-select v-model="releaseResult" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in releaseResultOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="12" style="margin-top:40px">
                    <el-button size='small' type="primary">查询</el-button>
                    <el-button size='small'>重置</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="export flex-start">
            <span class="iconfont i-font">&#xe641;</span>
            <span>导出</span>
        </div>
        <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-table :data="tableData" border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="tLicenseNum" label="车牌号码"></el-table-column>
                        <el-table-column prop="tCarType" label="车牌图片">
                            <template>
                                <el-image
                                    src=";;"
                                    fit="fit">
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tRecognitionAccuracy" label="识别准确度"></el-table-column>
                        <el-table-column prop="tCardNum" label="卡号"></el-table-column>
                        <el-table-column prop="tLicensePicture" label="车辆类型"></el-table-column>
                        <el-table-column prop="tReleaseResult" label="放行结果"></el-table-column>
                        <el-table-column prop="tParkingLot" label="停车库"></el-table-column>
                        <el-table-column prop="tEnterTime" label="入场时间"></el-table-column>


                        <el-table-column prop="tTotalTime" label="总时长"></el-table-column>
                        <el-table-column label="操作">
                            <template>
                                <span class="iconfont pointer" style="padding:0 10px 0 5px">&#xe70e;</span>
                                <span class="iconfont pointer">&#xe65c;</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
        <div class="pagination" style="margin-top:5px">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="4000">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vehicleQueryWarehouse',
    data () {
        return {
            licensePlateNumber: '',
            cardNumber: '',
            recognitionAccuracy: 100,
            sliderMax: 100,
            releaseResult: '0',
            currentPage: 1,
            tableData: [
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tRecognitionAccuracy: '90%',
                    tSnapPicture: '',
                    tEnterTime: '2020-02-05 10:42:33',
                    tTotalTime: '1分钟',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                }
            ],
            releaseResultOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '正常放行'
                },
                {
                    value: '2',
                    label: '禁止放行'
                }
            ],
            parkingGarage: '0',
            parkingGarageOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '东苑'
                },{
                    value: '2',
                    label: '南苑'
                },{
                    value: '3',
                    label: '西苑'
                },{
                    value: '4',
                    label: '北苑'
                }
            ]
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>
<style lang="scss" scoped>
.vehicle-warehouse-query {
    .search-condition{
        width: 100%;
        min-width: 100px;
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
        .condition{
            width: 90%;
            padding-left:6%
        }
    }
    .export{
        width: 100%;
        height: 50px;
        cursor: pointer;
        color: #999;
        font-size: 14px;
        .i-font{
            margin: 0 6px 0 18px;
        }
    }
    
}    
</style>
