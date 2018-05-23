import echarts from 'echarts';
import React, { Component } from 'react'

class Echarts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.echartsShow();
        console.info(window.innerHeight)
    }
    echartsShow = () => {
        let myEcharts = echarts.init(this.refs.BaiDuReact, 'vintage');
        myEcharts.on('click', function (params) {
            console.log(params);
        });
        myEcharts.setOption({
            title: [{
                text: 'Line Charts',
                link: 'https://www.baidu.com',
                subtext: '百度旗下'
            }, {
                text: 'Line Charts',
                link: 'https://www.taobao.com',
                subtext: '淘宝旗下',
                top: '55%',
            }],
            legend: {
                type: 'scroll',
                formatter: function (name) {
                    return name;
                },
                // tooltip: {
                //     show: true
                // },
                left: 'center',
                itemWidth: 25,

                // selectedMode:'single'
                // width:'10'
                // data: [{
                //     name: '温度',
                //     // 强制设置图形为圆。
                //     icon: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
                //     // 设置文本为红色
                //     textStyle: {
                //         color: 'blue'
                //     }
                // }]

            },
            grid: [{
                bottom: '60%',
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        snap: true,
                        label: {
                            show: true,
                        }

                    },

                    // formatter:'{a0}: {c0}<br />{a1}: {c1}'
                },
            }, {
                top: '60%',
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        snap: true,
                        label: {
                            show: true,
                        }

                    },

                    // formatter:'{a0}: {c0}<br />{a1}: {c1}'
                },
            }],
            xAxis: [{
                data: ['张三', '李四', '王麻子', '礼物', 'QAQ'],
                gridIndex: 0,
            }, {
                data: ['张三', '李四', '王麻子', '礼物', 'QAQ', '李四', '王麻子', '礼物', , '李四', '王麻子', '礼物', , '李四', '王麻子', '礼物',],
                gridIndex: 1,
            }],
            yAxis: [{

            }, {
                gridIndex: 1
            }],
            tooltip: {
                alwaysShowContent: false,
                enterable: true,
            },
            dataZoom: [{
                type: 'slider',
                show: true,
                // xAxisIndex: [0],
                // start: 1,
                // end: 35
            }, {
                type: 'inside',
                yAxisIndex: [0],
                xAxisIndex:[0],
                start: 29,
                end: 36
            }],
            series: [{
                name: '重庆温度',
                type: 'line',
                data: [18.5555, 28.22222, 8.22355, 28.15515, 18]
            }, {
                name: '北京温度',
                type: 'scatter',
                data: [15.5555, 25.22222, 6.22355, 5.15515, 8]
            }, {
                name: '上海温度',
                type: 'effectScatter',
                data: [25.5555, 15.22222, 30.22355, 22.15515, 19]
            }, {
                name: '深证温度',
                type: 'effectScatter',
                data: [15.5555, 45.22222, 6.22355, 50.15515, 30]
            }, {
                name: '海口温度',
                type: 'line',
                data: [10.5555, 55.22222, 8.22355, 40.15515, 22]
            }, {
                name: '南岸湿度',
                type: 'line',
                data: [22.5555, 52.22222, 24.22355, 0.15515, 2, 52.22222, 24.22355, 0.15515, 2, 52.22222, 24.22355, 0.15515, 2, 52.22222, 24.22355, 0.15515, 2],
                xAxisIndex: 1,
                yAxisIndex: 1
            }],

        });


    }
    render() {
        return (<div >
            <div style={{ height: window.innerHeight, width: '100%' }} ref='BaiDuReact'></div>
        </div>)
    }
}

export default Echarts;