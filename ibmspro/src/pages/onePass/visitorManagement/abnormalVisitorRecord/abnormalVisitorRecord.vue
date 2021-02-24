/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 23:12:30 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 23:21:46
 */
<template>
    <div class="abnormal-visitor-record avr">
        <div class="abnormal-visitor-record-breadcrumb breadcrumb">
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
                        <div class="tip-span margin-top-bottom">事件时间</div>
                        <el-date-picker
                            style="width:100%"
                            v-model="eventStartTime"
                            type="datetime"
                            size="small"
                            placeholder="选择事件时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">名单分组</div>
                        <el-input size="small" v-model="listGrouping" placeholder="名单分组"></el-input>
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
         <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-table :data="tableData" border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="tLicenseNum" label="姓名"></el-table-column>
                        <el-table-column prop="tParkingLot" label="性别"></el-table-column>
                        <el-table-column prop="tParkingNumber" label="授权号码"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="授权类型"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="记录设备"></el-table-column>
                        <el-table-column prop="tFloor" label="记录位置"></el-table-column>
                        <el-table-column prop="tFloor" label="事件时间"></el-table-column>
                        <el-table-column prop="tFloor" label="事件描述"></el-table-column>
                        <el-table-column prop="tFloor" label="名单分组"></el-table-column>
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
    name: 'abnormalVisitorRecord',
    data () {
        return {
            currentPage: 1,
            userName: '',
            eventStartTime: '',
            listGrouping: '',
            tableData: []
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
.avr {
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
    .table {
        margin-top: 10px
    }
}
</style>
