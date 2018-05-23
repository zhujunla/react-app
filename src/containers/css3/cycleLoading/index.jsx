import React, { Component } from 'react';
import styles from './style.less';
import CylcleLoadingOne from '../cylcleLoadingOne'

class Css3 extends Component {
    static CylcleLoadingOne = CylcleLoadingOne 
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <div className={styles.cycleLoading}>
                <div className={styles.father}>
                    <span className={styles.child+' '+styles.child1}></span>  
                </div>
                <div className={styles.father}>
                    <span className={styles.child+' '+styles.child2}></span>  
                </div>
                <div className={styles.father}>
                    <span className={styles.child+' '+styles.child3}></span>  
                </div>
                <div className={styles.father}>
                    <span className={styles.child+' '+styles.child4}></span>  
                </div>
                <div className={styles.father}>
                    <span className={styles.child+' '+styles.child5}></span>  
                </div>                
            </div> 
        </div> )
    }
}
 
export default Css3;