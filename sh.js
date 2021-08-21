'use strict'

const itemList = [];
const list = document.querySelector(".list"),
  item = document.querySelector(".item"),
  item__row = document.querySelector(".item__row"),
  item__delete = document.querySelector(".item__delete"),
  footer__input = document.querySelector(".footer__input"),
  footer__button = document.querySelector(".footer__button");

inputButton.addEventListener('click', addItem)

function addItem() {
  const newList = document.createElement('li');
  newList.innerHTML = item__row.value;
  list.appendChild(newList);
  }





