const toDoForm = document.querySelector(".send-text"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".todolist"),
  button = document.querySelector('.addBtn');

const TODOS_LS = "toDos";
// local Storage에 key 값으로 저장될 이름

let toDos = [];

function handleDelete() {
  const li = event.target.parentNode;
  toDoList.removeChild(li);
  const deleteToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  }); // X btn 눌러서 삭제시 Local에서도 삭제하는 code
  toDos = deleteToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function showToDos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  
  li.innerText = text; // list에 text 넣기
  delBtn.innerText = "X"; // btn 안에 문자넣기
  
  li.id = toDos.length + 1;
  delBtn.addEventListener("click", handleDelete);
  li.append(delBtn);
  toDoList.append(li);
  toDoInput.value = "";
  toDoInput.focus(); // 사용자가 추가버튼을 누른 후 다시 입력창에 cursor 둠
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };

  toDos.push(toDoObj);
  saveToDos();
}

button.addEventListener('click', clickBtn);

// Click Button
function clickBtn(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");

  li.innerText = text; // list에 text 넣기
  delBtn.innerText = "X"; // btn 안에 문자넣기
  li.innerHTML = toDoInput.value.trim(); // JSON 안해도 해결!
  // trim : 문자열 양 끝의 공백 제거


  li.id = toDos.length + 1;

  delBtn.addEventListener("click", handleDelete);


  li.append(delBtn);
  toDoList.append(li);
  toDoInput.value = ""; // 사용자의 입력칸을 빈칸으로 리셋
  toDoInput.focus(); // 사용자가 추가버튼을 누른 후 다시 입력창에 cursor 둠
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };

  toDos.push(toDoObj);
  saveToDos();

}
// // < btn click 시 list 추가되는 code >
// const btnClick = document.querySelector('.addBtn');
//   btnClick.onclick = function () {
//     const toDoInput = document.querySelector('input')
//     const itemText = toDoInput.value;

//     if(!itemText || itemText  === "" || itemText === " ") return false;
// // btn click 시 공백 추가 방지
//   showToDos(document.querySelector('.todolist'), itemText);
//   }

function loadList() {
  // local Storage에 저장된 toDoList를 가지고 오는 함수
  const loadToDos = localStorage.getItem(TODOS_LS);


  toDoForm.addEventListener("submit", handleSubmit);
  // button.addEventListener("click", clickBtn);
  if (loadToDos !== null) {
    const parseToDo = JSON.parse(loadToDos);
    parseToDo.forEach(function (toDo) {
      showToDos(toDo.text);
    });
  }
} // input 박스에 할 일을 적고 엔터를 치면 submit 이벤트가 발생하는데 submit 이벤트를 다루기 위한 핸들러 추가

function handleSubmit() {
  const currentValue = toDoInput.value;

  if(!currentValue || currentValue  === "" || currentValue === " ") return false;
// 공백인 경우 Enter로 list 추가 방지
  showToDos(currentValue);
}

function show() {
  loadList();
}
show();

// function addNewItem(list, itemText) {
//   const listItem = document.createElement("li");
//   listItem.innerText = itemText;
//   list.append(listItem);
// }

// const btnNew = document.querySelector(".addBtn");

// btnNew.onclick = function () {
//   const inputText = document.querySelector(".inputText");
//   const itemText = inputText.Value;

//   if (!itemText || itemText === "" || itemText === "") return false; //blank 방지

//   addNewItem(document.querySelector(".todolist"), itemText);
//   cossole.log("성공");
// };
