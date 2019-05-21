<template>
  <div>
    <div id="echarts" :style="{width: '500px', height: '400px'}"></div>
    <div id="echartsone" :style="{width: '500px', height: '400px'}" style="margin-top:20px"></div>
  </div>
</template>
<script>
    export default {
        name:'echarts',
        componentName: "echarts",
        props: {
            // size: String,
            // atprimaryImg:{
            //     type: String,
            //     default: ''
            // },
            // nativeType: {
            //     type: String,
            //     default: 'button'
            // },
            // loading: Boolean,
        },

        methods: {
          pie (){
            let dom = document.getElementById('echarts')
            let myChart = this.echarts.init(dom)
            // 绘制图表
            myChart.setOption({
              title : {
                text: '人才职称类型统计',
                subtext: '2015-10-02 - 2018-10-10',
                x:'left',
                textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                },
                subtextStyle: {//副标题文本样式{"color": "#aaa"}
                  fontSize: 10
                  // fontStyle: 'normal',
                  // fontWeight: 'normal',
                }
              },
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  x : 'center',
                  y : 'bottom',
                  icon:"circle",
                  data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '60%'],
                      data:[
                          {value:335, name:'直接访问'},
                          {value:310, name:'邮件营销'},
                          {value:234, name:'联盟广告'},
                          {value:135, name:'视频广告'},
                          {value:1548, name:'搜索引擎'}
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          },
                          normal:{
                            label:{
                              show: true,
                              formatter: '{b}:{d}%'
                            },
                            labelLine :{show:true}
                          }
                      }
                  }
              ]
          });
          },
          negative (){
            let dom = document.getElementById('echartsone')
            let myChart = this.echarts.init(dom)
            // 绘制图表
            myChart.setOption( {
               title : {
                text: '人才年龄占比统计',
                subtext: '2015-10-02 - 2018-10-10',
                x:'left',
                textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                },
                subtextStyle: {//副标题文本样式{"color": "#aaa"}
                  fontSize: 10
                  // fontStyle: 'normal',
                  // fontWeight: 'normal',
                }
              },
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              legend: {
                x : 'center',
                y : 'bottom',
                icon:"circle",
                data:['支出', '收入']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '6%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'value'
                  }
              ],
              yAxis : [
                  {
                      type : 'category',
                      axisTick : {show: false},
                      data : ['周一','周二','周三','周四','周五','周六','周日']
                  }
              ],
              series : [
                  {
                      name:'收入',
                      type:'bar',
                      stack: '总量',
                      label: {
                          normal: {
                              show: false
                          }
                      },
                      data:[320, 302, 341, 374, 390, 450, 420]
                  },
                  {
                      name:'支出',
                      type:'bar',
                      stack: '总量',
                      label: {
                          normal: {
                              show: false,
                              position: 'left'
                          }
                      },
                      data:[-120, -132, -101, -134, -190, -230, -210]
                  }
              ]
          });
          },
        },
        mounted () {
          this.pie()
          this.negative()
        }
    };
</script>

