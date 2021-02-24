/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 14:43:38 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 22:04:21
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
            name: "Index"
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



