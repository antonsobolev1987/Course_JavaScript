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
