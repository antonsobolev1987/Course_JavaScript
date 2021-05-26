function multi() {

    //Переменная для значения по Фаренгейту
    let Tf = 0;

    //Переменная для значения по Цельсию, берется из поля ввода
    let Tc = document.getElementById('inputCount').value;

    //Перевод из Цельсия в Фаренгейт и присвоение значение Фаренгейта переменной Tf
    Tf = (9 / 5) * Tc + 32;

    //Вывод пользователю значения Tf
    alert("Значение температуры в градусах по Фаренгейту: " + Tf);

    //Очистка строки ввода после закрытия alert
    document.getElementById('inputCount').value = "";

    //Курсор в строку ввода
    document.getElementById('inputCount').focus();

}
