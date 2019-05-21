<template>
    <div class='button-example'>
        <div class="mr-top">
            <at-button>默认按钮</at-button>
            <at-button type="primary">主要按钮</at-button>
            <at-button type="important">二级默认</at-button>
            <at-button :disabled='true' :plain="true">默认禁用</at-button>
            <at-button :disabled='true'>主要禁用</at-button>
        </div>
        <div class="mr-top">
            <at-button atimg="add">新增</at-button>
            <at-button atimg="delete">删除</at-button>
            <at-button atimg="output">导出</at-button>
            <at-button atimg="input">导入</at-button>
            <at-button atimg="change">修改</at-button>
            <at-button atimg="download">下载</at-button>
        </div>
        <div class="mr-top">
            <at-button type="primary" atprimaryImg="add">新增</at-button>
            <at-button type="primary" atprimaryImg="delete">删除</at-button>
            <at-button type="primary" atprimaryImg="output">导出</at-button>
            <at-button type="primary" atprimaryImg="input">导入</at-button>
            <at-button type="primary" atprimaryImg="change">修改</at-button>
            <at-button type="primary" atprimaryImg="download">下载</at-button>
        </div>
        <div class="mr-top">
            <at-button size="small">较小按钮</at-button>
            <at-button >常规按钮</at-button>
            <at-button size="big">常规长度按钮</at-button>  
            <at-button size="bigger">文本内容较多按钮11111111111111111111111111</at-button> 
        </div> 
        <div class="mr-top">
            <at-button :disabled='disabled' :plain='disabled'>显示按钮</at-button>
            <at-button type="primary" :disabled='disabled'>显示按钮</at-button>
            <at-button type="primary" v-on:click='disableButton'>点击按钮</at-button>
            <span>点击"点击按钮"禁用'显示按钮',再次点击解除禁用</span> 
        </div> 
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
.button-example{
    margin: 40px auto 0;
    width: 800px;
}
.button-example .mr-top{
    margin-top: 15px;
}
</style>
