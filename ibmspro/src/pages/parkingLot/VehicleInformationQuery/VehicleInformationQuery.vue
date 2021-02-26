/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-26 23:16:40 
 * @Desc: 车辆管控 -- 车辆信息查询
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-27 00:37:39
 */
<template>
    <div class="vehicle-information-query viq">
        <div class="vehicle-information-query-breadcrumb breadcrumb">
            <span>{{navTitle}}</span>
        </div>
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">车主姓名</div>
                        <el-input size="small" v-model="userName" placeholder="车主姓名"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">车牌号码</div>
                        <el-input size="small" v-model="licensePlateNumber" placeholder="车牌号码"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">车牌类型</div>
                        <el-select v-model="licensePlateType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in licensePlateTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-four condition">
                        <div class="tip-span margin-top-bottom">车辆类型</div>
                        <el-select v-model="vehicleType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in vehicleTypeOptions"
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
                        <div class="tip-span margin-top-bottom">车辆是否和人员绑定</div>
                        <el-select v-model="isBandPerson" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in isBandPersonOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6" style="margin-top:40px"> 
                    <el-button type="primary" size='small' @click="queryBtnAction" :disabled="queryBtnSttus">查询</el-button>
                    <el-button  size='small' @click="clearAllCondition">重置</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-table :data="tableData" v-loading="tableLoading" element-loading-text="正在查询..." border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="plateNo" label="车牌号码"></el-table-column>
                        <el-table-column prop="plateType" label="车牌类型">
                            <template slot-scope="scope">
                                <span>{{ scope.row.plateType | plateType }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="plateColor" label="车牌颜色">
                            <template slot-scope="scope">
                                <span>{{ scope.row.plateColor | plateColor }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="vehicleType" label="车辆类型">
                            <template slot-scope="scope">
                                <span>{{ scope.row.vehicleType | vehicleType }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="vehicleColor" label="车辆颜色">
                            <template slot-scope="scope">
                                <span>{{ scope.row.vehicleColor | vehicleColor }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="mark" label="描述"></el-table-column>
                        <el-table-column prop="personName" label="车主姓名"></el-table-column>
                        <el-table-column prop="phoneNo" label="联系电话"></el-table-column>
                        <!-- <el-table-column prop="tFloor" label="操作"></el-table-column> -->
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
                        :page-size="pigeSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'VehicleInformationQuery',
    data () {
        return {
            userName: '',
            licensePlateNumber: '',
            queryBtnSttus: false,
            isBandPerson: 0,
            isBandPersonOptions: [
                {
                    value: 0,
                    label: '不关联'
                },
                {
                    value: 1,
                    label: '关联'
                }
            ],
            licensePlateType: '',
            licensePlateTypeOptions: [
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 0,
                    label: '标准民用车'
                },
                {
                    value: 1,
                    label: '02式民用车牌'
                },{
                    value: 2,
                    label: '武警车车牌'
                },{
                    value: 3,
                    label: '警车车牌'
                },{
                    value: 4,
                    label: '民用车双行尾牌'
                },{
                    value: 5,
                    label: '使馆车牌'
                },{
                    value: 6,
                    label: '农用车车牌'
                },{
                    value: 7,
                    label: '摩托车'
                },{
                    value: 8,
                    label: '新能源车'
                },{
                    value: 13,
                    label: '军车车牌'
                }
            ],
            vehicleTypeOptions: [
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 0,
                    label: '其他车'
                },
                {
                    value: 1,
                    label: '小型车'
                },
                {
                    value: 2,
                    label: '大型车'
                },
                {
                    value: 3,
                    label: '摩托车'
                }
            ],
            vehicleType: '',
            tableData: [],
            currentPage: 1,
            pigeSize: 20,
            total: 0,
            tableLoading: false
        }
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.title + ' > ' + meta.currentPageTitle
        }
    },
    mounted () {
        this.getTableList()
    },
    methods: {
        clearAllCondition () {
            this.userName = ''
            this.licensePlateNumber = ''
            this.licensePlateType = ''
            this.isBandPerson = 0
            this.vehicleType = ''
        },
        queryBtnAction () {
            this.queryBtnSttus = true
            this.getTableList()
        },
        getTableList () {
            this.tableLoading = true
            let data = {
                "personName": this.userName,
                "plateNo": this.licensePlateNumber,
                "plateType": this.licensePlateType, // 车牌类型
                "pageNo": this.currentPage,
                "pageSize": this.pigeSize,
                "isBandPerson": this.isBandPerson, // 车辆是否和人员绑定，带有人员信息；0:不关联；1:关联
                "vehicleType": this.vehicleType // 车辆类型
            }
            this.$parkingLotAPI.vehicleInfoQry(data).then(res => {
                this.tableLoading = false
                this.queryBtnSttus = false
                if (res.code == 0) {
                    if (res.data.code == '0') {
                        this.total = res.data.data.total
                        this.tableData = res.data.data.list
                    } else {
                        this.$message.error(res.data.msg)
                    }
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.getTableList()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getTableList()
        }
    }
}
</script>
<style lang="scss" scoped>
    .viq {
        width: 100%;
        height: 100%;
        .breadcrumb{
            width: 100%;
            height: 34px;
            font-size: 14px;
            line-height: 34px;
            color: #666;
            padding-left: 20px;
            border-bottom: 1px solid #F3f5f7;
            box-sizing: border-box;
        }
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
        .table{
            margin-top: 10px
        }
    }
</style>
