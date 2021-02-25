/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-24 21:49:01 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 23:34:52
 */
<template>
    <div class="aside menu am">
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
                                <el-menu-item index="3-1-2">权限下载记录</el-menu-item>
                                <el-menu-item index="3-1-3">设备事件</el-menu-item>
                            </el-submenu>
                        <el-menu-item index="3-2">人员发卡</el-menu-item>

                        <el-submenu index="3-3">
                            <template slot="title">访客管理</template>
                            <el-menu-item index="3-3-1">访客预约</el-menu-item>
                            <el-menu-item index="3-3-2">来访记录</el-menu-item>
                            <el-menu-item index="3-3-3">异常访客记录</el-menu-item>
                            <el-menu-item index="3-3-4">访客权限下载记录</el-menu-item>
                        </el-submenu>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'NavMenu',
    data () {
        return {
            defaultActive: ''
        }
    },
    mounted () {
        this.controlMenu(this.$route.name)
    },
    watch: {
        $route (to) {
            this.controlMenu(to.name)
        }
    },
    computed: {
        ...mapState(['navMenuList'])
    },
    methods: {
        mapNavMenu (params, flag) {
            return this.navMenuList.find( item => {
                return params === item[flag ? 'name' : 'index']
            })
        },
        controlMenu (routerName) {
            sessionStorage.setItem('routerName', routerName)
            this.defaultActive = this.mapNavMenu(routerName, true).index
        },
        handleSelect(key, keyPath) {
            let currentPath = this.$route.path
            let path = this.mapNavMenu(key, false).path
            sessionStorage.setItem('currentPath', currentPath)
            if (currentPath !== path) {
                this.$router.push({
                    path: path
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .aside {
        width: 210px;
        height: 100%;
        background-color: #131313;
        .el-menu {
            border: 0
        }
    }
</style>

