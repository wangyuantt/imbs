/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 14:43:38 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 15:59:10
 */
<template>
    <div class="IMBS_APP APP">
        <Header />
        <div class="container flex-start">
            <div class="aside menu">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu
                            default-active="1-1-1"
                            class="el-menu-vertical-demo"
                            @select="handleSelect"
                            background-color="#1a1a1a"
                            text-color="#958f8f"
                            active-text-color="#fff">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>车辆管控配置</span>
                                </template>
                                <el-submenu index="1-1">
                                    <template slot="title">停车场</template>
                                    <el-menu-item index="1-1-1">停车库</el-menu-item>
                                    <el-menu-item index="1-1-2">参数配置</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@components/header'
export default {
    name: "Index",
    components: {
        Header
    },
    data () {
        return {
            name: "Index"
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key == '1-1-1') {
                let path = '/vehicleControlConfigModule/vehicleControlConfig/parkingGarage'
                if (this.$route.path !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '1-1-2') {
                let path = '/vehicleControlConfigModule/vehicleControlConfig/parameterConfig'
                if (this.$route.path !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .APP{
        width: 100%;
        height: 100%;
        .container {
            width: 100%;
            height: calc(100% - 50px);
            .aside {
                width: 210px;
                height: 100%;
                background-color: #131313;
                .el-menu {
                    border: 0
                }
            }
            .main {
                width: calc(100% - 210px);
                height: 100%;
                background-color: #fff
            }
        }
    }
</style>



