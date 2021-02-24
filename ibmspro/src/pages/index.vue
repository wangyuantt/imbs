/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 14:43:38 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 20:45:44
 */
<template>
    <div class="IMBS_APP APP">
        <Header />
        <div class="container flex-start">
            <div class="aside menu">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu
                            :default-active="defaultActive"
                            class="el-menu-vertical-demo"
                            @select="handleSelect"
                            unique-opened
                            background-color="#1a1a1a"
                            text-color="#958f8f"
                            active-text-color="#fff">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>停车场</span>
                                </template>
                                <el-menu-item index="1-1">信息查询</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-bell"></i>
                                    <span>报警检测</span>
                                </template>
                                <el-menu-item index="2-1">入侵报警</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-postcard"></i>
                                    <span>一卡通</span>
                                </template>
                                <el-submenu index="3-1">
                                        <template slot="title">门禁管理</template>
                                        <el-menu-item index="3-1-1">权限配置综合查询</el-menu-item>
                                    </el-submenu>
                                    
                                <el-menu-item index="3-2">人员发卡</el-menu-item>
                                <el-menu-item index="3-3">访客管理</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-view"></i>
                                    <span>视频监控</span>
                                </template>
                                <el-menu-item index="4-1">实时预览</el-menu-item>
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
            name: "Index",
            defaultActive: ''
        }
    },
    mounted () {
        console.log(this.$route)
        this.controlMenu(this.$route.name)
    },
    watch: {
        $route (to) {
            this.controlMenu(to.name)
        }
    },
    methods: {
        controlMenu (routerName) {
            if (routerName === 'informationQuery') {
                this.defaultActive = '1-1'
            }
            if (routerName === 'alarmDetection') {
                this.defaultActive = '2-1'
            }
            if (routerName === 'permissionConfigComprehensiveQuery') {
                this.defaultActive = '3-1-1'
            }
        },
        handleSelect(key, keyPath) {
            if (key == '1-1') {
                let path = '/vehicleControlConfigModule/informationQuery'
                if (this.$route.path !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '2-1') {
                let path = '/vehicleControlConfigModule/alarmDetection'
                if (this.$route.path !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '3-1-1') {
                let path = '/vehicleControlConfigModule/onePass/accessControl/permissionConfigComprehensiveQuery'
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



