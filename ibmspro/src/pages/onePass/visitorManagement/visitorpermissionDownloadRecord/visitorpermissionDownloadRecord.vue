/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 23:23:42
 * @Desc: 访客权限下载记录   
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-26 21:22:05
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
                            @change="choseCheckinTime"
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
                <el-col :span="6" style="margin-top:40px">
                    <div class="condition-three condition">
                        <el-button type="primary" size='small' @click="queryBtnAction" :disabled="queryBtnSttus">查询</el-button>
                        <el-button  size='small' @click="clearAllCondition">重置</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-table :data="tableData" v-loading="tableLoading" element-loading-text="正在查询..." border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="visitorName" label="姓名"></el-table-column>
                        <el-table-column prop="" label="登记时间"></el-table-column>
                        <el-table-column prop="" label="预计离开时间"></el-table-column>
                        <el-table-column prop="authType" label="授权类型">
                            <template slot-scope="scope">
                                <span>{{ scope.row.authType | authType}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="authNo" label="授权号码"></el-table-column>
                        <el-table-column prop="deviceDesc" label="设备"></el-table-column>
                        <el-table-column prop="doorDesc" label="资源点名称"></el-table-column>
                        <el-table-column prop="" label="被访对象"></el-table-column>
                        <el-table-column prop="authStatus" label="权限状态"></el-table-column>
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
export default {
    name: 'visitorpermissionDownloadRecord',
    data () {
        return {
            userName: '',
            checkInTime: '',
            authorizationType: '',
            authorizationTypeOptions: [
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 0,
                    label: '身份证'
                },
                {
                    value: 1,
                    label: '身份证序列号'
                },
                {
                    value: 2,
                    label: 'IC卡号'
                },
                {
                    value: 3,
                    label: '二维码'
                },
                {
                    value: 4,
                    label: '车牌号'
                },
                {
                    value: 5,
                    label: '人脸'
                }
            ],
            queryBtnSttus: false,
            tableData: [],
            currentPage: 1,
            pageSize: 20,
            total: 0,
            tableLoading: false
        }
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.subTitle + ' > ' + meta.currentPageTitle
        }
    },
    mounted () {
        this.getTableList()
    },
    methods: {
        queryBtnAction () {
            this.queryBtnSttus = true
            this.getTableList()
        },
        getTableList () {
            this.tableLoading = true
            let data = {
                "orderId": "", // true 访客记录id，从查询访客来访记录v2接口获取返回参数中的orderId
                "pageNo": this.currentPage,
                "pageSize": this.pageSize
            }
            this.$visitorManagementAPI.visitorPerDownRecQry(data).then(res => {
                this.queryBtnSttus = false
                this.tableLoading = false
                if (res.code === 0) {
                    if (res.data.code == '0') {
                        this.total = res.data.data.total
                        this.tableData = res.data.data.list
                    } else { 
                        this.tableData = []
                        this.$message.error(res.data.message) 
                    }
                } else {
                    this.tableData = []
                    this.$message.error(res.msg)
                }
            })
        },
        choseCheckinTime () {
            let _startTime = this.$moment(this.checkInTime).format()
            this.checkInTime = _startTime
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.getTableList()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getTableList()
        },
        clearAllCondition () {
            this.userName = ''
            this.checkInTime = ''
            this.authorizationType = ''
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