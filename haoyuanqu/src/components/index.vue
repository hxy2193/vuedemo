<template>
  <div>
    <div >
      this is index
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        data:[
          {name:1,id:1},
          {name:2,id:2},
          {name:3,id:3},
          {name:4,id:4}
        ]
      }
    },
    methods:{
      sendMsg:function(){
        this.$dest()
      }
    }
  }

</script>
