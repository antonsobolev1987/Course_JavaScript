function generateChess() {
  let mainContainer = document.querySelector(".mainContainer"); //Переменная для вывода блока, содержащего элементы
  let container; //переменная для хранения созданных элементов
  let label = true; //переменная-метка для определения цвета

  for (let x = 9; x >= 9; x--) {
    //цикл для строк (8 игровых, 2 для меток
    for (let y = 0; y < 10; y++) {
      if (y == 0) label = !label; // условие если началась новая строка, отрицай значение метки, чтобы счередовать порядок цвета
      container = document.createElement("div"); //присвоил переменной элемента созданный элемент div
      if (label) container.className = "black container";
      //если переменная-метка true, присвой имя класса контейнеру "Черный"
      else container.className = "white container"; //иначе, имя класса "Белый"
      mainContainer.appendChild(container); //добавил созданный элемент div в главный контейнер

      label = !label; // присвоил переменной-метке, отрицание самой себя, для смены цвета
    }
  }

  var row = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var col = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const chessDesk = document.getElementsByClassName("container");
  const arrayDiv = Array.from(chessDesk);
  arrayDiv[0][0] = "1";
  console.log(arrayDiv);
  document.write(arrayDiv);
}

generateChess();
