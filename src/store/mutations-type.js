// 其实不太知道这个地方为啥要写这个 hhh基本忘完了
export const ADD_GOODS = "ADD_GOODS"; //添加商品到购物车
export const INIT_SHOP_CART = "INIT_SHOP_CART";
export const ADD_GOODs_NUM = "ADD_GOODs_NUM";
export const DEL_GOODs_NUM = "DEL_GOODs_NUM";
export const CLEAR_CART = "CLEAR_CART";
export const DEL_GOOD = "DEL_GOOD";
export const SELECT_SINGLE_GOOD = "SELECT_SINGLE_GOOD";
export const SELECT_ALL_GOODS = "SELECT_ALL_GOODS";
export const USER_INFO = "USER_INFO";
export const INIT_USER_INFO = "INIT_USER_INFO";
export const CLEAR_USER = "CLEAR_USER";
export const INIT_ADDRESS = "INIT_ADDRESS";
export const ADDRESS = "ADDRESS";
//使用常量替代mutations事件类型在各种Flux实现中是很常见的模式。
//把这些常量放在单独的文件种可以让你的合作者对整个app包含的mutations一目了然
//在需要多人协作的大型项目中，这会很有帮助。
