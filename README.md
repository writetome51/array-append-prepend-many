# prependMany\<T\>(values: T[], array: T[]): void

Adds `values` to beginning of `array`.  Alternative to `array.unshift(...values)`

# appendMany\<T\>(values: T[], array: T[]): void

Adds `values` to end of `array`.  Alternative to `array.push(...values)`

 
## Examples
```js
let arr = [1, 2, 3];  
prependMany([10, 11], arr); 
// arr === [10, 11, 1, 2, 3] 

arr = [1, 2, 3];
appendMany([10, 11], arr); 
// arr === [1, 2, 3, 10, 11]

arr = [ [1, 2, 3] ];
prependMany([ [10,11], [12,13] ], arr);
// arr === [ [10,11], [12,13], [1, 2, 3] ]

arr = [ [1, 2, 3] ];
appendMany([ [10,11], [12,13] ], arr);
// arr === [ [1, 2, 3], [10,11], [12,13] ]
```

## Installation
`npm i  @writetome51/array-append-prepend-many`

## Loading
```js
import {prependMany, appendMany} from '@writetome51/array-append-prepend-many';
```
