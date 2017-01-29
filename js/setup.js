'use strict';

// Элементы окна
var setupWindow = document.querySelector('.setup');
var opener = document.querySelector('.setup-open');
var closer = setupWindow.querySelector('.setup-close');
var form = setupWindow.querySelector('.setup-wizard-form');

// Элементы формы
var userName = form.querySelector('.setup-user-name');
var coat = form.querySelector('#wizard-coat');
var eyes = form.querySelector('#wizard-eyes');
var fireball = form.querySelector('.setup-fireball-wrap');

// Цвета
var colors = {
  coat: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  eyes: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  fireball: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

// Открытие-закрытие окна
opener.addEventListener('click', function () {
  setupWindow.classList.remove('invisible');
});

closer.addEventListener('click', function () {
  setupWindow.classList.add('invisible');
});

// Валидация имени
userName.required = true;
userName.maxLength = 50;

// Изменение цветов
var colorsCoatLength = colors.coat.length;
var colorsEyesLength = colors.eyes.length;
var colorsFireballLength = colors.fireball.length;

//  Начиная с нуля, далее по кругу в пределах длины текущего массива
var currentColorNum = 0;

coat.addEventListener('click', function () {
  currentColorNum = (currentColorNum < colorsCoatLength - 1) ? (currentColorNum + 1) : 0;
  coat.style.fill = colors.coat[currentColorNum];
});

eyes.addEventListener('click', function () {
  currentColorNum = (currentColorNum < colorsEyesLength - 1) ? (currentColorNum + 1) : 0;
  eyes.style.fill = colors.eyes[currentColorNum];
});

fireball.addEventListener('click', function () {
  currentColorNum = (currentColorNum < colorsFireballLength - 1) ? (currentColorNum + 1) : 0;
  fireball.style.background = colors.fireball[currentColorNum];
});


