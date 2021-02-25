/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 20:46:14 
 * @Last Modified by: Wang Yuan
 * @Desc: 停车场--信息查询--过车记录查询
 * @Last Modified time: 2021-02-25 20:21:57
 */
<template>
    <div class="passed-vehicler-ecord-query pveq">
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
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">停车库</div>
                        <el-select v-model="parkingGarage" @change="choseParkingGarage" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in parkingGarageOptions"
                            :key="item.parkIndexCode"
                            :label="item.parkName"
                            :value="item.parkIndexCode">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-four condition">
                        <div class="tip-span margin-top-bottom">开始时间</div>
                        <el-date-picker
                            v-model="startingTime"
                            type="datetime"
                            size="small"
                            placeholder="选择开始时间">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="condition-five condition">
                        <div class="tip-span margin-top-bottom">结束时间</div>
                        <el-date-picker
                            v-model="endingTime"
                            type="datetime"
                            size="small"
                            placeholder="选择结束时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-six condition">
                        <div class="tip-span margin-top-bottom">出入口</div>
                        <el-select v-model="entrance" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in entranceOptions"
                            :key="item.parkIndexCode"
                            :label="item.parkName"
                            :value="item.parkIndexCode">
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
                        <el-table-column prop="tCardNum" label="卡号"></el-table-column>
                        <el-table-column prop="tLicensePicture" label="车辆类型"></el-table-column>
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
                        <el-table-column prop="tSnapPicture" label="抓拍图片">
                            <template>
                                <el-image
                                    src="e e"
                                    fit="fit">
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tPassingTime" label="通过时间"></el-table-column>
                        <el-table-column prop="tParkingLot" label="停车库"></el-table-column>
                        <el-table-column prop="tEnter" label="出入口"></el-table-column>
                        <el-table-column prop="tPassingDirection" label="过车方向"></el-table-column>
                        <el-table-column prop="tReleaseResult" label="放行结果"></el-table-column>
                        <el-table-column prop="tReleaseMethod" label="放行方式"></el-table-column>
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
    name: 'passedVehicleRecordQuery',
    data () {
        return {
            licensePlateNumber: '',
            cardNumber: '',
            startingTime: '',
            endingTime: '',
            currentPage: 1,
            tableData: [
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                },
                {
                    tLicenseNum: '浙A88888',
                    tCardNum: '1234567890',
                    tCarType: '其他车',
                    tLicensePicture: '',
                    tSnapPicture: '',
                    tPassingTime: '2020-02-05 10:42:33',
                    tParkingLot: '东苑',
                    tEnter: '南苑停车场',
                    tPassingDirection: '入库',
                    tReleaseResult: '正常放行',
                    tReleaseMethod: '自动开闸'
                }

            ],
            entrance: '',
            entranceOptions: [
                {
                    parkIndexCode: '',
                    parentParkIndexCode: null,
                    parkName: '全部'
                }
            ],
            parkingGarage: '',
            parkingGarageOptions: [
                {
                    parkIndexCode: '',
                    parentParkIndexCode: null,
                    parkName: '全部'
                }
            ]
        }
    },
    mounted () {
        this.getConditionParams()
    },  
    methods: {
        getConditionParams () {
            this.getParkList()
        },
        getParkList () {
            let data = {
                "parkIndexCodes": "" // 停车库唯一标识集合 7e09fddb66264eaab4146ef2d6dadbbb
            }
            this.$commonAPI.getParkList(data).then(res => {
                if (res.code === 0) {
                    if (res.data.code === '0') {
                        if (res.data.data.length === 0) {
                            this.parkingGarageOptions = []
                        } else {
                            this.parkingGarageOptions = this.parkingGarageOptions.concat(res.data.data)
                        }
                    } else {
                        this.parkingGarageOptions = []
                        this.$message.error(res.data.msg)
                    }
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        choseParkingGarage (val) {
            this.getEntranceList(val)
        },
        getEntranceList (parkIndexCodes) {
            let data = {
                "parkIndexCodes": parkIndexCodes // 停车场唯一标识集 多个值使用英文逗号分隔,不超过1000个，可通过获取停车库列表接口获取
            }
            this.entranceOptions = [{
                    parkIndexCode: '',
                    parentParkIndexCode: null,
                    parkName: '全部'
                }]
            this.entrance  = ''
            this.$commonAPI.getParkList(data).then(res => {
                if (res.code === 0) {
                    if (res.data.code === '0') {
                        if (res.data.data.length === 0) {
                            this.entranceOptions = []
                        } else {
                            this.entranceOptions = this.entranceOptions.concat(res.data.data)
                        }
                    } else {
                        this.entranceOptions = []
                        this.$message.error(res.data.msg)
                    }
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
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
.passed-vehicler-ecord-query {
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

