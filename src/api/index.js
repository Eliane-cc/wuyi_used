import {get,post} from './http';

//判断用户是否登录成功
export const getLoginStatus = (params) => post(`cosumer/login/status`,params);

//用户注册
export const getRegisterStatus = (params) => post(`cosumer/register/status`,params);

//获取商品列表
export const getCommodityList =() => get(`commodity/getList`);

//根据分类、新旧程度、价格筛选商品列表
export const filterCommodity = (params) => get(`commodity/getList/filterSort`,params);

//根据商品名筛选商品列表
export const filterCommodityByName = (params) => get(`commodity/getList/filterName`,params);