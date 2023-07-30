"use strict";
// Tipos Básicos
let age = 5;
const firstName = "Felipe";
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Felipe", "Jane"];
// Tupla
const person = [4, "João"];
const people = [
    [1, "Jane"],
    [2, "DOE"],
];
// Intersection 
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Down;
console.log(direction);
