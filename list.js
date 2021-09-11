'use strict'

const input = document.querySelector('.input'),
      addBtn = document.querySelector('.button__add'),
      list = document.querySelector('.item__list'),
      item = document.querySelector('.item');

      // <script ... defer> 작성안하면 실행안됨
addBtn.addEventListener("click", function() {
  const newList = document.createElement('li');
  newList.setAttribute('class', 'item')
  list.appendChild(newList);

  newList.innerText = input.value;
  input.value = "";
  console.log('DD')
})