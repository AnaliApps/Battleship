let Ship = require("./ship/ship")

let s = new Ship(6);
s.setHit(10)
let count = 1;
s.setHit(count)
count++
s.setHit(count)
s.setSunk(s.getHit(),s.getLength())

s.isSunk()

console.log(s)