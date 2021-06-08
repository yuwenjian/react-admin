/*
* 进行local数据存储管理模块
*
* */
import store from 'store'  // store是对localstorage的一个封装库

const USER_KEY = 'user_key'
export default {
    /*
    * 保存user信息
    * */

    saveUser (user) {
      //  Json.stringify() json对象转为json字符串
      // localStorage.setItem(USER_KEY, JSON.stringify(user))
        store.set(USER_KEY, user)
    },

    /*
    *
    * 获取用户信息*/
    getUser(){
      //  Json.parse() json字符串转为json对象
      // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },

    /*
    * 删除用户信息
    *
    * */
    removeUser(){
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}