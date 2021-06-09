import React, {Component} from 'react'
import memonyUnilt from "../../unitls/memonyUnilt";
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import LefNav from "../../components/lef-nav";
import Header from "../../components/header";

/*
* 后台管理路由组建
* */

const {Footer, Sider, Content } = Layout;

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
                          <Sider>
                              <LefNav />
                          </Sider>
                          <Layout>
                              <Header>Header</Header>
                              <Content style={{backgroundColor: "#fff"}}>Content</Content>
                              <Footer style={{textAlign: "center", color: "#cccccc"}}>推荐使用Google浏览器，可以获取更好的体验！</Footer>
                          </Layout>
                      </Layout>

              )
           }

  }
}