//ЗАДАНИЕ 1
for (i = 0; i < 100; i++) {
  for (let n = 2; n < i; n++) {
    if (i % n == 0) break;
    if (n == i - 1) document.write(" " + i);
  }
}

//ЗАДАНИЕ 3

//Переменные для хранения значений индексов массива
var quan, price;
//Пустой массив для хранения кол-ва и стоимости
var quanPrice = [];
//Пустой массив для хранения суммы всех элементов массива кол-во*стоимость
var result = [];
//Массив для исходных данных
let basket = [
  ["Яблоки", 6, 100],
  ["Груши", 2, 200],
  ["Бананы", 3, 300],
  ["Персики", 4, 400],
  ["Апельсины", 5, 100],
  ["Арбуз", 2, 1400],
];

//Цикл для записи в массив кол-ва и стоимости товаров
for (let i = 0; i < basket.length; i++) {
  quan = basket[i][1];
  quanPrice.push(quan);
  price = basket[i][2];
  quanPrice.push(price);
}
//Цикл для формирования массива кол-во товара * его стоимость

nextCount: for (let i = 0; i < quanPrice.length; ) {
  for (let n = i + 1; n < quanPrice.length; ) {
    summ = quanPrice[i] * quanPrice[n]; //переменная summ хранит произведение 0 и 1 элементов массива
    result.push(summ); //Запись summ в массив
    quanPrice.shift(0); //Удаление 0 и 1 элементов массива
    quanPrice.shift(1);
    continue nextCount;
  }
}
console.log(result);

//Функция подсчета общей стоимости товаров в корзине
function countBasketPrice(result) {
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  console.log(sum);
}
countBasketPrice(result);

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
