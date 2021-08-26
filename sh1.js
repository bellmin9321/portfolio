'use strict'

const itemList = [];
const items = document.querySelector('.items'),
item = document.querySelector('.item'),
itemRow = document.querySelector('.item__row'),
item__delete = document.querySelector('.item__delete'),
item__edit = document.querySelector('.item__edit'),
input = document.querySelector('.footer__input'),
addBtn = document.querySelector('.footer__button');

  
  function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    // 2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = createItem(text);    
  // 3. items 컨테이너안에 새로 만든 아이템을 추가
    items.appendChild(item);
  // 4. input 초기화 및 curosr 고정
    input.value = '';
    input.focus();

  }

  function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name' )
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete' )
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
      items.removeChild(itemRow);
    })

    const editBtn = document.querySelector('button');
    editBtn.setAttribute('class', 'item__edit');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>'
    editBtn.addEventListener('click', () => {
      alert('wow')
    })
    

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.append(name, deleteBtn, editBtn);
    // item.appendChild(deleteBtn);
    // item.appendChild(editBtn);

    itemRow.append(item, itemDivider);
    // itemRow.appendChild(itemDivider);
    return itemRow;
  }

  item.addEventListener('click', () => {
    item.classList.toggle('checked')
    // if (event.target.tagName === 'LI') {
    //   event.target.classList.toggle('checked');
    // }
  })

  addBtn.addEventListener('click', () => {
    onAdd();
  })

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter'){
      onAdd();
    }
  })