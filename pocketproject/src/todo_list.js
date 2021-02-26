
const todoUl = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form")
const todoArr = JSON.parse(localStorage.getItem('todoArr')) || [];

const addTodo = (event) => {
    event.preventDefault();
    const todoText = document.querySelector('[name=add-todo]').value;
    const todoObj = {
        text: todoText,
        done: false
    };

    todoArr.push(todoObj);
    populateList(todoArr);

    localStorage.setItem('todoArr', JSON.stringify(todoArr));

    todoText.value("");
}

const populateList = (todoList) => {
    todoUl.innerHTML = todoList.map((listItem, idx) => {
        let isDone = listItem.done ? 'checked' : '';
        return `<li>
                  <label for="done">${listItem.text}</label>
                  <input id="done" data-index="${idx}" type="checkbox" ${isDone} ></input>
                </li>`
        ;
    }).join('');
};

const toggleCheckbox = (event) => {
  const targetList = event.target
  if (targetList.tagName.toLowerCase() === 'input'){
    const targetIdx = targetList.dataset.index;
    todoArr[targetIdx].done = !todoArr[targetIdx].done;
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    populateList(todoArr);
  }
}

form.addEventListener('submit', addTodo);
todoUl.addEventListener('click', toggleCheckbox);

populateList(todoArr);
