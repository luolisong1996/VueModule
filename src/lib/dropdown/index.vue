<template>
    <div id="dropdown">
      <div class="header">
        <p>已完善：搜索，传给父组件</p>
        <p>待完善：用户体验（各种变化）</p>
      </div>
      <div class="tmp-drag-warp">
        <div class="tmp-drag-search" v-show="receiveList.length">
          <input type="text" class="tmp-drag-input" 
          @click="showTips()"
          v-model="value"
          @keyup='search($event)'
          @blur.prevent="changeCount()"
         >
        </div>
        <ul class="tmp-drag-ul" v-show="length">
          <li class="tmp-drag-li" v-for="(item,index) in datalist" 
          v-text="item" 
          :key="index" 
          @click="postData(item)"></li>
        </ul>
      </div>
    </div>
</template>
<script>
    export default {
        name:'drop-down',
        props: {
          receiveList: {
            type: Array, //验证类型
            default: '', //默认值,如年龄可默认为一岁，性别默认为男等
            //required:true or false,//传参是否必填
            validator:function(value){
                // console.log(value);//value = 父级传过来的值
                //return true or false;
                //比如来验证一下父级传过来的arr.lenght是否大于0,最好先判断传过来的是不是数组
                return value.length>=4?true:false;
                // 关于props参数：props 可以是数组或对象，用于接收来自父组件的数据。
                // props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，
                // 如类型检测、自定义校验和设置默认值。
            }
          }
        },
        data() {
          return {
              show: false,
              datalist:[],
              value:''
          }
        },
        watch:{
          receiveList:function(val){
            this.datalist = val.concat();
          }
        },
        directives:{
            'show-extend':function(el,binding,vnode){//bind和 update钩子
                let value = binding.value,searchInput = null;
                if(value){
                    el.style.display='block';
                }else{//隐藏后，恢复初始状态
                    el.style.display='none';
                    searchInput = el.querySelector(".tmp-drag-input");
                    searchInput.value = '';
                    vnode.context.datalist = vnode.context.itemlist;//还原渲染数据
                }
            }
        },
        computed:{
          length:function(){
            return this.datalist.length;
          }
        },
        methods: {
          data:function(){
            return {
                show:false,
            }
          },
          showTips() {
            this.show = !this.show;
          },
          search:function(e){
            let vm = this,searchvalue = e.currentTarget.value;
            vm.datalist = vm.receiveList.filter(function(item,index,arr){
              return item.indexOf(searchvalue) != -1;
            });
          },
          changeCount:function(){

          },
          postData:function(item){
            // this.$emit("receive",item); //子级触发自定义事件，并把想传的参数传出去
            //this.nameArr=["北京","上海","杭州","广州"];//如果这样写，会报错，因为修改了整个数组
            //this.nameArr.push("广州");//这样写就不会报错，而且能push数据进去
            this.value = item;
            this.show = !this.show;  
            this.$emit("receive",item);
            // 单项数据流：在组件中，利用props父级向子组件传递数据以后，子级内部对数据进行了处理
            // 如改变数据的某个值，这时候控制台会报错
            // 解决方法：在子级作用域中，将接受的值存入data或者computed里，就可以操作
          }
        }
    };
</script>
<style scoped>
.header{

}
.header p{
  line-height: 30px;
  font-size: 15px;
  display: block;
  margin-left: 30px;
}
</style>
