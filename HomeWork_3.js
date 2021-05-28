//ЗАДАНИЕ 1
for (i = 0; i < 100; i++) {
  for (let n = 2; n < i; n++) {
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
for (i = -1; i <= 8; console.log(++i));

//ЗАДАНИЕ №5
var x, z; //объявляем переменные
for (x = 0; x < 20; x++) {
  //первый цикл для увеличения первой переменной с 0 до 20
  for (z = 0; z <= x; z = z + 1) {
    //вложенный цикл для добавления символа на 1
    document.write(" x "); //Вывод символов "х"
  }
  document.write("<br>"); //Вывод разрыва строки между символами, чтобы получилась пирамидка, а не 210 символов подряд
}
