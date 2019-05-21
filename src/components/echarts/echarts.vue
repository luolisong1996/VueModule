<template>
  <div class='content'>
    <echarts></echarts>
  </div>
</template>
<script>
    export default {
        data() {
            return{
            disabled:false
            }
        },
        methods:{
            disableButton:function(){
                this.disabled = !this.disabled       
            }
        }
    } 
</script>
<style>

</style>
