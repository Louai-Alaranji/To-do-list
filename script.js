const itemName = document.querySelector(".js-text-input");
const addBtn = document.querySelector(".js-add");
const itemsAddeddiv = document.querySelector(".js-todo-items");
const todoDate = document.querySelector(".js-date");
var todoList = [];

function buttonClicked() {
    todoList.push({ name: itemName.value, date: todoDate.value });

    itemName.value = ""; // clear the field after the item is added
    todoDate.value = "";

    renderTodoList();
}

// a more effecient way without usig closures
function renderTodoList() {
    itemsAddeddiv.innerHTML = "";

    todoList.forEach(function (todo, index) {
        var newPara = document.createElement("p");
        var newBtn = document.createElement("button");
        newBtn.innerText = "Delete";

        newBtn.onclick = function () {
            deleteItem(index);
        };

        newPara.textContent = todo.name + " " + todo.date;

        newPara.appendChild(newBtn);
        itemsAddeddiv.appendChild(newPara);
    });
}

function deleteItem(index) {
    // Remove the item at the specified index from the todoList
    todoList.splice(index, 1);

    // Refresh the displayed items after deletion
    renderTodoList();
}



/*
function renderTodoList() {
    itemsAddeddiv.innerHTML = "";

    for (var i = 0; i < todoList.length; ++i) {
        var newPara = document.createElement("p");
        var newBtn = document.createElement("button");
        newBtn.innerText = "Delete";

        // Use a closure to capture the current value of i
        newBtn.onclick = (function (index) {
            return function () {
                deleteItem(index);
            };
        })(i);

        newPara.textContent = todoList[i].name + " " + todoList[i].date;

        newPara.appendChild(newBtn);
        itemsAddeddiv.appendChild(newPara);
    }
}

function deleteItem(index) {
    // Remove the item at the specified index from the todoList
    todoList.splice(index, 1);

    // Refresh the displayed items after deletion
    renderTodoList();
}
*/