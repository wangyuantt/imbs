/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 14:43:38 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-21 17:37:55
 */
<template>
    <div class="IMBS_APP APP">
        <Header />
        <div class="container flex-start">
            <div class="aside menu">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
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
                                <el-menu-item index="1-1-1" >停车库</el-menu-item>
                                <el-menu-item index="1-1-2">参数配置</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="main">
                main
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
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
                background-color: #e5e5e5
            }
        }
    }
</style>



