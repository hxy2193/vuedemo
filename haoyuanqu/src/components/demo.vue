<template>
  <div class='taotop'>
    <div class='taobox'>
      <!--<div  style='height:70px;line-height:70px;' v-cloak>-->
        <!--淘文化-->
      <!--</div>-->
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple" @click=choice(2) :class="{active:isactive==2}">
            <router-link :to="{name:'index'}" >
              首页
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light" @click=choice(3) :class="{active:isactive==3}">
            <router-link :to="{name:'park'}" >
              园区
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple" @click=choice(4) :class="{active:isactive==4}">
            <router-link :to="{name:'tutor'}" >
              导师
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light" @click=choice(5) :class="{active:isactive==5}">
            <router-link :to="{name:'activity'}" >
              活动
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light" @click=choice(6) :class="{active:isactive==6}">
            <router-link :to="{name:'service'}">
              服务
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light" @click=choice(7) :class="{active:isactive==7}">
            <router-link :to="{name:'capital'}">
              资本
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light" @click=choice(8) :class="{active:isactive==8}">
            <router-link :to="{name:'enterprise'}">
              企业
            </router-link>
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light" @click=choice(9) :class="{active:isactive==9}">
            <router-link :to="{name:'information'}">
              资讯
            </router-link>
          </div>
        </el-col>
      </el-row>
      <!--<ul >-->
        <!--<li @click=choice(2) :class="{active:isactive==2}">-->
          <!--<router-link :to="{name:'index'}" >-->
            <!--首页-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(3) :class="{active:isactive==3}">-->
          <!--<router-link :to="{name:'park'}" >-->
            <!--园区-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(4) :class="{active:isactive==4}">-->
          <!--<router-link :to="{name:'tutor'}" >-->
            <!--导师-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(5) :class="{active:isactive==5}">-->
          <!--<router-link :to="{name:'activity'}" >-->
            <!--活动-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(6) :class="{active:isactive==6}">-->
          <!--<router-link :to="{name:'service'}">-->
            <!--服务-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(7) :class="{active:isactive==7}">-->
          <!--<router-link :to="{name:'capital'}">-->
            <!--资本-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(8) :class="{active:isactive==8}">-->
          <!--<router-link :to="{name:'enterprise'}">-->
            <!--企业-->
          <!--</router-link>-->
        <!--<li/>-->
        <!--<li @click=choice(9) :class="{active:isactive==9}">-->
          <!--<router-link :to="{name:'information'}">-->
            <!--资讯-->
          <!--</router-link>-->
        <!--<li/>-->
      <!--</ul>-->

    </div>
    <router-view></router-view>

  </div>

</template>
<script>

  export default{

    data(){
      return{
        isactive:2,
        datalist:[],
      }
    },
    mounted(){

    },
    methods:{
      choice:function(n){
        this.isactive=n
      }
    }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box!important;
  }
  .el-row{
    width: 100%;
  }
  /*.taotop{*/
    /*width:100%;*/
    /*height:70px;*/
    /*display:flex;*/
    /*align-items:center;*/
    /*justify-content:center;*/
    /*border-bottom:solid 1px #ccc;*/
    /*font-size:20px;*/
  /*}*/
  .taobox{
    width:100%;
    height:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .grid-content{
    box-sizing: border-box!important;
    height: 27px;
  }
  .active{
    border-bottom:solid 4px blue;
    font-weight: bold;
    box-sizing: border-box;
  }
  li:not(.first):hover{
    border-bottom:solid 4px blue;
    font-weight: bold;
  }
  .login{
    border: solid 1px blue;
    border-radius:25px;
    width:150px;
    height:30px;
    display:flex;
    justify-content:space-around;
    color:blue;
  }
  a{
    color:#000000;
  }
  [v-cloak] {
    display: none;
  }
</style>
