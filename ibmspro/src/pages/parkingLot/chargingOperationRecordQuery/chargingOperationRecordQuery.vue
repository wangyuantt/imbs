/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 16:43:59 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 21:22:45
 */
<template>
    <div class="chargin-operation-record-query">
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
                        <div class="tip-span margin-top-bottom">开始时间</div>
                        <el-date-picker
                            style="width:100%"
                            v-model="startingTime"
                            type="datetime"
                            size="small"
                            placeholder="选择开始时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">结束时间</div>
                        <el-date-picker style="width:100%"
                            v-model="endingTime"
                            type="datetime"
                            size="small"
                            placeholder="选择结束时间">
                        </el-date-picker>
                    </div>
                </el-col>
                    <el-col :span="6">
                    <div class="condition-four condition">
                        <div class="tip-span margin-top-bottom">操作员</div>
                        <el-select v-model="operator" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in operatorOptions"
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
                    <div class="condition-five condition">
                        <div class="tip-span margin-top-bottom">停车库</div>
                        <el-select v-model="parkingGarage" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in parkingGarageOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-six condition">
                        <div class="tip-span margin-top-bottom">客户端类型</div>
                        <el-select v-model="clientType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in clientTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-seven condition">
                        <div class="tip-span margin-top-bottom">金额不等</div>
                        <el-select v-model="moneyDiff" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in moneyDiffOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6" style="margin-top:40px">
                    <div class="condition-three condition">
                        <el-button type="primary" size='small'>查询</el-button>
                        <el-button  size='small'>重置</el-button>
                    </div>
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
                        <el-table-column prop="tLicenseNum" label="操作员"></el-table-column>
                        <el-table-column prop="tParkingLot" label="出场时间"></el-table-column>
                        <el-table-column prop="tParkingNumber" label="客户端类型"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="车辆图片"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="原车牌"></el-table-column>
                        <el-table-column prop="tFloor" label="新车牌"></el-table-column>
                        <el-table-column prop="tFloor" label="匹配车辆"></el-table-column>
                        <el-table-column prop="tFloor" label="原车辆类型"></el-table-column>
                        <el-table-column prop="tFloor" label="现车辆类型"></el-table-column>
                        <el-table-column prop="tFloor" label="原收费金额"></el-table-column>
                        <el-table-column prop="tFloor" label="现收费金额"></el-table-column>
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
    name: 'chargingOperationRecordQuery',
    data () {
        return {
            currentPage: 1,
            tableData: [],
            licensePlateNumber: '',
            startingTime: '',
            endingTime: '',
            moneyDiff: '0',
            moneyDiffOptions: [
                {
                    value: '0',
                    label: '是'
                },
                {
                    value: '1',
                    label: '否'
                }
            ],
            operator: '0',
            operatorOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '前台'
                }
            ],
            parkingGarageOptions: [
                {
                    value: '0',
                    label: '全部'
                }
            ],
            parkingGarage: '0',
            clientType: '0',
            clientTypeOptions: [
                {
                    value: '0',
                    label: '全部'
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
    .chargin-operation-record-query {
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
