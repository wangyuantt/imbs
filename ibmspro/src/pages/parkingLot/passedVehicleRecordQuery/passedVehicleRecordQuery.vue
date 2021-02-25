/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 20:46:14 
 * @Last Modified by: Wang Yuan
 * @Desc: 停车场--信息查询--过车记录查询
 * @Last Modified time: 2021-02-25 23:34:54
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
                            @change='choseStratTime'
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
                            @change='choseEndTime'
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
                    <el-button size='small' type="primary" @click="queryBtnAction" :disabled="queryBtnSttus">查询</el-button>
                    <el-button size='small' @click="clearAllCondition">重置</el-button>
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
                    <el-table v-loading="tableLoading" element-loading-text="正在查询..." :data="tableData" border style="width: 100%" height="600" max-height='600'>
                        <el-table-column fixed prop="plateNo" label="车牌号码"></el-table-column>
                        <el-table-column prop="cardNo" label="卡号"></el-table-column>
                        <el-table-column prop="vehicleType" label="车辆类型">
                            <template slot-scope="scope">
                                <span>{{ scope.row.vehicleType | vehicleType}}</span>
                            </template>
                        </el-table-column>
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
                        <el-table-column prop="crossTime" label="通过时间" width="150">
                            <template slot-scope="scope">
                                <span>{{ scope.row.crossTime | ISO8601Format }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="parkName" label="停车库"></el-table-column>
                        <el-table-column prop="entranceName" label="出入口"></el-table-column>
                        <el-table-column prop="vehicleOut" label="过车方向">
                            <template slot-scope="scope">
                                <span>{{ scope.row.vehicleOut | vehicleOut}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="releaseResult" label="放行结果">
                            <template slot-scope="scope">
                                <span>{{ scope.row.releaseResult | releaseResult}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="releaseWay" label="放行方式">
                            <template slot-scope="scope">
                                <span>{{ scope.row.releaseWay | releaseWay}}</span>
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
                        :page-sizes="[20, 40, 80, 100]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'passedVehicleRecordQuery',
    data () {
        return {
            licensePlateNumber: '',
            cardNumber: '',
            startingTime: '',
            endingTime: '',
            currentPage: 1,
            pageSize: 20,
            total: 0,
            queryBtnSttus: false,
            tableLoading: false,
            tableData: [],
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
        this.gerRecordTableList()
    },  
    methods: {
        queryBtnAction () {
            this.queryBtnSttus = true
            this.gerRecordTableList()
        },
        clearAllCondition () {
            this.licensePlateNumber = ''
            this.cardNumber = ''
            this.startingTime = ''
            this.endingTime = ''
            this.entrance = ''
            this.parkingGarage = ''
        },
        gerRecordTableList () {
            this.tableLoading = true
            let data = {
                parkSyscode: this.parkingGarage, // 停车库唯一标识
                entranceSyscode: this.entrance, // 出入口唯一标识
                plateNo: this.licensePlateNumber, // 车牌
                cardNo: this.cardNumber, // 卡号
                startTime: this.startingTime, // 查询开始时间  SO8601格式：yyyy-MM-ddTHH:mm:ss+当前时区，例如北京时间：2018-07-26T15:00:00+08:00
                endTime: this.endingTime, // 查询结束时间 
                pageNo: this.currentPage, // true
                pageSize: this.pageSize, // true (0, 1000]
                // vehicleOut: '', // 进出场标识 0:进场，1:出场
                // vehicleType: '', // 车辆类型 0：其他车 1：小型车 2：大型车 3：摩托车
                // releaseResult: '', // 放行结果 0-未放行 1-正常放行 2-离线放行
                // releaseWay: '', // 放行方式 10-未开闸 11-自动开闸 12-人工/人工开闸 13-遥控器开闸
                // releaseReason: '', // 放行原因 100-固定车自动放行 101-临时车自动放行 102-预约车自动放行 103-一户多车自动放行
                // carCategory: '', // 车辆分类  9-黑名单 10-固定车 11-临时车 12-预约车 14-特殊车
            }
            this.$parkingLotAPI.passedVehRecQry(data).then(res => {
                this.tableLoading = false
                this.queryBtnSttus = false
                if (res.code === 0) {
                    if (res.data.code === '0') {
                        this.total = res.data.data.total
                        this.tableData = res.data.data.list
                    } else {
                        this.tableData = []
                        this.$message.error(res.data.msg)
                    }
                } else {
                    this.$message.error(res.msg)
                } 
            })
        },
        choseStratTime () {
            let _startTime = this.$moment(this.startingTime).format()
            this.startingTime = _startTime
        },
        choseEndTime () {
            let _endTime = this.$moment(this.endingTime).format()
            this.endingTime = _endTime
        },
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
            this.pageSize = val
            this.gerRecordTableList()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.gerRecordTableList()
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

