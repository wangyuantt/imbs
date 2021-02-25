/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 21:37:46 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 21:56:06
 */
<template>
    <div class="personna-issuing pi">
        <div class="search-condition">
            <el-row>
                <el-col :span="4">
                    <div class="condition-one condition">
                        <div class="tip-span margin-top-bottom">姓名</div>
                        <el-input size="small" v-model="userName" placeholder="姓名"></el-input>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="condition-two condition">
                        <div class="tip-span margin-top-bottom">性别</div>
                        <el-select v-model="sex" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in sexOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="condition-three condition">
                        <div class="tip-span margin-top-bottom">所属组织</div>
                        <el-input size="small" v-model="origination" placeholder="所属组织"></el-input>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="condition-four condition">
                        <div class="tip-span margin-top-bottom">生物特征</div>
                        <el-select v-model="biologicalCharacter" placeholder="请选择" size="small" style="width:100%">
                            <el-option
                            v-for="item in biologicalCharacterOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="condition-five condition">
                        <div class="tip-span margin-top-bottom">持卡数量</div>
                        <div class="condition-flex flex-start">
                            <el-input style="width:40%" size="small" v-model="cardStartNum" placeholder="全部"></el-input>
                            <div style="margin:0 10px" class="tip-span">--</div>
                            <el-input style="width:40%" size="small" v-model="cardEndNum" placeholder="全部"></el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4" style="margin-top:40px">
                    <el-button size='small' type="primary">查询</el-button>
                    <el-button size='small'>重置</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-row type="flex" justify="center">
                <el-col :span=23>
                    <el-table :data="tableData" size='small' border style="width: 100%" height="600" max-height='600'>
                        <el-table-column prop="tLicenseNum" label="姓名"></el-table-column>
                        <el-table-column prop="tParkingLot" label="性别"></el-table-column>
                        <el-table-column prop="tParkingStatus" label="所属组织"></el-table-column>
                        <el-table-column prop="tLeaveTime" label="生物特征"></el-table-column>
                        <el-table-column prop="tFloor" label="持卡数量" sortable></el-table-column>
                        <el-table-column prop="tFloor" label="开卡"></el-table-column>
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
    name: 'personnaIssuing',
    data () {
        return {
            currentPage: 1,
            userName: '',
            origination: '',
            cardStartNum: '',
            cardEndNum: '',
            tableData: [],
            biologicalCharacter: '0',
            biologicalCharacterOptions: [
                {
                    value: '0',
                    label: '全部'
                }
            ],
            sex: '0',
            sexOptions: [
                {
                    value: '0',
                    label: '全部'
                },
                {
                    value: '1',
                    label: '男'
                },
                {
                    value: '2',
                    label: '女'
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
    .pi {
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
            margin-top: 10px
        }
    }
</style>
