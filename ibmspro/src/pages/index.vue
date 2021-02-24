/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 14:43:38 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 21:58:52
 */
<template>
    <div class="IMBS_APP APP">
        <Header />
        <div class="container flex-start">
            <NavMenu />
            <div class="main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@components/header'
import NavMenu from '@components/navMenu'
export default {
    name: "Index",
    components: {
        Header,
        NavMenu
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
            sessionStorage.setItem('routerName', routerName)
            if (routerName === 'informationQuery') {
                this.defaultActive = '1-1'
            }
            if (routerName === 'alarmDetection') {
                this.defaultActive = '2-1'
            }
            if (routerName === 'permissionConfigComprehensiveQuery') {
                this.defaultActive = '3-1-1'
            }
            if (routerName === 'permissionDownloadRecord') {
                this.defaultActive = '3-1-2'
            }
            if (routerName === 'equipmentEvent') {
                this.defaultActive = '3-1-3'
            }
            if (routerName === 'personnaIssuing') {
                this.defaultActive = '3-2'
            }
        },
        handleSelect(key, keyPath) {
            let currentPath = this.$route.path
            sessionStorage.setItem('currentPath', currentPath)
            if (key == '1-1') {
                let path = '/vehicleControlConfigModule/informationQuery'
                if (currentPath !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '2-1') {
                let path = '/vehicleControlConfigModule/alarmDetection'
                if (currentPath !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '3-1-1') {
                let path = '/vehicleControlConfigModule/onePass/accessControl/permissionConfigComprehensiveQuery'
                if (currentPath !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '3-1-2') {
                let path = '/vehicleControlConfigModule/onePass/accessControl/permissionDownloadRecord'
                if (currentPath !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '3-1-3') {
                let path = '/vehicleControlConfigModule/onePass/accessControl/equipmentEvent'
                if (currentPath !== path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
            if (key == '3-2') {
                let path = '/vehicleControlConfigModule/onePass/personnaIssuing'
                if (currentPath !== path) {
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
            .main {
                width: calc(100% - 210px);
                height: 100%;
                background-color: #fff
            }
        }
    }
</style>



