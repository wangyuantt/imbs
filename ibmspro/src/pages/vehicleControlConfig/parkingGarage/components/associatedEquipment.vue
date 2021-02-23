/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-23 14:58:27 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 15:14:23
 */
<template>
    <div class="associated-equipment">
        <el-row>
            <el-col :span="24" style="border-bottom: 1px solid #f3f5f7;padding-left:10px">
                <el-button type="text">关联设备</el-button>
                <el-button type="text" disabled>取消关联</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="border-bottom: 1px solid #f3f5f7;padding-left:10px;padding-bottom:10px">
                <h4>诱导服务器 （0）</h4>
                <el-table :data="tableData" border style="width: 90%" max-height='500'>
                    <el-table-column type='selection'>
                    </el-table-column>
                    <el-table-column prop="name" label="设备名称">
                    </el-table-column>
                    <el-table-column prop="ip" label="IP地址以及端口号">
                    </el-table-column>
                    <el-table-column prop="opations" label="操作">
                        <template>
                            <el-button size="mini">操作</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="border-bottom: 1px solid #f3f5f7;padding-left:10px;padding-bottom:10px">
                <h4>岗亭缴费终端 （0）</h4>
                <el-table :data="tableData" border style="width: 90%" max-height='500'>
                    <el-table-column type='selection'>
                    </el-table-column>
                    <el-table-column prop="name" label="设备名称">
                    </el-table-column>
                    <el-table-column prop="ip" label="IP地址以及端口号">
                    </el-table-column>
                    <el-table-column prop="opations" label="操作">
                        <template>
                            <el-button size="mini">操作</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="border-bottom: 1px solid #f3f5f7;padding-left:10px;padding-bottom:10px">
                <h4>自助缴费设备 （0）</h4>
                <el-table :data="tableData" border style="width: 90%" max-height='500'>
                    <el-table-column type='selection'>
                    </el-table-column>
                    <el-table-column prop="name" label="设备名称">
                    </el-table-column>
                    <el-table-column prop="ip" label="IP地址以及端口号">
                    </el-table-column>
                    <el-table-column prop="opations" label="操作">
                        <template>
                            <el-button size="mini">操作</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'associatedEquipment',
    data () {
        return {
            tableData: [
                {
                    name: '001',
                    ip: '192.168.0.1:8080'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                },
                {
                    name: '002',
                    ip: '192.168.0.1:8082'
                }
            ]
        }
    }
}
</script>

