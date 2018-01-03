<template>
  <div id="app">
    <!--<router-link to="{name:'demo'}">-->
      <!--跳-->
    <!--</router-link>-->
    <router-view></router-view>
    <!--<yuanquTop></yuanquTop>-->
    <!--<router-view></router-view>-->
    <!--<el-button>默认按钮</el-button>-->
  </div>
</template>

<script>
import Vue from 'vue'
import crypto from 'crypto'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
export default {

  name: 'app'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
