/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 20:51:00 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 21:15:42
 */
<template>
    <div class="permission-download-record pdr">
        <div class="permission-download-record breadcrumb">
            <span>{{navTitle}}</span>
        </div>
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">任务编号</div>
                        <el-input size="small" v-model="taskNumber" placeholder="任务编号"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">控制器</div>
                        <el-input size="small" v-model="controller" placeholder="控制器"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">门禁点</div>
                        <el-input size="small" v-model="accessPoint" placeholder="门禁点"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">所在区域</div>
                        <el-input size="small" v-model="region" placeholder="所在区域"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">操作员</div>
                        <el-select v-model="downloadType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in downloadTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">下载开始时间</div>
                        <el-date-picker
                            style="width:100%"
                            v-model="startingTime"
                            type="datetime"
                            size="small"
                            placeholder="下载开始时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">下载结束时间</div>
                        <el-date-picker style="width:100%"
                            v-model="endingTime"
                            type="datetime"
                            size="small"
                            placeholder="下载结束时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="4" style="margin-top:40px">
                    <div class="condition-one condition">
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
                        <el-table-column prop="tLicenseNum" label=任务编码></el-table-column>
                        <el-table-column prop="tParkingLot" label="控制器/门禁点"></el-table-column>
                        <el-table-column prop="tParkingNumber" label="所在区域"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="下载类型"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="下载结果"></el-table-column>
                        <el-table-column prop="tFloor" label="下载开始时间"></el-table-column>
                        <el-table-column prop="tFloor" label="下载结束时间"></el-table-column>
                        <el-table-column prop="tFloor" label="描述"></el-table-column>
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
    name: 'permissionDownloadRecord',
    data () {
        return {
            currentPage: 1,
            startingTime: '',
            endingTime: '',
            taskNumber: '',
            controller: '',
            accessPoint: '',
            region: '',
            downloadType: '0',
            downloadTypeOptions: [
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
.pdr{
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
        margin-top: 10px;
        margin-bottom: 5px;
    }
}
</style>

