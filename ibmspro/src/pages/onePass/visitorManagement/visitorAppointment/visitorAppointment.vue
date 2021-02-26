/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 22:45:41
 * @Desc: 访客管理 > 访客预约 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-26 16:35:50
 */
<template>
    <div class="visitor-appointment va">
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
                        <div class="tip-span margin-top-bottom">预计来访时间</div>
                        <el-date-picker
                            style="width:100%"
                            @change='choseStratTime'
                            v-model="appointmentStartTime"
                            type="datetime"
                            size="small"
                            placeholder="选择预计来访时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">预计离开时间</div>
                        <el-date-picker
                            style="width:100%"
                            @change='choseEndTime'
                            v-model="appointmentEndTime"
                            type="datetime"
                            size="small"
                            placeholder="选择预计离开时间">
                        </el-date-picker>
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
                        <el-table-column prop="gender" label="性别">
                            <template slot-scope="scope">
                                <span>{{ scope.row.gender | gender}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="phoneNo" label="手机号码"></el-table-column>
                        <el-table-column prop="certificateNo" label="访客验证码"></el-table-column>
                        <el-table-column prop="receptionistName" label="被访对象"></el-table-column>
                        <el-table-column prop="receptionistCode" label="所属组织"></el-table-column>
                        <el-table-column prop="visitPurpose" label="来访是由"></el-table-column>
                        <el-table-column prop="visitorStatus" label="状态">
                            <template slot-scope="scope">
                                <span>{{ scope.row.visitorStatus | visitorStatus}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="visitStartTime" label="预计来访时间">
                            <template slot-scope="scope">
                                <span>{{ scope.row.visitStartTime | ISO8601Format}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="visitEndTime" label="预计离开时间">
                            <template slot-scope="scope">
                                <span>{{ scope.row.visitEndTime | ISO8601Format}}</span>
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
export default {
    name: 'visitorAppointment',
    data () {  
        return { 
            currentPage: 1,
            pageSize: 20,
            total: 0,
            userName: '',
            appointmentStartTime: '',
            appointmentEndTime: '',
            tableData: [],
            tableLoading: false,
            queryBtnSttus: false
        } 
    },
    mounted () {
        console.log(this.$route)
        this.getTableList()
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.subTitle + ' > ' + meta.currentPageTitle
        }
    },
    methods: {
        queryBtnAction () {
            this.queryBtnSttus = true
            this.getTableList()
        },
        getTableList () {
            this.tableLoading = true
            let data = {
                // receptionistId: '', // true 被访人唯一标识，从 获取人员列表v2 接口获取返回参数personId
                visitorName: this.userName, // 访客姓名，支持中英文字符，不能包含 ’ / \ : * ? " < >
                // phoneNo: '', // 联系电话建议填写手机号码
                visitStartTimeBegin: this.appointmentStartTime, // 预计来访开始时间
                visitStartTimeEnd: this.appointmentEndTime, // 预计来访结束时间
                // visitEndTimeBegin: '', // 预计离开开始时间
                // visitEndTimeEnd: '', // 预计离开结束时间
                pageNo: this.currentPage,
                pageSize: this.pageSize,
                // QRCode: '', // 访客二维码内容,支持动态二维码或历史版本接口返回的静态二维码要求二维码图片的生成采用QRCode编码、纠错等级为L，版本大于等于5
                // orderId: '', // 访客记录唯一标识，对应预约或修改时返回的orderId字段
            }
            this.$visitorManagementAPI.appointmentRecords(data).then(res => {
                this.tableLoading = false
                this.queryBtnSttus = false
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
        choseStratTime () {
            let _startTime = this.$moment(this.appointmentStartTime).format()
            this.appointmentStartTime = _startTime
        },
        choseEndTime () {
            let _endTime = this.$moment(this.appointmentEndTime).format()
            this.appointmentEndTime = _endTime
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
            this.appointmentStartTime = ''
            this.appointmentEndTime = ''
        }
    }
}
</script>
<style lang="scss" scoped>
.va {
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

