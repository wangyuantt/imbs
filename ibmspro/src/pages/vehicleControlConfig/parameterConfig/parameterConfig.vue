/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 17:40:20 
 * @Desc: 车辆管控配置-停车场-参数配置 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 18:51:35
 */
<template>
    <div class="parameter-config">
        <div class="parameter-config-breadcrumb breadcrumb">
            <span>系统管理 > {{navTitle}}</span>
        </div>
        <div class="parameter-config-content flex-start">
            <div class="parameter-config-aside">
                <el-row type="flex" justify="center" style="margin-top:10px">
                    <el-col :span="22">
                        <div @click="switemItem(index)" class="item" :class="itemActive === index ? 'itemActive': ''" v-for="(item, index) in asideArr" :key="index">
                            {{item.name}}
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="parameter-config-main">
                <releaseParam v-if="itemActive === 0" />
                <paymentParam v-if="itemActive === 1"  />
                <alipayWeChatParam v-if="itemActive === 2" />
                <cardIssuingDeviceParam v-if="itemActive === 3" />
            </div>
        </div>
    </div>
</template>
<script>
import releaseParam from './components/releaseParam' // 放行参数
import paymentParam from './components/paymentParam' // 缴费参数
import alipayWeChatParam from './components/alitenConetParam' // 支付宝/微信对接参数
import cardIssuingDeviceParam from './components/cardDeviceParam' // 发卡设备参数



export default {
    name: 'parameterConfig',
    components: {
        releaseParam,
        paymentParam,
        alipayWeChatParam,
        cardIssuingDeviceParam
    },
    data () {
        return {
            itemActive: 0,
            asideArr: [
                {
                    name: '放行参数'
                },{
                    name: '缴费参数'
                },{
                    name: '支付宝/微信对接参数'
                },{
                    name: '发卡设备参数'
                },{
                    name: '语音播报参数'
                },{
                    name: '数据保存参数'
                },{
                    name: '场景配置'
                },{
                    name: '其他参数'
                }
            ]
        }
    },
    computed: {
        navTitle () {
            let meta = this.$route.meta
            return meta.title + ' > ' + meta.subTitle + ' > ' + meta.currentPageTitle
        }
    },
    methods: {
        switemItem (index) {
            this.itemActive = index
        }
    }
}
</script>
<style lang="scss" scoped>
    .parameter-config {
        width: 100%;
        height: 100%;
        overflow: auto;
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
        .parameter-config-content {
            width: 100%;
            height: calc(100% - 34px);
            .parameter-config-aside {
                width: 300px;
                height: 100%;
                border-right: 1px solid #f3f5f7;
                box-sizing: border-box;
                .item {
                    width: 100%;
                     height: 30px;
                    cursor: pointer;
                    line-height: 30px;
                    font-size: 14px;
                    text-indent: 12px;
                    border-radius: 4px
                }
                .itemActive {
                    background-color: #409eff;
                    color:#fff
                }
            }
            .parameter-config-main {
                width: calc(100% - 300px);
                height: 100%
            }
        }
    }
</style>


