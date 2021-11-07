import { appendMany, prependMany } from './index.js';


let arr = [];
appendMany([1], arr);
console.log(arr);
// [1]


appendMany([2], arr);
console.log(arr);
// [1,2]


prependMany([0], arr);
console.log(arr);
// [ 0, 1, 2 ]


prependMany([-2, -1], arr);
console.log(arr);
// [ -2, -1, 0, 1, 2 ]


appendMany([3, 4], arr);
console.log(arr);
// [ -2, -1, 0, 1, 2, 3, 4]



prependMany([[-2], [-1]], arr);
console.log(arr);
// [ [-2], [-1] -2, -1, 0, 1, 2, 3, 4]
