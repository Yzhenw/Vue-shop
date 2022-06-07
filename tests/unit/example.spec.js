import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).to.include(msg)
  })
})

// function Finding(str1, str2) {
//   let all = [];
//   let len1 = str1.length;
//   let len2 = str2.length;
//   child = len1 <= len2 ? str1 : str2;
//   parent = len1 <= len2 ? str2 : str1;
//   for (i = 0; i < parent.length - child.length + 1; i++) {
//     let arr = parent.slice(i, i + child.length);
//     if (child === arr) {
//       all.push(i);
//     }
//   }
//   return all;
// }
// let p1 = "123abcdefabc456gabchiabc";
// let p2 = "abc";
// // console.log(Finding(p1, p2));

// const Finding = (child, parent) => {
//   let res = [];
//   for (let i = 0; i <= parent.length - child.length; i++) {
//     let index = parent.indexOf(child, i);
//     if (index) {
//       res.push(index);
//       i = index + child.length - 2;
//     }
//   }
//   return res;
// };
// let p1 = "123abcdefabc456gabchiabc";
// let res2 = p1.split("").reduceRight((total, val) => {
//   return total + val;
// });
// console.log(res2);
// let res = p1.split("").reverse().join("");
// console.log(res);
// let p2 = "abc";
// console.log(Finding(p2, p1));

// let filterP = p3
//   .toLowerCase()
//   .replace(/[\-\_\,\.\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g, ""); // 去掉特殊字符
// let p3 = "Cigar? Toss it in a can. It is so tragic";
// let filterP = p3.toLowerCase().replace(/[\?\,\.\s]/g, "").replace(" ","");
// console.log(filterP);
// let arr = filterP.split("");
// arr.forEach((val, index) => {
//   if (val == " ") {
//     arr.splice(index, 1);
//   }
// });
// console.log(arr.join(""));
// console.log(p3.split("").reduceRight((total, val) => total + val));
// console.log(p2.slice(2, 5));

// function Average(arr) {
//   const maxL = Math.max(...arr.map((v) => v.length));
//   let Res = [];
//   for (var i = 0; i < maxL; i++) {
//     let sum = 0;
//     let resArr = [];
//     arr.forEach((val) => {
//       if (typeof val[i] != "undefined") {
//         resArr.push(val[i]);
//       }
//     });
//     // console.log(resArr);
//     resArr.forEach((v) => {
//       sum += v;
//     });
//     Res.push(sum / resArr.length);
//   }
//   return Res;
// }
// const arrays = [
//   [1, 2, 3, 4, 5, 6],
//   [3, 3, 4, 5, 6, 7, 8],
//   [6, 7, 0, 7, 8],
//   [4, 6, 7, 10, 11, 5, 6],
// ];
// console.log(Average(arrays));
// console.log(typeof arrays[2][5] != "undefined");

// const Aver = (arr) => {
//   const maxL = Math.max(...arr.map((v) => v.length));
//   let Res = [];
//   for (let i = 0; i < maxL; i++) {
//     let sum = 0;
//     let res = [];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] !== undefined) {
//         sum += arr[j][i];
//         res.push(arr[j][i]);
//       }
//     }
//     Res.push(sum / res.length);
//   }
//   return Res;
// };
// const arrays = [
//   [1, 2, 3, 4, 5, 6],
//   [3, 3, 4, 5, 6, 7, 8],
//   [6, 7, 0, 7, 8],
//   [4, 6, 7, 10, 11, 5, 6],
// ];
// console.log(Aver(arrays));

// const Sum = (arr) => {
//   let SumList = [];
//   for (let i = 0; i < arr[0].length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       sum += arr[j][i];
//     }
//     SumList.push(sum);
//   }
//   SumList.sort((a, b) => {
//     return b - a;
//   });
//   return SumList;
// };
// const arrays = [
//   [100, 98, 96, 92, 87, 90, 96],
//   [80, 95, 94, 97, 88, 92, 86],
//   [93, 98, 84, 98, 100, 95, 89],
//   [70, 92, 100, 95, 97, 90, 76],
// ];
// console.log(Sum(arrays));

// const object = {
//   a: "a",
//   b: ["b", "bb", "bbb"],
//   c: "ccc",
//   d: "dd",
//   e: ["e", "ee", "eee", "eeee"],
//   f: ["f", "ff"],
// };

// const MatchEvery = (group) => {
//   let pair = [];
//   for (let key in group) {
//     if (Array.isArray(group[key])) {
//       if (pair.length > 0) {
//         const lists = [];
//         for (const item of pair) {
//           item[key] = group[key][0];
//           for (let i = 1; i < group[key].length; i++) {
//             lists.push({ ...item, [key]: group[key][i] });
//           }
//         }
//         pair = pair.concat(lists);
//       } else {
//         for (let item of group[key]) {
//           pair.push({ ...group, [key]: item });
//           // console.log({ ...group, [key]: item });
//         }
//       }
//     }
//   }
//   return pair;
// };

// console.log(MatchEvery(object));

// const object = {
//   a: "a",
//   b: ["b", "bb", "bbb"],
//   c: "ccc",
//   d: "dd",
//   e: ["e", "ee", "eee", "eeee"],
//   f: ["f", "ff"],
// };

// const Match = (obj) => {
//   let newArr = [];
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       if (newArr.length > 0) {
//         let lists = [];
//         for (let item in newArr) {
//           item[key] = obj[key][0];
//           for (let i = 1; i < obj[key].length; i++) {
//             lists.push({ ...item, [key]: obj[key][i] });
//           }
//           newArr = newArr.concat(lists);
//         }
//       } else {
//         for (let item of obj[key]) {
//           lists.push({ ...obj, [key]: item });
//         }
//       }
//     }
//   }
//   return newArr;
// };
// console.log(Match(object));

// const Flower = (num) => {
//   let arr = num.toString().split("");
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//   }
//   console.log(sum);
//   if (sum == num) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(Flower(153));

//整数反转
// let num = -123;
// const Integer = (num) => {
//   if (num < 0) {
//     let res = num.toString().replace("-", "").split("").reverse().join("");
//     return res * Math.sign(num);
//   } else {
//     return num.toString().split("").reverse().join("");
//   }
// };
// console.log(Integer(num));

// //找出字符串中出现次数最多的字符
// let p1 = "abcdefabcgabchiabc";
// const Always = (str) => {
//   let times = {};
//   for (let val of str) {
//     times[val] = times[val] ? times[val] + 1 : 1;
//   }
//   let max = [];
//   for (let key in times) {
//     if (times[key] === Math.max(...Object.values(times))) {
//       max.push(key);
//     }
//   }
//   return max;
// };
// console.log(Always(p1));

// //找出string中元音字母出现的个数
// let str = "dsdsfnejwqpiaieosiiouec";
// const Yuan = (str) => {
//   let times = {};
//   const choice = ["a", "e", "i", "o", "u"];
//   for (let val of str) {
//     if (choice.includes(val)) {
//       times[val] = times[val] ? times[val] + 1 : 1;
//     }
//   }
//   return times;
// };
// console.log(Yuan(str));
// //使用正则表达式
// let str = "dsdsfnejwqpiaieosiiouec";
// const Yuan = (str) => {
//   let match = str.match(/[aeiou]/gi);
//   return match ? match.length : 0;
// };
// console.log(Yuan(str));
// let str = "dsdsfnejwqpiaieosiiouec";
// console.log(str.reverse());

// //给定数组和大小，把数组拆成指定大小的数组列表
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const Cut = (arr, num) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr.slice(i, i + num));
//     i = i + num - 1;
//   }
//   return res;
// };
// console.log(Cut(arr, 4));
// //首字母大写
// let content = "would you please invite me to your concert, baby?";
// const Upper = (str) => {
//   let arr = str.split(" ");
//   return arr
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// };
// console.log(Upper(content));
// //短语反转
// let content = "would you please invite me to your concert, baby?";
// const Re = (str) => {
//   let arr = str.split(" ");
//   return arr.map((val)=>{
//     return val.split("").reverse().join("");
//   }).join(" ")
// };
// console.log(Re(content));

// //9 凯撒密码 给定一个短语，通过在字母表中上下移动一个给定的整数来替换每个字符
// //Unicode A:65 a:97
// //str.charCodeAt(index)
// //String.fromCharCode(65) === 'A'
// let str = "I love JavaScript!";
// const Change = (str, num) => {
//   // let alpha = "abcdefghijklmnopqrstuvwxyz".split(""); //这种创建数组的方法不错
//   let strArr = str.split("");
//   let index = 0;
//   for (let key in strArr) {
//     //使用key循环可以改变数组内的值
//     if (/[abcdefghijklmnopqrstuvwxyz]/gi.test(strArr[key])) {
//       //不使用正则也可以使用includes
//       if (strArr[key].charCodeAt(0) >= "a".charCodeAt(0)) {
//         //小写字母
//         index = (strArr[key].charCodeAt(0) - "a".charCodeAt(0) + num) % 26;
//         strArr[key] = String.fromCharCode(
//           index >= 0
//             ? index + "a".charCodeAt(0)
//             : index + 26 + "a".charCodeAt(0)
//         );
//       } else {
//         index = (strArr[key].charCodeAt(0) - "A".charCodeAt(0) + num) % 26;
//         strArr[key] = String.fromCharCode(
//           index >= 0
//             ? index + "A".charCodeAt(0)
//             : index + 26 + "A".charCodeAt(0)
//         );
//       }
//     }
//   }
//   return strArr.join("");
// };
// let str = "E hkra FwrwOynelp!";
// for (let i = 1; i < 26; i++) {
//   console.log(Change(str, i));
// }

// //10.找出从0开始到定整数n的全部质数
// //先创建一个判断质数的函数
// const Primer = (num) => {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     //判断是不是质数 判断一半就可以了
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// const FindPrimer = (num) => {
//   let res = [];
//   for (let i = 2; i < num + 1; i++) {
//     if (Primer(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// };
// console.log(FindPrimer(100));
// //斐波那契数列
// const Fibonacci = (n) => {
//   let list = [];
//   for (let i = 0; i < n; i++) {
//     if (i < 2) {
//       list.push(i + 1);
//     } else {
//       list[i] = list[i - 1] + list[i - 2];
//     }
//   }
//   return list;
// };
// console.log(Fibonacci(23));

// //回文短句
// let p3 = "Cigar? Toss it in a can. It is so tragic";
// const HuiWen = (str) => {
//   let filterP = str.toLowerCase().replace(/[\.\,\?\s]/g, "");
//   return filterP.split("").reverse().join("") === filterP;
// };
// console.log(HuiWen(p3));

const debounce = (callback, delay) => {
  let timer = null
  return (...params) => {
    //使用扩展运算符，保证回调函数传入的参数不丢失
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...params)
    }, delay)
  }
}

const throttle = (callback, wait) => {
  let timer = null,
    save = undefined
  return (...params) => {
    save = params
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        callback(...save)
        save = undefined
        timer = null
      }, wait)
    }
  }
}

const throttle = (callback, wait) => {
  let timer = null,
    save = undefined
  return (...params) => {
    save = params
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        callback(...save)
        timer = null
        save = undefined
      }, wait)
    }
  }
}
