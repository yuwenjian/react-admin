import React, {Component} from 'react'
import memonyUnilt from "../../unitls/memonyUnilt";
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';

/*
* 后台管理路由组建
* */

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component{

   render() {
       // 获取登陆的用户的信息
        const user =  memonyUnilt.user  // 这是从内存中取

           if(!user || !user._id){
             // user不存在或者id不存在，跳转到登陆界面
               return <Redirect to='/login'/>
           }else{
              return(
                      <Layout style={{height: '100%'}}>
                          <Sider>Sider</Sider>
                          <Layout>
                              <Header>Header</Header>
                              <Content>Content</Content>
                              <Footer>Footer</Footer>
                          </Layout>
                      </Layout>

              )
           }

  }
}