import React, { Component } from 'react';
import styles from './style.less';
class Css3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <div className={styles.cycleLoading}>
                    <span className={styles.child+' '+styles.child1}></span>  
                    <span className={styles.child+' '+styles.child2}></span>  
                    <span className={styles.child+' '+styles.child3}></span>  
               
                    <span className={styles.child+' '+styles.child4}></span>  
                   
            </div> 
        </div> )
    }
}
 
export default Css3;