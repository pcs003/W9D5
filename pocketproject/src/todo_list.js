
const todoUl = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form")
const todoArr = [];

const addTodo = (event) => {
    event.preventDefault();
    const todoText = document.querySelector('[name=add-todo]').value;
    const todoObj = {
        text: todoText,
        done: false
    }
    todoArr.push(todoObj);
    todoText.value("");
}

const populateList = (todoList) => {
    todoUl.innerHTML = todoList.map((listItem) => {
        return <li>
            <label for="done">listItem.text</label>
            <input id="done" type="checkbox" ></input>
        </li>
    })
}