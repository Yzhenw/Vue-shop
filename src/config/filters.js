import Vue from "vue";

//人民币过滤器
Vue.filter("moneyFormat", (value) => {
  return "￥" + Number(value).toFixed(2);
});

// export const moneyFormat = (value)=>{
//     return "￥" + Number(value).toFixed(2);
// }
// 如果采用这种写法，需在main.js中加入如下代码
// import {moneyFormat} from './config/filters'
// Vue.filter("moneyFormat", moneyFormat)
// const arrays = [
//   [1, 2, 3, 4, 5, 6],
//   [3, 3, 4, 5, 6, 7, 8],
//   [6, 7, 7, 7, 8],
//   [4, 6, 7, 10, 11, 5, 6],
// ];
// const Average = (arrays) => {
//   let average = [];
//   for(let i=0;true;i++){
//     for(let j=0;true;j++){
//       if(arrays[i][j])
//     }
//   }
// };
