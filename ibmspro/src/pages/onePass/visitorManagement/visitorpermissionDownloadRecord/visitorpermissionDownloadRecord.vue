/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 23:23:42 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 23:45:08
 */
<template>
    <div class="visitor-permission-download-record vpdr">
        <div class="visitor-appointment-breadcrumb breadcrumb">
            <span>{{navTitle}}</span>
        </div>
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">姓名</div>
                        <el-input size="small" v-model="userName" placeholder="姓名"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">登记时间</div>
                        <el-date-picker
                            style="width:100%"
                            v-model="checkInTime"
                            type="datetime"
                            size="small"
                            placeholder="选择预计来访时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6" >
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">授权类型</div>
                        <el-select v-model="authorizationType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in authorizationTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-table :data="tableData" border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="tLicenseNum" label="姓名"></el-table-column>
                        <el-table-column prop="tParkingLot" label="登记时间"></el-table-column>
                        <el-table-column prop="tParkingNumber" label="预计离开时间"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="授权类型"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="授权号码"></el-table-column>
                        <el-table-column prop="tFloor" label="设备"></el-table-column>
                        <el-table-column prop="tFloor" label="资源点名称"></el-table-column>
                        <el-table-column prop="tFloor" label="被访对象"></el-table-column>
                        <el-table-column prop="tFloor" label="权限状态"></el-table-column>
                        <el-table-column prop="tFloor" label="操作"></el-table-column>
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
    name: 'visitorpermissionDownloadRecord',
    data () {
        return {
            userName: '',
            checkInTime: '',
            authorizationType: '0',
            authorizationTypeOptions: [
                {
                    value: '0',
                    label: '全部'
                }
            ],
            tableData: [],
            currentPage: 1
        }
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.subTitle + ' > ' + meta.currentPageTitle
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
.vpdr {
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