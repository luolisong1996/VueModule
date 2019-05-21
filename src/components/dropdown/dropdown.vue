<template>
  <div>
    <div class="dropdown-app-left">
      <drop-down :receive-list="postList" @receive="receiveData"></drop-down>
    </div>
    <div class="dropdown-app">
      <input class="tmp-drag-input" v-model="content">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        postList:['北京','上海','深圳','贵州'],
        content:''
      }
    },
    methods:{
      receiveData:function(args){
        this.content = args; //父级接收自定义函数参数
      }
    }
  } 
</script>
<style>
.dropdown-app{
  width: 400px;
  float: left;
}
.dropdown-app-left{
  float: left;
}
.dropdown-input{

}
/* 不解地方 */
/* dom里绑定数据的时候请用烤串命名法 v-bind:receive-list
函数内请用驼峰命名法  props:["receiveList"] */
</style>
