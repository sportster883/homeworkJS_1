"use strict";

const adminLogin = 'admin';
const adminPassword = 'mango';

let userInput = prompt("login");
if (userInput === null) {
    alert("Отменено пользователем");
} else if (userInput === adminLogin) {
    alert("Добро пожаловать!");
    let userInput = prompt("Введите пароль");
}
if (userInput === adminPassword) {
    alert("Access granted");
} else {
    alert("Доступ запрещен!");
}


let guest;
let name = "Mango";
guest = name;
console.log(guest);