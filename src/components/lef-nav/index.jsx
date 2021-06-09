import React, {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
/*
* 左侧导航组件
* */
export default class LefNav extends Component {

    render() {
        return (
         <div className='lef-nav'>
             <header className='leaf-nav-header'>
                 <img src={logo} alt='header'/>
                 <h1 style={{color: '#fff'}}>TS后台</h1>
             </header>
         </div>
        )
    }


}