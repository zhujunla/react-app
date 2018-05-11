import echarts from 'echarts';
import React,{Component} from 'react'

class Echarts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.echartsShow();
    }
    echartsShow=()=>{
       let myEcharts = echarts.init(this.refs.BaiDuReact);
       myEcharts.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
    }
    render() { 
        return ( <div >
            <div style={{height:'300px',width:'400px'}} ref='BaiDuReact'></div>
        </div> )
    }
}
 
export default Echarts;