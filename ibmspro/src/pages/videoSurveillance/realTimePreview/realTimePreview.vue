/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 23:55:41 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-27 02:01:02
 */
<template>
    <div class="real-time-preview rtp full-page">
        <div class="real-time-preview-content flex-start full-page">
            <div class="real-time-preview-aside aside">
                <el-row>
                    <el-col :span="24" style="padding-left:2px">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <!-- <el-collapse-item title="资源视图" name="1">
                                <div>资源视图</div>
                            </el-collapse-item> -->
                            <el-collapse-item title="监控点" name="1">
                                <el-input @change='searchTree' clearable style="margin:5px 0" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="cameraName" ></el-input>
                                <div class="tree-item" v-loading='treeLoading'>
                                    <el-tree :default-expanded-keys="[1]" node-key="id" :data="treeData" ></el-tree>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-col>
                </el-row>
            </div>
            <div class="real-time-preview-main">
                real-time-preview-main
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'realTimePreview',
    data () {
        return {
            activeNames: '1',
            cameraName: '',
            treeLoading: false,
            treeData: [
                {
                    label: '根结点',
                    id: 1,
                    children: []
                }
            ]
        }
    },
    mounted () {
        this.getCameraList()
    },
    methods: {
        handleChange (arr) {
            console.log(arr)
        },
        searchTree (val) {
            console.log(val)
            this.getCameraList()
        },
        getCameraList () {
            this.treeLoading = true
            let data = {
                "pageNo": 1,
                "pageSize": 1000,
                "cameraIndexCodes": "",
                "cameraName": this.cameraName,
                "encodeDevIndexCode": "",
                "regionIndexCode": "",
                "isCascade": 2 // 0：非级联 1：级联 2：不限（包括级联和非级联） 默认取值：2
            }
            this.$videoSurveillanceAPI.getCameraList(data).then(res => {
                this.treeLoading = false
                if (res.code == 0) {
                    if (res.data.code == '0') {
                        let _forEachArr = res.data.data.list
                        _forEachArr.forEach(item => {
                            item.label = item.cameraName
                        })
                        this.treeData[0].children = _forEachArr
                    } else {
                        this.$message.error(res.data.msg)
                    }
                } else {
                    this.$message.error(res.msg)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .rtp {
        .real-time-preview-content {
            .aside {
                width: 250px;
                height: 100%;
                overflow: auto;
                border-right: 1px solid #f3f5f7;
                box-sizing: border-box;
            }
            .real-time-preview-main {
                width: calc(100% - 250px);
                height: 100%
            }
        }
    }
</style>

