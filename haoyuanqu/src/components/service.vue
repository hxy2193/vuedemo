this.msg<template>
  <div>
    <div>
      {{
      this.data.msg
      }}
    </div>
  </div>
</template>
<script>

  export default{
    data(){
      return{
        data:{
          msg:'this is service'
        }
      }
    }
  }

</script>
