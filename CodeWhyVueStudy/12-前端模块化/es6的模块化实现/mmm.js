// 1.导入{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
    console.log('cool')
    console.log(sum(20, 30));
}
// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);
//3.导入export的function/class
import {mul} from "./aaa.js";

console.log(mul(20, 30));

import {Person} from "./aaa.js";

const p = new Person();
p.run();
// 4.导入export default中的内容
import call from "./aaa.js"

call('hello')

// 5.统一全部导入
import *as aaa from "./aaa.js"

console.log(aaa.flag);
console.log(aaa.height);