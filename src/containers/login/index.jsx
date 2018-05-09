import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
import httpPromise from 'utils/zjl_Axios'
import girl from './images/girle.jpg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const _this = this;
        httpPromise({
            url: "/zjl_test/com/had-login/userInfo/getListUserinfo",
            method: 'post',
            headers: { 'session_id': 'session_id',access_token:'06332fff92be4fae9765923877a86f91',},
            
            data: {
                pageSize: 1,
                pageNumber: 1
            }
        },'加载中...').then(res=>{
            var _Data = res;
            if(_Data.code == 1){
                var _datas = _Data.data;
               _this.setState({
                    zp_dataSource:_datas.dataList,
                    iTotalrecords:_datas.iTotalrecords
                }) 
            }else{
                _this.setState({
                    zp_dataSource:[]
                })
                // console.info(_Data.code)
            }               
                  
        }).catch(err=>{
            console.info(err)
        })
    }
    render() { 
        return ( <div className={styles.bgColor}>
            为什么我找不到呢123456
            <img src={girl} alt=""/>
        </div> )
    }
}
 
export default Login;
// console.info(document.getElementById('app'))