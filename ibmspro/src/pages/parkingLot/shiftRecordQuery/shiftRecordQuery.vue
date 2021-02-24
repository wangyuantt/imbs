/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 16:34:38 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 16:42:49
 */
<template>
    <div class="shift-record-query">
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-three condition">
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
                <el-col :span="6">
                    <div class="condition-four condition">
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
                    <div class="condition-five condition">
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
                    <div class="condition-three condition">
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
            </el-row>
            <el-row style="margin-top:10px;">
                <el-col :span="24" style="padding-left:15px"> 
                    <el-button type="primary" size='small'>查询</el-button>
                    <el-button  size='small'>重置</el-button>
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
                        <el-table-column prop="tParkingLot" label="停车库"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="开始时间"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="结束时间"></el-table-column>
                        <el-table-column prop="tFloor" label="应收金额"></el-table-column>
                        <el-table-column prop="tFloor" label="优惠金额"></el-table-column>
                        <el-table-column prop="tFloor" label="全免金额"></el-table-column>
                        <el-table-column prop="tFloor" label="实收金额"></el-table-column>
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
    name: 'shiftRecordQuery',
    data () {
        return {
            currentPage: 1,
            tableData: [],
            startingTime: '',
            endingTime: '',
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
            parkingGarage: '0'
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
    .shift-record-query {
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

