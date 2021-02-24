/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 15:21:52 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 15:29:11
 */
<template>
    <div class="appointment-record-query">
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">车牌号码</div>
                        <el-input size="small" v-model="licensePlateNumber" placeholder="车牌号码"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">联系电话</div>
                        <el-input size="small" v-model="phoneNumber" placeholder="联系电话"></el-input>
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
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">预约状态</div>
                        <el-select v-model="reservationStatus" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in reservationStatusOptions"
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
                        <el-table-column prop="tLicenseNum" label="车牌号码"></el-table-column>
                        <el-table-column prop="tParkingLot" label="联系人"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="联系电话"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="预约时间"></el-table-column>
                        <el-table-column prop="tFloor" label="停车库"></el-table-column>
                        <el-table-column prop="tFloor" label="预约状态"></el-table-column>
                        <el-table-column prop="tFloor" label="允许进入次数"></el-table-column>
                        <el-table-column prop="tFloor" label="是否收费"></el-table-column>
                        <el-table-column prop="tFloor" label="预约来源"></el-table-column>
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
    name: 'appointmentRecordQuery',
    data () {
        return {
            currentPage: 1,

            tableData: [],
            licensePlateNumber: '',
            phoneNumber: '',
            reservationStatus: '0',
            reservationStatusOptions: [
                {
                    value: '0',
                    label: '全部'
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
    .appointment-record-query {
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
