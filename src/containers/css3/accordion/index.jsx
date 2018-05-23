import React, { Component } from 'react';
import styles from './style.less';
import {Input} from 'antd';

class Css3 extends Component {
    
    constructor(props) {
        super(props);
        this.state = { show:[true] }
    }
    render() { 

        return ( <div>
             <div>
                 <div onClick={(e)=>{
                     console.info(e.target);
                     var sty = {
                        top:'0px',
                        marginTop:'-30px',                                               
                     };
                     for(let i in sty){
                        this.refs.oneKey.style[i] = sty[i];
                     }
                     
                 }} className={styles.father}>father</div>
                 <div ref={'oneKey'} className={styles.child}>
                     123
                 </div>
             </div>
             <div>
                 <div onClick={(e)=>{
                     var a = [];
                     a.push(this.refs.oneKey1);
                     console.info(a);
                     var sty = {};
                     if(this.state.show[0]){
                        let a = this.state.show;
                        a[0]=false;
                        this.setState({
                            show:a
                        })
                        sty = {                            
                            marginTop:`-${this.refs.oneKey1.childElementCount*30}px`,                                               
                         };
                     }else{
                        let a = this.state.show;
                        a[0]=true;
                         this.setState({
                             show:a
                         })
                        sty = {                            
                            marginTop:`0px`,                                               
                         };
                     }
                     for(let i of sty){
                        this.refs.oneKey1.style[i] = sty[i];
                    } 
                     
                 }} className={styles.father}>father</div>

                 <div ref={'oneKey1'} className={styles.child}>
                     <div className={styles.childOne}>
                        123
                     </div>
                     <div className={styles.childOne}>
                        123
                     </div>
                     <div className={styles.childOne}>
                        123
                     </div>
                     <div className={styles.childOne}>
                        123
                     </div>
                     <div className={styles.childOne}>
                        123
                     </div>
                     <div className={styles.childOne}>
                        123
                     </div>
                     <div className={styles.childOne}>
                        123
                     </div>
                 </div>
             </div>
        </div> )
    }
}
 
export default Css3;