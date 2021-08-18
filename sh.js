'use strict'

const itemList = [];
const list = document.querySelector(".list"),
  input = document.querySelector(".send_text"),
  delete_btn = document.querySelector(".delete_btn"),
  inputButton = document.querySelector(".input_button");

function addItem() {
  const item = document.querySelector(".item").value;
  if (item != null) {
    list.push(item) {
      document.querySelector(".item").value = "";
      document.querySelector(".item").foucs();
    }

    showList()
  }
}





