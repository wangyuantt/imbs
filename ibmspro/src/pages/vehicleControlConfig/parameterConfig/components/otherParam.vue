/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 19:33:31 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 19:45:10
 */
<template>
    <div class="other-param">
        <el-row type="flex" justify="center" style="margin-top:30px">
            <el-col :span="10">
                <div>公网配置</div>
                <div class="tip-span" style="margin:10px 0">服务器公网地址</div>
                <el-input placeholder="服务器公网地址" v-model="input1" size="small">
                        <template slot="prepend">IP地址</template>
                </el-input>
                <div class="tip-span" style="margin:10px 0">网络协议</div>
                <el-button-group>
                    <el-button plain type="primary">HTTPS</el-button>
                    <el-button plain type="primary">HTTP</el-button>
                </el-button-group>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'otherParam'
}
</script>
