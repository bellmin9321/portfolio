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
    if ( text === '') {0
      input.focus(); // 빈 글은 추가 안되게 하기
      return; 
    }
    // 2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = createItem(text);    
  // 3. items 컨테이너안에 새로 만든 아이템을 추가
    items.appendChild(item);
  // 4. input 초기화 및 curosr 고정
    input.value = '';
    input.focus();

  }

  let id = 0; //UUID
  function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
      <div class="item >
          <span class="item__name">${text}</span>
            <div.item__container>
              <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
              </button>
              <button class="item__edit">
              <i class="fas fa-pen"></i>
              </button>
            </div>
      </div>
      <div class="item__divider"></div>`;
    id++;
    return itemRow;
  }

  addBtn.addEventListener('click', () => {
    onAdd();
  })

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter'){ // keyCode === 13 (Enter)
      onAdd();
    }
  })

  items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    // if (event.target.nodeName === "I") <-- 이 방식은 포괄적이라 다른 아이콘도 포함시키면 그것도 선택됨
    if (id) {
      const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
      toBeDeleted.remove();
    } 
  })
