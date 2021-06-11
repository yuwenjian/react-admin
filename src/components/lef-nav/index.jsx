import React, {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import { Menu } from 'antd';
import {
    BankOutlined,
    AppstoreOutlined,
    BarsOutlined,
    CoffeeOutlined,
    UserOutlined,
    TeamOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined
} from '@ant-design/icons';
/*
* 左侧导航组件
* */

const { SubMenu } = Menu;


export default class LefNav extends Component {



    state = {
        collapsed: false,
    };
// 更具menuList的数组时间生成对应的表亲啊数组
//     getMenuNodes_map = (menuList) =>{
//        return menuList.map(item => {
//            if(!item.children){
//                return(
//                    <Menu.Item key={item.key} icon={item.icon}>
//                        <Link to={item.key}>
//                            { item.title}
//                        </Link>
//                    </Menu.Item>
//                )
//            }else {
//               return(
//                   <SubMenu key={item.key} icon={item.icon} title={item.title}>
//                       {this.getMenuNodes_map(item.children)}
//
//                   </SubMenu>
//               )
//            }
//        })
//     }

/*
    getMenuNodes = (menuList) => {

       // 获取当前路由路径
        const path = this.props.location.pathname

        return menuList.reduce((pre, item) => {
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key} icon={<BankOutlined/>}>
                        <Link to={item.key}>
                            { item.title}
                        </Link>
                    </Menu.Item>
                ))
            }else {
                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(cItem => cItem.key === path)
                if(cItem){
                    this.openKey = item.key
                }

                pre.push((
                    <SubMenu key={item.key} icon={<MailOutlined/>} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                ))
            }
            return pre
        }, [])
    }
*/



    render() {
        return (
             <div className='lef-nav'>
                 <Link to='/home' className='leaf-nav-header'>
                     <img src={logo} alt='header'/>
                     <h1 style={{color: '#fff'}}>TS后台</h1>
                 </Link>

                 <Menu
                     mode="inline"
                     theme="dark"
                     defaultSelectedKeys={['/home']}
                     defaultOpenKeys={["/products"]}
                 >

                   <Menu.Item key="/home" icon={<BankOutlined />}>
                         <Link to='/home'>
                            首页
                         </Link>
                     </Menu.Item>

                       <SubMenu key="/products" icon={<AppstoreOutlined />} title="商品">
                         <Menu.Item key="/category" icon={<BarsOutlined />}>
                             <Link to='/category'>
                                品类管理
                             </Link>
                         </Menu.Item>
                         <Menu.Item key="/product" icon={<CoffeeOutlined />}>
                             <Link to='/product'>
                                商品管理
                             </Link>
                         </Menu.Item>
                     </SubMenu>
                      <Menu.Item key="/user" icon={<UserOutlined />}>
                         <Link to='/user'>
                            用户管理
                         </Link>
                     </Menu.Item>
                     <Menu.Item key="/role" icon={<TeamOutlined />}>
                         <Link to='/role'>
                             角色管理
                         </Link>
                     </Menu.Item>
                     <SubMenu key="/charts" icon={<AreaChartOutlined />} title="图形图表">
                         <Menu.Item key="/charts/bar" icon={<BarChartOutlined />}>
                             <Link to='/charts/bar'>
                                 柱型图
                             </Link>
                         </Menu.Item>
                         <Menu.Item key="/charts/line" icon={<LineChartOutlined />}>
                             <Link to='/charts/line'>
                                 折线图
                             </Link>

                         </Menu.Item>
                         <Menu.Item key="/charts/pie" icon={<PieChartOutlined />}>
                             <Link to='/charts/pie'>
                                 饼图
                             </Link>
                         </Menu.Item>
                     </SubMenu>
                 </Menu>

             </div>
        )
    }


}