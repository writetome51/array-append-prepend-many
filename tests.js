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








//speed comparison between .push() and loop using simple assignment:

//Faster:
arr = [];
let ms = Date.now();
for (let i=0; i<50000000; ++i){
	arr.push(0);
}
console.log(Date.now() - ms);


arr = [];
ms = Date.now();
for (let i=0, len=arr.length; i<50000000; ++i){
	arr[len] = 0;
	++len;
}
console.log(Date.now() - ms);



//speed comparison between .unshift() and .splice():

arr = [];
ms = Date.now();
for (let i=0; i<19900; ++i){
	arr.unshift(0,0,0);
}
console.log(Date.now() - ms);
let firstLen = arr.length;


arr = [];
ms = Date.now();
for (let i=0; i<19900; ++i){
	arr.splice(0,0, 0,0,0);
}
console.log(Date.now() - ms);
console.log(arr.length === firstLen);
