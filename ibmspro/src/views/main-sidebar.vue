<template>
  <aside class="site-sidebar" :class="'site-sidebar--' + sidebarLayoutSkin">
    <div class="site-sidebar__inner">
      <el-menu
        :default-active="menuActiveName"
        :collapse="sidebarFold"
        :collapseTransition="false"
        class="site-sidebar__menu">
        <el-submenu index="cehicle-control">
          <template slot="title">
            <icon-svg name="guankong" class="site-sidebar__menu-icon"></icon-svg>
            <span>车辆管控</span>
          </template>
          <el-menu-item index="parking-info-qry" @click="$router.push({ name: 'parking-info-qry' })">
            <span slot="title">停车场信息查询</span>
          </el-menu-item>
          <el-menu-item index="vehicle-info-qry" @click="$router.push({ name: 'vehicle-info-qry' })">
            <span slot="title">车辆信息查询</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="one-card-pass">
          <template slot="title">
            <icon-svg name="card" class="site-sidebar__menu-icon"></icon-svg>
            <span>一卡通</span>
          </template>
          <el-submenu index="access-control">
            <template slot="title">门禁管理</template>
            <el-menu-item index="access-control-equipment-list" @click="$router.push({ name: 'access-control-equipment-list' })">
              门禁设备列表
            </el-menu-item>
            <el-menu-item index="access-control-point-list" @click="$router.push({ name: 'access-control-point-list' })">
                门禁点列表
            </el-menu-item>
            <el-menu-item index="access-control-point-event" @click="$router.push({ name: 'access-control-point-event' })">
                门禁点事件列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="personal-card">
            <template slot="title">人员发卡</template>
            <el-menu-item>
              卡片列表
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="video-surveillance">
          <template slot="title">
            <icon-svg name="video" class="site-sidebar__menu-icon"></icon-svg>
            <span>视频监控</span>
          </template>
          <el-menu-item index="monitoring-point-list" @click="$router.push({ name: 'monitoring-point-list' })">
            <span slot="title">监控点列表</span>
          </el-menu-item>
          <el-menu-item index="real-time-preview" @click="$router.push({ name: 'real-time-preview' })">
            <span slot="title">实时预览</span>
          </el-menu-item>
        </el-submenu>
        <!-- <el-submenu index="demo">
          <template slot="title">
            <icon-svg name="guankong" class="site-sidebar__menu-icon"></icon-svg>
            <span>demo</span>
          </template>
          <el-menu-item index="demo-echarts" @click="$router.push({ name: 'demo-echarts' })">
            <icon-svg name="tubiao" class="site-sidebar__menu-icon"></icon-svg>
            <span slot="title">echarts</span>
          </el-menu-item>
          <el-menu-item index="demo-ueditor" @click="$router.push({ name: 'demo-ueditor' })">
            <icon-svg name="editor" class="site-sidebar__menu-icon"></icon-svg>
            <span slot="title">ueditor</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <sub-menu
          v-for="menu in menuList"
          :key="menu.menuId"
          :menu="menu"
          :dynamicMenuRoutes="dynamicMenuRoutes">
        </sub-menu> -->
      </el-menu>
    </div>
  </aside>
</template>

<script>
  import SubMenu from './main-sidebar-sub-menu'
  import { isURL } from '@/utils/validate'
  export default {
    data () {
      return {
        dynamicMenuRoutes: []
      }
    },
    components: {
      SubMenu
    },
    computed: {
      sidebarLayoutSkin: {
        get () { return this.$store.state.common.sidebarLayoutSkin }
      },
      sidebarFold: {
        get () { return this.$store.state.common.sidebarFold }
      },
      menuList: {
        get () { return this.$store.state.common.menuList },
        set (val) { this.$store.commit('common/updateMenuList', val) }
      },
      menuActiveName: {
        get () { return this.$store.state.common.menuActiveName },
        set (val) { this.$store.commit('common/updateMenuActiveName', val) }
      },
      mainTabs: {
        get () { return this.$store.state.common.mainTabs },
        set (val) { this.$store.commit('common/updateMainTabs', val) }
      },
      mainTabsActiveName: {
        get () { return this.$store.state.common.mainTabsActiveName },
        set (val) { this.$store.commit('common/updateMainTabsActiveName', val) }
      }
    },
    watch: {
      $route: 'routeHandle'
    },
    created () {
      // this.menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]')
      // this.dynamicMenuRoutes = JSON.parse(sessionStorage.getItem('dynamicMenuRoutes') || '[]')
      this.routeHandle(this.$route)
    },
    methods: {
      // 路由操作
      routeHandle (route) {
        let tab = {
          menuId: route.meta.menuId || route.name,
          name: route.name,
          title: route.meta.title,
          type: isURL(route.meta.iframeUrl) ? 'iframe' : 'module',
          iframeUrl: route.meta.iframeUrl || '',
          params: route.params,
          query: route.query
        }
        this.menuActiveName = tab.menuId + ''
        // if (route.meta.isTab) {
        //   // tab选中, 不存在先添加
        //   var tab = this.mainTabs.filter(item => item.name === route.name)[0]
        //   console.log(tab)
        //   if (!tab) {
        //     if (route.meta.isDynamic) {
        //       route = this.dynamicMenuRoutes.filter(item => item.name === route.name)[0]
        //       if (!route) {
        //         return console.error('未能找到可用标签页!')
        //       }
        //     }
        //     tab = {
        //       menuId: route.meta.menuId || route.name,
        //       name: route.name,
        //       title: route.meta.title,
        //       type: isURL(route.meta.iframeUrl) ? 'iframe' : 'module',
        //       iframeUrl: route.meta.iframeUrl || '',
        //       params: route.params,
        //       query: route.query
        //     }
        //     this.mainTabs = this.mainTabs.concat(tab)
        //   }
        //   this.menuActiveName = tab.menuId + ''
        //   this.mainTabsActiveName = tab.name
        // }
      }
    }
  }
</script>
