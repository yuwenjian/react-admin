import React from "react";
import ReactDOM from 'react-dom'
import App from "./App"
import storageUtils from "./unitls/storageUtils";
import memonyUnilt from "./unitls/memonyUnilt";


// 从local本地持久化中取user数据，然后传给内存中
const user = storageUtils.getUser()
memonyUnilt.user = user
ReactDOM.render(<App /> ,document.getElementById("root"))