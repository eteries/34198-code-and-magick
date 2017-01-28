'use strict';

window.renderStatistics = function (ctx, names, times) {

  // Тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Инфоокно
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  // Вводный текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 65);

  // Исходные данные для отрисовки статистики
  var x = 130;
  var y = 100;
  var width = 40;
  var height;
  var offset;
  var result;

  // Основной цикл отрисовки статистики
  for (var i = 0; i < names.length; i++) {

    // Расчёт переменных значений
    height = window.calcHeight(times)[i];
    offset = 150 - height;
    y = 100 + offset;

    // Столбцы
    ctx.fillStyle = window.colorize(names[i]);
    ctx.fillRect(x, y, width, height);

    // Подписи
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], x, 265);
    result = parseInt(times[i], 10).toString();
    ctx.fillText(result, x, 90 + offset);

    // Сдвиг влево для следующего столбца
    x += 90;
  }

};

// Вспомогательные функции
// 1. Синий цвет случайной насыщенности, для всех игроков кроме "Вы"
window.colorize = function (name) {
  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    var random = Math.ceil(Math.random() * 100);
    return 'hsl(240, ' + random + '%, 50%)';
  }
};

// 2. Массив с расчитанными высотами на основе результатов, исходя из того, что максимальный - 150
window.calcHeight = function (arr) {
  var max = window.getMax(arr);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * 150 / max;
  }
  return newArr;
};

// 3. Выбор максимального значения из массива
window.getMax = function (arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

