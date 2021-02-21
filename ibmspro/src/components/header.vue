/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 15:58:47 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-21 16:45:13
 */
<template>
    <div class="header common-header flex-start">
        <h3 class="no-padding no-margin">综合安防管理平台</h3>
        <span style="margin: 0 10px">|</span>
        <span>系统管理</span>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    .common-header{
        width: 100%;
        height: 50px;
        background-color: #1c1b20;
        color: #fff;
        h3 {
            font-size: 15px;
            padding-left: 10px
        }
        span {
            color: #8f9190
        }
    }

</style>

