/*
* 能发送异步ajax请求的模块
* 封装axios库
*
* 1. 统一处理请求异常
* */
import axios from "axios";
import {message} from "antd";

export default function ajax(url, data={}, method="GET"){

    /*
    * 统一处理请求异常处理，
    *  1。自己封装一个promisre对象，处理
    * */
    return new Promise((resolve, reject) =>{
        // 实例化一个promise对象
        let promise

        if(method === "GET"){  // 封装Get请求
            promise =  axios.get(url, { // 配置对像
                params: data
            })
        }else {
            promise =  axios.post(url, data)
        }
        promise.then( response => {
            // 请求成功的处理
            resolve(response.data)
        }).catch(error => {
            // 请求失败的处理
           message.error('请求失败!'+error.message)

        })

    })



}
