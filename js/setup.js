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
var currentColorCoatNum = 0;
var currentColorEyesNum = 0;
var currentColorFireballNum = 0;

coat.addEventListener('click', function () {
  currentColorCoatNum = (currentColorCoatNum < colorsCoatLength - 1) ? (currentColorCoatNum + 1) : 0;
  coat.style.fill = colors.coat[currentColorCoatNum];
});

eyes.addEventListener('click', function () {
  currentColorEyesNum = (currentColorEyesNum < colorsEyesLength - 1) ? (currentColorEyesNum + 1) : 0;
  eyes.style.fill = colors.eyes[currentColorEyesNum];
});

fireball.addEventListener('click', function () {
  currentColorFireballNum = (currentColorFireballNum < colorsFireballLength - 1) ? (currentColorFireballNum + 1) : 0;
  fireball.style.background = colors.fireball[currentColorFireballNum];
});


