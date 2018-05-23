import React,{Component } from 'react';
import ReactDOM from 'react-dom';
// import Login from 'containers/login'
// import Echarts from 'containers/Echarts' containers
import CycleLoading from "containers/css3/cycleLoading";
import Accordion from "containers/css3/accordion";
// import Chongqing from 'containers/Echarts/province/chongqing'
// import './plugains/vintage'
// import './plugains/bmap'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <CycleLoading/>        
            <CycleLoading.CylcleLoadingOne/> 
            <CycleLoading.CylcleLoadingOne/> 
            <div style={{marginTop:'30px'}}>
                <Accordion/>   
            </div>        
           {/* <Login></Login> */}
           {/* <Echarts></Echarts> */}
           {/* <Chongqing></Chongqing> */}
        </div> )
    }
}
 
ReactDOM.render(<App/>,document.getElementById('app'))
// console.info(document.getElementById('app'))