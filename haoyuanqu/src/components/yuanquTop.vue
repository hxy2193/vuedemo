<template>
  <div class='taotop'>
    <div class='taobox'>
      <div  style='height:70px;line-height:70px;' v-cloak>
        淘文化
      </div>
      <ul >
        <li @click=choice(2) :class="{active:isactive==2}">
          <router-link :to="{name:'index'}" >
            首页
          </router-link>
        <li/>
        <li @click=choice(3) :class="{active:isactive==3}">
          <router-link :to="{name:'park'}" >
            园区
          </router-link>
        <li/>
        <li @click=choice(4) :class="{active:isactive==4}">
          <router-link :to="{name:'tutor'}" >
            导师
          </router-link>
        <li/>
        <li @click=choice(5) :class="{active:isactive==5}">
          <router-link :to="{name:'activity'}" >
            活动
          </router-link>
        <li/>
        <li @click=choice(6) :class="{active:isactive==6}">
          <router-link :to="{name:'service'}">
            服务
          </router-link>
        <li/>
        <li @click=choice(7) :class="{active:isactive==7}">
          <router-link :to="{name:'capital'}">
            资本
          </router-link>
        <li/>
        <li @click=choice(8) :class="{active:isactive==8}">
          <router-link :to="{name:'enterprise'}">
            企业
          </router-link>
        <li/>
        <li @click=choice(9) :class="{active:isactive==9}">
          <router-link :to="{name:'information'}">
            资讯
          </router-link>
        <li/>
      </ul>


    </div>

  </div>

</template>
<script>

  export default{

    data(){
      return{
        isactive:2,
        datalist:[],
        uid:this.$route.query.uid
      }
    },
    mounted(){

      console.log(1,$('li'))
    },
    methods:{
      choice:function(n){
        this.isactive=n
      }
    }
  }
</script>
<style scoped>
  .taotop{
    width:100%;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:solid 1px #ccc;
    font-size:20px;
  }
  .taobox{
    width:1200px;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  ul{
    width:800px;
    height:70px;
    list-style-type: none;
    padding: 0;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  li{
    height:30px;

  }
  li.active{
    border-bottom:solid 4px blue;
    font-weight: bold;
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
