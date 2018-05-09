import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import Login from 'containers/login/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           <Login></Login>
        </div> )
    }
}
 
ReactDOM.render(<App/>,document.getElementById('app'))
// console.info(document.getElementById('app'))