import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
import {getListUserinfo} from './axiosUse'
import girl from './images/girle.jpg'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const _this = this;
        getListUserinfo({
            pageSize: 1,
            pageNumber: 1,
            msg:'加载中...'
        }).then(res => {
            var _Data = res;
            if (_Data.code == 1) {
                var _datas = _Data.data;
                _this.setState({
                    zp_dataSource: _datas.dataList,
                    iTotalrecords: _datas.iTotalrecords
                })
            } else {
                _this.setState({
                    zp_dataSource: []
                })
                // console.info(_Data.code)
            }

        }).catch(err => {
            console.info(err)
        })
    }
    render() {
        return (<div className={styles.bgColor + ' ' + styles.hehe}>
            为什么我找不到呢123456
           <div>
                <img src={girl} alt="" />
            </div>
        </div>)
    }
}

export default Login;
// console.info(document.getElementById('app'))