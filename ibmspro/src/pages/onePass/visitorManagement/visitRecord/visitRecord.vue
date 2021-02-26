/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 23:05:03 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-27 01:03:50
 */
/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 22:45:41
 * @Desc: 访客管理 > 来访记录
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 23:03:45
 */
<template>
    <div class="visitor-record vr">
        <div class="visitor-record-breadcrumb breadcrumb">
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
                            @change="choseStratTime"
                            v-model="visitStartTime"
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
                            @change="choseEndTime"
                            v-model="visitEndTime"
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
                        <el-table-column prop="tParkingStatus" label="访客验证码"></el-table-column>
                        <el-table-column prop="receptionistName" label="被访对象"></el-table-column>
                        <el-table-column prop="visitorWorkUnit" label="所属组织"></el-table-column>
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
                        <el-table-column prop="privilegeGroupNames" label="名单分组">
                            <template slot-scope="scope">
                                <span v-for="(item ,index) in scope.row.privilegeGroupNames" :key="index">
                                    {{item}}
                                </span>
                            </template>
                        </el-table-column>
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
    name: 'visitRecord',
    data () {  
        return { 
            currentPage: 1,
            pageSize: 20,
            total: 0,
            queryBtnSttus: false,
            userName: '',
            visitStartTime: '',
            visitEndTime: '',
            tableLoading: false,
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
        clearAllCondition () {
            this.userName = ''
            this.visitStartTime = ''
            this.visitEndTime = ''
        },
        queryBtnAction () {
            this.queryBtnSttus = true
            this.getTableList()
        },
        getTableList () {
            this.tableLoading = true
            let data = {
                "visitorName": this.userName, // 访客姓名，支持中英文字符，不能包含 ’ / \ : * ? " < >
                "pageNo": this.currentPage,
                "pageSize": this.pageSize,
                "visitStartTimeBegin": this.visitStartTime, // 来访时间查询时间段条件的开始时间
                "visitStartTimeEnd": this.visitEndTime, // 来访时间查询时间段条件的结束时间
                // "receptionistId": "", // 被访人ID，从 获取人员列表v2 接口获取返回参数personId
                // "receptionistName": "", // 被访人姓名，支持中英文字符，不能包含 ’ / \ : * ? " < >
                // "phoneNo": "", // 访客联系电话建议填写手机号码
                // "visitorStatus": 8, // 5：超期自动签离 6：已签离 7：超期未签离 8：已到达
                // "visitEndTimeBegin": "2018-07-30T15:00:00+ 08:00", // 离开时间查询时间段条件的开始时间
                // "visitEndTimeEnd": "2018-07-30T19:00:00+08:00", // 离开时间查询时间段条件的结束时间
                // "cardNo": "564565654", // 卡号，8-20位数字、大写字母
                // "orderId": "hwqivh802yuh341cx54c", // 访客记录id
                // "QRCode": "1234567890" // 访客二维码内容,支持动态二维码或历史版本接口返回的静态二维码
            }
            this.$visitorManagementAPI.visitRecord(data).then(res => {
                this.tableLoading = false
                this.queryBtnSttus = false
                if (res.code == 0) {
                    if (res.data.code == '0') {
                        this.total = res.data.data.total
                        this.tableData = res.data.data.list
                    } else {
                        this.tableData = []
                        this.$message.error(res.data.message)
                    }
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        choseStratTime () {
            let _startTime = this.$moment(this.visitStartTime).format()
            this.visitStartTime = _startTime
        },
        choseEndTime () {
            let _endTime = this.$moment(this.visitEndTime).format()
            this.visitEndTime = _endTime
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
.vr {
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
