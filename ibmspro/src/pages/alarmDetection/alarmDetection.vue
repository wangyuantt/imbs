/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 17:41:16 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 18:02:34
 */
<template>
    <div class="alarm-detection">
        <div class="search-condition"> 
            <el-row type="flex" align='middle'>
                <el-col :span="5">
                    <div class="condition-four condition">
                        <div class="tip-span margin-top-bottom">开始时间</div>
                        <el-date-picker
                            style="width:100%"
                            v-model="startingTime"
                            type="datetime"
                            size="small"
                            placeholder="选择开始时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="5">
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
                <el-col :span="5">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">事件源</div>
                        <el-select v-model="eventSource" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in eventSourceOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">事件类型</div>
                        <el-select v-model="eventType" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in eventTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="3" style="margin-top:36px">
                    <div class="condition-four condition">
                        <el-button type="primary" size='small'>查询</el-button>
                        <el-button  size='small'>重置</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="export flex-start">
            <span class="iconfont i-font">&#xe641;</span>
            <span>导出</span>
        </div>
        <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span='23'>
                    <el-table :data="tableData" border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="tLicenseNum" label="开始时间"></el-table-column>
                        <el-table-column prop="tParkingLot" label="所在区域"></el-table-column>
                        <el-table-column prop="tParkingNumber" label="事件源"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="事件类型"></el-table-column>
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
    name: 'alarmDetection',
    data () {
        return {
            currentPage: 1,
            startingTime: '',
            endingTime: '',
            eventSource: '0',
            eventSourceOptions: [
                {
                    value: '0',
                    label: '全部'
                }
            ],
            eventType: '0',
            eventTypeOptions: [
                {
                    value: '0',
                    label: '全部'
                }
            ],
            tableData: []
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
    .alarm-detection{
        width: 100%;
        height: 100%;
        .search-condition {
            width: 100%;
            min-height: 50px;
            border-bottom: 1px solid #eeeeee;
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


