import React, {Component, memo} from 'react'
import './login.less'
import logo from './image/logo.png'
import { Form, Input, Button ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from "../../api";
import memonyUnilt from "../../unitls/memonyUnilt";
import storageUtils from "../../unitls/storageUtils";
import {Redirect} from "react-router-dom";
/*
* 登陆的路由组键
* */
const Item = Form.Item;
export default class Login extends Component{

    onFinish = async (values) => {
        console.log('开始ajax验证  ', values);
        const {username, password} = values
        const result = await  reqLogin(username,password)
        if(result.status === 0){
            // 保存用户信息到memonyUnitl中的user对象(内存存储)
            memonyUnilt.user = result.data
             // 将用户信息需要local持久化存储
            storageUtils.saveUser(result.data)

            // 登陆成功跳转到admn界面
            this.props.history.replace('/')
        }else{
            // 登陆失败
            message.error('登陆失败！'+result.msg)
        }


    };

    validator = (rule, value, callback) => {
        const length = value && value.length
        const pwdReg = /^[a-zA-Z0-9_]+$/
        if (!value) {
            callback('密码不能为空')
        } else if (length < 4) {
            callback('密码必须大于 4 位')
        } else if (length > 12) {
            callback('密码必须小于 12 位')
        } else if (!pwdReg.test(value)) {
            callback('密码必须是英文、数组或下划线组成')
        } else {
            callback()
        }
    }
    render() {
        const user= memonyUnilt.user

        if(user && user._id){
            return <Redirect to='/'/>
        }

        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt='logo'/>
                    <h1>SB:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <div>
                        <h1>用户登陆</h1>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Item
                                name="username"
                                rules={[
                                    { required: true, message: '请输入用户名!' },
                                    {min: 4,  message: '用户名至少4位'},
                                    {max: 12, message: '用户名至多12位'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文，数字下划线组成'}
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Item>
                            <Item
                                name="password"
                                // 表单验证 rules
                                rules={[
                                    {required: true, message: '请输入密码！'},
                                    // 自定义表单校验规则
                                    {validator: this.validator}
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Item>

                            <Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}