//ЗАДАНИЕ 1
for (i = 0; i < 100; i++) {
  for (let n = 2; n < i; n++) {
    if (i % n == 0) break;
    if (n == i - 1) document.write(" " + i);
  }
}
//доделать цикл, считает с 4
let i = 1;
while (i < 100) {
  i++;
  let n = 2;
  while (n < i) {
    // n++;
    if (i % n == 0) break;
    if (n == i - 1) document.write(" " + i);
  }
}

//ЗАДАНИЕ №2

var quan, price;
var resultQuan = [];
var resultPrice = [];
var summ;
let basket = [
  ["Яблоки", 6, 100],
  ["Груши", 2, 200],
  ["Бананы", 3, 300],
  ["Персики", 4, 400],
];

for (let i = 0; i < basket.length; i++) {
  quan = basket[i][1];
  resultQuan.push(quan);
}

for (let i = 0; i < basket.length; i++) {
  price = basket[i][2];
  resultPrice.push(price);
}

//+++++++++++++++++++++++++++++++++++
let basket = [
  ["Яблоки", 6, 100],
  ["Груши", 2, 200],
  ["Бананы", 3, 300],
  ["Персики", 4, 400],
];

function countBasketPrice(basket) {
  for (let i = 0; i < basket.length; i++) {
    for (let n = 0; n < basket.length; n++) {
      // const element = array[index];
    }
  }
}

//ЗАДАНИЕ 4
for (i = 0; i <= 9; console.log(++i));
