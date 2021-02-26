/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 14:37:28 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-27 00:59:47
 */
<template>
    <div class="account-recharge-and-refund-record-query">
        <div class="search-condition">
            <el-row>
                <el-col :span="6">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">账户（车主）</div>
                        <el-input size="small" v-model="owener" placeholder="账户"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">收支类型</div>
                        <el-select v-model="incomeAndExpenditureType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in incomeAndExpenditureTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">收支方式</div>
                        <el-select v-model="incomeAndExpenditureMethod" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in incomeAndExpenditureMethodOptions"
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
                            @change='choseStratTime'
                            v-model="startingTime"
                            type="datetime"
                            size="small"
                            placeholder="选择开始时间">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
            <el-row>
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
                <el-col :span="6" style="margin-top:40px">
                    <el-button size='small' type="primary" @click="queryBtnAction" :disabled="queryBtnSttus">查询</el-button>
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
                    <el-table :data="tableData" v-loading="tableLoading" element-loading-text="正在查询..."  border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="account" label="账户（车主）"></el-table-column>
                        <el-table-column prop="fee" label="重置(+)/退款(-)（元）"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="收支类型">
                            <template slot-scope="scope">
                                <span>{{ scope.row.tradeType | tradeType}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tradeWay" label="收支方式">
                            <template slot-scope="scope">
                                <span>{{ scope.row.tradeWay | tradeWay}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tradeTime" label="操作时间">
                            <template slot-scope="scope">
                                <span>{{ scope.row.tradeTime | ISO8601Format }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="operator" label="操作员"></el-table-column>
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
    name: 'accountRechargeAndRefundRecordQuery',
    data () {
        return {
            currentPage: 1,
            pageSize: 20,
            total: 0,
            queryBtnSttus: false,
            tableLoading: false,
            owener: '', 
            startingTime: '',
            endingTime: '',
            operator: '',
            tableData: [],
            operatorOptions: [
                {
                    value: '',
                    label: '全部'
                }
            ],
            incomeAndExpenditureType: null,
            incomeAndExpenditureTypeOptions: [
                {
                    value: null,
                    label: '全部'
                },
                {
                    value: 0,
                    label: '退款'
                },
                {
                    value: 1,
                    label: '充值'
                }
            ],
            incomeAndExpenditureMethod: null,
            incomeAndExpenditureMethodOptions: [
                {
                    value: null,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '现金'
                },
                {
                    value: 4,
                    label: '支付宝'
                },
                {
                    value: 5,
                    label: '微信'
                }
            ],
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
                "account": this.owener,
                "tradeType": this.incomeAndExpenditureType, // 交易类型 0：充值 1：退款
                "tradeWay": this.incomeAndExpenditureMethod, // 交易方式 1：现金 4：支付宝 5：微信
                "startTime": this.startingTime,
                "endTime": this.endingTime,
                "operator": this.operator, // 收费员名称
                "pageNo": this.currentPage,
                "pageSize": this.pageSize
            }
            this.$parkingLotAPI.accountRecAndRefRecQry(data).then(res => {
                this.tableLoading = false
                this.queryBtnSttus = false
                if (res.code === 0) {
                    if (res.data.code && res.data.code === '0') {
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
            let _startTime = this.$moment(this.startingTime).format()
            this.startingTime = _startTime
        },
        choseEndTime () {
            let _endTime = this.$moment(this.endingTime).format()
            this.endingTime = _endTime
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
    .account-recharge-and-refund-record-query {
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
