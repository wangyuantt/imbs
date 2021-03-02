/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-27 23:46:23 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-02 23:00:19
 */
<template>
    <div class="vehicle-info-qry">
      <el-form :inline="true" :model="dataForm" label-position="top" @keyup.enter.native="getDataList()">
        <el-form-item label="车主姓名">
          <el-input v-model="dataForm.userName" placeholder="车主姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="车牌号码">
          <el-input v-model="dataForm.licensePlateNumber" placeholder="车牌号码" clearable></el-input>
        </el-form-item>
        <el-form-item label="车牌类型">
          <el-select v-model="dataForm.licensePlateType" placeholder="请选择">
            <el-option
              v-for="item in licensePlateTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车辆类型">
          <el-select v-model="dataForm.vehicleType" placeholder="请选择">
            <el-option
              v-for="item in vehicleTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车辆是否和人员绑定">
          <el-select v-model="dataForm.isBandPerson" placeholder="请选择">
            <el-option
              v-for="item in isBandPersonOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-top:40px">
          <el-button type='primary' :disabled="dataListLoading" @click="getDataList">查询</el-button>
          <el-button @click="clearAllCondition">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
        <el-table-column prop="plateNo" label="车牌号码"></el-table-column>
        <el-table-column prop="plateType" label="车牌类型">
          <template slot-scope="scope">
              <span>{{ scope.row.plateType | plateType }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="plateColor" label="车牌颜色">
          <template slot-scope="scope">
              <span>{{ scope.row.plateColor | plateColor }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="vehicleType" label="车辆类型">
          <template slot-scope="scope">
              <span>{{ scope.row.vehicleType | vehicleType }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="vehicleColor" label="车辆颜色">
          <template slot-scope="scope">
              <span>{{ scope.row.vehicleColor | vehicleColor }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="mark" label="描述"></el-table-column>
        <el-table-column prop="personName" label="车主姓名"></el-table-column>
        <el-table-column prop="phoneNo" label="联系电话"></el-table-column>
        <!-- <el-table-column prop="tFloor" label="操作"></el-table-column> -->
      </el-table>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    </div>
</template>
<script>
export default {
  name: 'vehicle-info-qry',
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      totalPage: 0,
      dataList: [],
      dataListLoading: false,
      dataForm: {
        userName: '',
        licensePlateNumber: '',
        isBandPerson: 1,
        licensePlateType: null,
        vehicleType: null
      },
      isBandPersonOptions: [
        {
          value: 1,
          label: '关联'
        }, {
          value: 0,
          label: '不关联'
        }
      ],
      vehicleTypeOptions: [
        {
          value: null,
          label: '全部'
        }, {
          value: 0,
          label: '其他车'
        }, {
          value: 1,
          label: '小型车'
        }, {
          value: 2,
          label: '大型车'
        }, {
          value: 3,
          label: '摩托车'
        }
      ],
      licensePlateTypeOptions: [
        {
          value: null,
          label: '全部'
        }, {
          value: 0,
          label: '标准民用车'
        }, {
          value: 1,
          label: '02式民用车牌'
        }, {
          value: 2,
          label: '武警车车牌'
        }, {
          value: 3,
          label: '警车车牌'
        }, {
          value: 4,
          label: '民用车双行尾牌'
        }, {
          value: 5,
          label: '使馆车牌'
        }, {
          value: 6,
          label: '农用车车牌'
        }, {
          value: 7,
          label: '摩托车'
        }, {
          value: 8,
          label: '新能源车'
        }, {
          value: 13,
          label: '军车车牌'
        }
      ]
    }
  },
  methods: {
    getDataList () {
      this.dataListLoading = true
      let data = {
        personName: this.dataForm.userName,
        plateNo: this.dataForm.licensePlateNumber,
        plateType: this.dataForm.licensePlateType, // 车牌类型
        pageNo: this.currentPage,
        pageSize: this.pageSize,
        isBandPerson: this.dataForm.isBandPerson, // 车辆是否和人员绑定，带有人员信息；0:不关联；1:关联
        vehicleType: this.dataForm.vehicleType // 车辆类型
      }
      this.$imbsRequest.vehicleList(data).then(res => {
        this.dataListLoading = false
        if (res && res.code === 0) {
          this.dataList = res.data.data.list
          this.totalPage = res.data.data.total
        }
      })
    },
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.currentPage = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.currentPage = val
      this.getDataList()
    },
    clearAllCondition () {
      let vm = this
      vm.dataForm.userName = ''
      vm.dataForm.licensePlateNumber = ''
      vm.dataForm.isBandPerson = 1
      vm.dataForm.vehicleType = null
      vm.dataForm.licensePlateType = null
    }
  }
}
</script>

