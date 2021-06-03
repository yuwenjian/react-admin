import ajax from './ajax'


// 用户登陆
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

// 添加用户
export const reqAdd = (username, password,phone,email,role_id) => ajax('/manage/user/add', {username, password,phone,email,role_id}, 'POST')
