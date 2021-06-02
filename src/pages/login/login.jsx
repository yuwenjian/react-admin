import React, {Component} from 'react'
import './login.less'
import logo from './image/logo.png'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
/*
* 登陆的路由组键
* */
const Item = Form.Item;
export default class Login extends Component{

    handleSubmit = (event)=>{

    }


    render() {
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt='logo'/>
                    <h1>React:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <div>
                        <h1>用户登陆</h1>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                        >
                            <Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Item>
                            <Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码！' }]}
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