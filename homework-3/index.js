// Naprevete opcija za append t.e da dodavame tekst vo fajlot namesto da go prezapisuvame toa sto veke go ima

// pr.

// Vangel Hristov
// 24
// Strumica

// Napisete edna callback funkcija.

// Da se izvezbaat modulite
// Da se instalira paket (bilo koj)
// Da go deinstalirate

function callback(func, a, b) {
  func(a, b);
}

function mySum(a, b) {
  console.log(a + b);
}

callback(mySum, 6, 8);

// const fs = require("fs");
// let myName = "Sara Davceva\n"
// let age = "20\n"
// let city = "Veles\n"

// fs.appendFile("newFile.txt", city, (err) => {
//   if (err) return err;
//   console.log("Success!");
// });

const { name, age } = require("./new")
console.log(name)
console.log(age)
