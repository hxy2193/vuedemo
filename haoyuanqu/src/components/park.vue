<template>
  <div>
    <div>
      {{
      this.data.msg
      }}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import crypto from 'crypto'
  export default{
    data(){
      return{
        data:{
          msg:'this is active',
          sign:''
        }
      }
    },
    mounted: function(){
this. getDatas(3)


    },
    methods:{

      getDatas:function (signs) {
        this.md5(arguments[0])
        this.$axios.get('http://121.41.12.19/tao/api/cf/crowdFundingInfo', {
          params: {
            cfId:arguments[0],
            sign:this.data.sign
          }
        })
          .then(function (response) {
            console.log('1',response);
          })
          .catch(function (response) {
            console.log('2',response);
          });
      }
    }
  }

</script>
