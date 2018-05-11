import echarts from 'echarts';
import React, { Component } from 'react'
import './china'


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
            series: [{
                type: 'map',
                map: 'china',
                geo:{
                    roam:true,
                    center:[104.114129, 37.550339],
                    regions: [{
                        name: '重庆',
                        itemStyle: {
                            areaColor: 'red',
                            // selected:true,
                            color: 'red'
                        }
                    }]
                },
                data:[
                    {name: '重庆', value: 20057.34},
                    
                ],
            }],
            visualMap: {
                min: 0,
                max: 200,
                calculable: true,
                inRange: {
                    color: ['#50a3ba', '#eac736', '#d94e5d']
                },
                textStyle: {
                    color: '#fff'
                }
            }
        });


    }
    render() {
        return (<div >
            <div style={{ height: window.innerHeight, width: '100%' }} ref='BaiDuReact'></div>
        </div>)
    }
}

export default Echarts;