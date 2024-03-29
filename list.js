'use strict'

const input = document.querySelector('.input'),
      addBtn = document.querySelector('.button__add'),
      items = document.querySelector('.items'),
      item = document.querySelector('.item'),
      itemRow = document.querySelector('.item__row'),
      deleteBtn = document.querySelector('.delete__btn');

      // <script ... defer> 작성안하면 실행안됨
function onAdd() {
  const text = input.value
  if (text === '') {
    input.focus();
    return;
  }
  
const item = createItem(text);
itemRow.appendChild(item);

  // item.addEventListener('click', () => {
  //   item.style.textDecoration = "line-through";
  // })

  item.scrollIntoView({block: 'center'});
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__name" >${text}</span>
    <button class = "delete__btn"><i class="fas fa-minus" data-id=${id}></i></button>
  </div>
  `;
  id++;
  itemRow.addEventListener('click', () => {
    itemRow.classList.toggle('checked')
  })
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
})

input.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    onAdd();
  }
})

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id) {
    const deleteItem = document.querySelector(`.item__row[data-id="${id}"]`);
    deleteItem.remove();
    }
})

