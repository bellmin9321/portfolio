'use strict'

const input = document.querySelector('.input'),
      addBtn = document.querySelector('.button__add'),
      list = document.querySelector('.item__list'),
      item = document.querySelector('.item');

      // <script ... defer> 작성안하면 실행안됨
function onAdd() {
  const text = input.value
  if (text === '') {
    input.focus();
    return;
  }
  
const item = createItem(text);
list.appendChild(item);

  item.addEventListener('click', () => {
    item.style.textDecoration = "line-through";
  })
  item.scrollIntoView({block: 'center'});
  input.focus();
}

let id = 0;
function createItem(text) {
  const row = document.createElement('li');
  row.setAttribute('class', 'item__row');
  row.setAttribute('data-id', id);
  row.innerHTML = `
  <div class="item">
    <span class="item__name">${text}</span>
    <button><i class="fas fa-minus" data-id=${id}></i></button>
  </div>
  `
  id++;
  return row;
}

addBtn.addEventListener("click", () => {
  onAdd();
})

input.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    onAdd();
  }
})