# IMB-PRO

> 综合安防管理平台

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
构建生成的资源文件保存在/dist目录下，可通过config/index.js目录文件修改相关配置信息
npm run build 默认  8002

# 构建测试环境
npm run build --qa 

# 构建验收环境
npm run build --uat

# 构建生产环境
npm run build --prod  5001

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目配置

``` bash
 # 主题定制
  1、修改/src/element-ui-theme/index.js文件中import './element-[#17b3a3]/index.css'[]中括号中的值，值可以在同文件中list属性中取 即可。（注意：这里只是修改element-ui组件主题）
  2、修改/src/assets/scss/_variables.scss文件中$--color-primary: [#17b3a3];[]中括号中的值，值与第一步值同步即可。（注意：这里只是修改站点主题，不包括element-ui组件主题）

```
## 常见问题

``` bash
 # 如何解决跨域？
  1、修改/config/dev.env.js目录文件中OPEN_PROXY: true开启代理
    修改/config/index.js目录文件中proxyTable对象target: '代理api接口请求地址'
  2、发布需要上传哪些文件？
     /dist目录下：1805021549（静态资源，18年05月03日15时49分）、config（配置文件）、index.html
```

