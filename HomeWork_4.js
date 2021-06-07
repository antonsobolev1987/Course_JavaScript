//ЗАДАНИЕ 1
//Объявил переменную для генерации случайного числа
let randomNumber = Math.round(Math.random() * 1100);
console.log("Сгенерировано число - " + randomNumber);

//функция анализа числа
function numberToObj(randomNumber) {
  //условие, если число является трехзначным, то
  if (randomNumber > 0 && randomNumber <= 999) {
    let analysNumber = {
      //объявляю переменную-объект
      hundred() {
        //с набором свойств-функций "сотни"
        hundred = Math.floor(randomNumber / 100);
        return hundred; //возврат результата функции
      },
      tens() {
        //с набором свойств-функций "десятки"
        tens = Math.floor((randomNumber - hundred * 100) / 10);
        return tens; //возврат результата функции
      },
      ones() {
        //с набором свойств-функций "единицы"
        ones = randomNumber - (hundred * 100 + tens * 10);
        return ones; //возврат результата функции
      },
    };
    //вызов функций
    analysNumber.hundred();
    analysNumber.tens();
    analysNumber.ones();
    //вывод результатов в консоль.лог
    console.log("В сгенерированном числе сотен " + hundred);
    console.log("десятков " + tens);
    console.log("единиц " + ones);
  } else {
    //иначе (строка 9) сгенерировано не 3-х значное число
    console.log("Сгенерировано не 3-х значное число! Попробуйте еще раз!");
    //Вывод пустого объекта
    let analysNumber = {};
    console.log(analysNumber);
  }
}

numberToObj(randomNumber);

//ЗАДАНИЕ 2
var sum = 0;
var quanPrice = [];
var result = [];
var basket = {
  product: [
    {
      article: 01,
      name: "Яблоко",
      quant: 6,
      price: 100,
    },
    {
      article: 02,
      name: "Груша",
      quant: 2,
      price: 200,
    },
  ],
  countBasketPrice(result) {},
};

//Цикл для записи в массив кол-ва и стоимости товаров
for (let i = 0; i < basket.product.length; i++) {
  var quan;
  var price;
  quan = basket.product[i].quant;
  quanPrice.push(quan);
  price = basket.product[i].price;
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
countBasketPrice(result);

//Функция подсчета общей стоимости товаров в корзине
function countBasketPrice(result) {
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return;
}
console.log(sum);
