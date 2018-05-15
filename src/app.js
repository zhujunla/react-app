import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import Login from 'containers/login'
import Echarts from 'containers/Echarts'
// import Chongqing from 'containers/Echarts/province/chongqing' 
import './plugains/vintage'
import './plugains/bmap'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           {/* <Login></Login> */}
           <Echarts></Echarts>
           {/* <Chongqing></Chongqing> */}
        </div> )
    }
}
 
ReactDOM.render(<App/>,document.getElementById('app'))
// console.info(document.getElementById('app'))