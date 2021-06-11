import React, {Component} from 'react'
import './index.less'
import {reqWeather} from "../../api";
export default class Header extends Component {



    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎，admin</span>
                    <a href='javascript:'>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                       首页
                    </div>
                    <div className='header-bottom-right'>
                        <span >2021-06-11 13:23:00</span>
                        <img src='https://www.tianqi.com//static/wap2018/ico1/b0.png' alt='weather'/>
                        <span>晴</span>
                    </div>

                </div>
            </div>
          )
    }


}