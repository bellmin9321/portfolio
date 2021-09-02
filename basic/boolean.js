
// Boolean
// false: 0, -0, '', null, undefined
// true: -1, 'hello', 
let obj = {
  age: 'ellie'
}; // undefined
if (obj) {
  console.log(obj.name);
} 

obj && console.log(obj.name);