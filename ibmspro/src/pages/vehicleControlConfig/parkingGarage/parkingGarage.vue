/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 17:44:27 
 * @Desc: 车辆管控配置-停车场-停车库 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 14:32:22
 */
<template>
    <div class="parking-garage">
        <div class="parking-garage-breadcrumb breadcrumb">
            <span>系统管理 > {{navTitle}}</span>
        </div>
        <div class="parking-garage-content flex-start">
            <div class="parking-garage-aside">
                <el-row type="flex" justify="center" style="margin-top:10px">
                    <el-col :span="22">
                        <el-input placeholder=搜索 v-model="searchText" class="input-with-select" size="mini">
                            <el-button slot="append" icon="el-icon-search" @click="searchAction"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="parking-garage-main">
                <el-row>
                    <el-col :span='24'>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="停车库信息" name="0">
                                <parkingGarageInfo />
                            </el-tab-pane>
                            <el-tab-pane label="关联设备" name="1">关联设备</el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import parkingGarageInfo from './components/parkingGarageInfo'
export default {
    name: 'parkingGarage',
    components: {
        parkingGarageInfo
    },
    data () {
        return {
            name: 'd',
            searchText: '',
            activeName: '0'
        }
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.title + ' > ' + meta.subTitle + ' > ' + meta.currentPageTitle
        }
    },
    mounted () {
        console.log(this.$route)
    },
    methods: {
        searchAction () {
            console.log(this.searchText)
        },
        handleClick (tab, event) {
            console.log(tab, event)
        }
    }
}
</script>

<style lang="scss" scoped>
    .parking-garage {
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
        .parking-garage-content {
            width: 100%;
            height: calc(100% - 34px);
            .parking-garage-aside {
                width: 300px;
                height: 100%;
                border-right: 1px solid #f3f5f7;
                box-sizing: border-box;
            }
            .parking-garage-main {
                width: calc(100% - 300px);
                height: 100%
            }
        }
    }
</style>


