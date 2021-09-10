const input = document.querySelector('.input');
const addBtn = document.querySelector('.button__add');
const list = document.querySelector('.item__list');
const item = document.querySelector('.item');

addBtn.addEventListener('click', () => {
  
})

function addItem() {
  const li = document.createElement('li');
  // 1. button click 시 list 추가
  li.innerHTML = input.value;
  list.appendChild(li);
  input.value = '';
  
}