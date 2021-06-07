//шахматное поле генерируется размером 10х10 - 8 строк игровое поле и по одной строке сверху и снизу для вывода цифр. Тот же принцип со столбцами.

var container = document.createElement("div"); // создаю контейнер
container.className = "container"; //присваиваю ему класс container
container.id = "container"; //присваиваю ему идентификатор container
document.body.appendChild(container); // встраиваю его в DOM, в тег body

var chessDesk = document.createElement("div"); //создаю div для шахматной доски
chessDesk.className = "chessDesk"; //присваиваю ему класс
chessDesk.id = "chessDesk"; //присваиваю ему идентификатор
chessDesk.innerHTML = ""; //Добавляю в него пустой контент
container.appendChild(chessDesk); // встраиваю его в DOM, в тег container

var x, y, chessDeskCell, letter; //объявляю переменную x для строк, y для ячеек, chessDeskCell для создания div'а каждой ячейке, letter для хранения букв столбцов
for (x = 9; x >= 0; x--) {
  // запускаю цикл для строк

  for (y = 0; y < 10; y++) {
    // запускаю цикл для ячеек

    chessDeskCell = document.createElement("div"); //создаю в переменной новыю ячейку
    chessDeskCell.className = "chessDeskCell"; //присваиваю ей класс
    chessDeskCell.id = "" + x + y; // присваиваю ей индекс

    //определяю размеры игрового поля
    if (y === 0 || y === 9 || x === 9 || x === 0) {
      // если ячейка находится на 0 или 9 месте, то она находится за пределами игрового поля, а значит нужно проставить названия строк и столбцов

      if ((y === 0 || y === 9) && x !== 0 && x !== 9) {
        //если ячейка по вертикали находится между 0 и 9 значением строк, то
        chessDeskCell.className += " chessDeskCell_index"; //добавляю ей класс индекса
        chessDeskCell.innerHTML = " " + x; //и добавляю к пустому контенту порядковый номер строки, на которой она находится
      } else if ((x === 0 || x === 9) && y !== 0 && y !== 9) {
        //иначе эта ячейка находится не по вертикали а горизонтали, а значит выводим буквы
        switch (y) {
          case 1:
            letterName = "A";
            break;
          case 2:
            letterName = "B";
            break;
          case 3:
            letterName = "C";
            break;
          case 4:
            letterName = "D";
            break;
          case 5:
            letterName = "E";
            break;
          case 6:
            letterName = "F";
            break;
          case 7:
            letterName = "G";
            break;
          case 8:
            letterName = "H";
            break;
        }

        chessDeskCell.className += " chessDeskCell_index"; //присваиваю индекс ячейке в столбце
        chessDeskCell.innerHTML = " " + letterName; //добавляю контент с названием столбцов
      }
    } else {
      // определяю черные и белые ячейки

      if ((x + y) % 2 === 0) {
        chessDeskCell.className += " chessDeskCell_black";
      } else {
        chessDeskCell.className += " chessDeskCell_white";
      }
    }

    chessDesk.appendChild(chessDeskCell); //добавляю ячейку в DOM к элементу доски
  }
}
