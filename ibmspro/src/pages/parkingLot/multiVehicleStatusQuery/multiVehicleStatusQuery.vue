/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 22:53:08 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 23:16:26
 */
<template>
    <div class="multi-vehicle-status-query">
        <div class="search-condition">
            <el-row>
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
                 <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">车主姓名</div>
                        <el-input size="small" v-model="OwnerName" placeholder="请输入车牌号码"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">车牌号码</div>
                        <el-input size="small" v-model="licensePlateNumber" placeholder="请输入车牌号码"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-six condition">
                        <div class="tip-span margin-top-bottom">所属组织</div>
                        <el-select v-model="organization" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in organizationOptions"
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
                        <div class="tip-span margin-top-bottom">在场状态</div>
                        <el-select v-model="presenceStatus" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in presenceStatusOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-six condition">
                        <div class="tip-span margin-top-bottom">占位状态</div>
                        <el-select v-model="occupationStatus" placeholder="请选择" size="small" style="width:90%">
                            <el-option
                            v-for="item in occupationStatusOptions"
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
                        <el-table-column prop="tOwnerName" label="车主姓名"></el-table-column>
                        <el-table-column prop="tPhoneNum" label="手机号码"></el-table-column>
                        <el-table-column prop="torganization" label="所属组织"></el-table-column>
                        <el-table-column prop="tParkNum" label="车位数"></el-table-column>
                        <el-table-column prop="tLastParkNum" label="剩余车位数"></el-table-column>
                        <el-table-column prop="tLicenseNum" label="车牌号码"></el-table-column>
                        <el-table-column prop="tValidPeriod" label="有效期"></el-table-column>
                        <el-table-column prop="tCarType" label="在场状态">
                            <template>
                                <!-- <div class="off">
                                    <span class="point-off"></span>
                                    <span class="status-text">离场</span>
                                </div> -->
                                <div class="on">
                                    <span class="point-on"></span>
                                    <span class="status-text">在场</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tSnapPicture" label="占位状态">
                            <template>
                                <!-- <div class="off">
                                    <span class="point-off"></span>
                                    <span class="status-text">未占位</span>
                                </div> -->
                                <div class="on">
                                    <span class="snap-on"></span>
                                    <span class="status-text">已占位</span>
                                </div>
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
    name: 'multiVehicleStatusQuery',
    data () {
        return {
            OwnerName: '',
            licensePlateNumber: '',
            organization: '0',
            currentPage: 1,
            tValidPeriod: '2020-09-08--2021-09-02',
            occupationStatus: '0',
            occupationStatusOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '未占位'
                },
                {
                    value: '2',
                    label: '已占位'
                }
            ],
            presenceStatus: '0',
            presenceStatusOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '在场'
                },
                {
                    value: '2',
                    label: '离场'
                }
            ],
            tableData: [
                {
                    tOwnerName: 'AASSS',
                    tPhoneNum: '166****8478',
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
            organizationOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '南苑'
                },
                {
                    value: '2',
                    label: '东苑'
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
.multi-vehicle-status-query {
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
    .table{
        .off {
            .point-off{
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #999;
            }
        }
        .on {
            .point-on{
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #67C23A;
            }
            .snap-on{
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #F56C6C;
            }
        }
    }
    
    
}
</style>

