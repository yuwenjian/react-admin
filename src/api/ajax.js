/*
* 能发送异步ajax请求的模块
* 封装axios库
*
* */
import axios from "axios";

export default function ajax(url, data={}, method="GET"){

    if(method === "GET"){  // 封装Get请求
       return  axios.get(url, { // 配置对像
              params: data
        })
    }else {
        return  axios.post(url, data)
    }


}
