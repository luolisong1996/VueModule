<template>
  <div id="FormCheckBox">
    <div id="ThePie">
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {

    }
  },
  mounted(){
    // this.text()
    this.textone()
    let str = 'asdfasdfhauisdfha'
    let data = [2,3,38,5,12,13,45,6,67,22]
    // console.log(this.findMaxDuplicateChar(str))
    // let a= this.quickSort(data)
    console.log(a)
  },
  watch:{
  },
  updated(){

  },
  methods:{
    textone () {
      var nodes = [ { name: "button", router:'button'},
                    { name: "echarts", router:'echarts'},
                    { name: "dropdown", router:'dropdown'},
                    { name: "杭州" },
                    { name: "上海"}, { name: "青岛" },
                    { name: "满井"} ];
                    
      var links = [  { source : 0  , target: 1 } , { source : 0  , target: 2 } ,
                      { source : 0  , target: 3 } , { source : 1  , target: 4 } ,
                      { source : 1  , target: 5 } , { source : 1  , target: 6 }  ];   
        
      var width = 1000;
      var height = 600;
      var svg = d3.select("#ThePie")
                  .append("svg")
                  .attr("width",width)
                  .attr("height",height);
      console.log(d3.forceManyBody());
      // 通过布局来转换数据，然后进行绘制
      var simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).distance(150))//指定连线长度
            .force("charge",d3.forceManyBody())//创建多体力
            .force("center",d3.forceCenter(width/2, height/2));//中心位置

      simulation.nodes(nodes)//设置力模拟的节点
                .on("tick", ticked);

      simulation.force("link")//添加或移除力
            .links(links);//设置连接数组
      var color = d3.scaleOrdinal(d3.schemeCategory10); 
      // 绘制
      var svg_links = svg.selectAll("line")
          .data(links) 
          .enter()
          .append("line")
          .style("stroke","#ccc")
          .style("stroke-width",3)
          .call(d3.zoom()//创建缩放行为
              .scaleExtent([-5, 2])//设置缩放范围
          );
    
          var svg_nodes = svg.selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", '15')
            .attr("fill", function(d,i){
              return color(i);
          }).call(d3.drag().on("start", dragstarted)//d3.drag() 创建一个拖曳行为
                .on("drag", dragged)
                .on("end", dragended))
                .on("click",(d,i)=>{
                  this.$router.push(d.router)
                })
            //添加描述节点的文字

            var svg_texts = svg.selectAll("text")
                .data(nodes)
                .enter()
                .append("text")
                .style("fill", "black")
                .attr("dx", 20)
                .attr("dy", 8)
                .text(function(d){
                  return d.name;
                });
          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart(); //设置目标α
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }

          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }
          function ticked() {
            svg_links.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            svg_nodes.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
              
            svg_texts.attr("x", function(d){ return d.x; })
                .attr("y", function(d){ return d.y; });
          }
    },
    findMaxDuplicateChar(str){
      if(str.length == 1){
        return str
      }
      let obj = {}
      for(let i = 0;i<str.length;i++){
        if( !obj[str.charAt(i)]){
          obj[str.charAt(i)] = 1
        }else{
          obj[str.charAt(i)] += 1
        }
      }
      let maxValue = 0
      let maxChar = ''
      for(let k in obj){
        if(obj[k] >= maxValue){
          maxValue = obj[k]
          maxChar = k
        }
      }
      return maxChar
    },
    bubbleSort(arr){
      for(let i=0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;i++){
          if(arr[i]>arr[j]){
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
          }
        }
      }
      return arr
    },
    quickSort(arr){
      //如果数组<=1,则直接返回
      if(arr.length<=1){return arr;}
      var pivotIndex=Math.floor(arr.length/2);
      //找基准，并把基准从原数组删除
      var pivot=arr.splice(pivotIndex,1)[0];
      console.log(pivot)
      //定义左右数组
      var left=[];
      var right=[];

      //比基准小的放在left，比基准大的放在right
      for(var i=0;i<arr.length;i++){
          if(arr[i]<=pivot){
              left.push(arr[i]);
          }
          else{
              right.push(arr[i]);
          }
      }
      //递归
      return quickSort(left).concat([pivot],quickSort(right));
    }
  }
}
</script>

<style>
#ThePie{
 width: 1000px;
 height: 600px;
 background-color: #eee;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin: auto;
}

</style>

