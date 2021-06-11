import ajax from './ajax'
import jsonp from "jsonp";
import {message} from 'antd'


// 用户登陆
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

// 添加用户
export const reqAdd = (username, password,phone,email,role_id) => ajax('/manage/user/add', {username, password,phone,email,role_id}, 'POST')


// jsonp请求 请求天气预报
export const reqWeather = (city_code) =>{

    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/weather/v1/?district_id=${city_code}&data_type=now&ak=CiQHrZYSofweW57AvKo4LuHsHfwMCR1L`

    })
}

