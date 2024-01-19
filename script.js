const itemName = document.querySelector(".js-text-input");
const addBtn = document.querySelector(".js-add");
const itemsAddeddiv = document.querySelector(".js-todo-items");

var todoList = [];

function buttonClicked(){
    todoList.push(itemName.value);
    itemName.value = "";    // clear the field after item is added
    itemsAddeddiv.innerHTML = "";

    for(var i = 0; i<todoList.length; ++i){
        var newPara = document.createElement("p");
        newPara.textContent = todoList[i];

        itemsAddeddiv.appendChild(newPara);
    }
    
}

/*
another way is
    
    let todoListHtml = "";
    for(var i = 0; i<todoList.length; ++i){
        const todo = todoList[i];
        const html = "<p>${todo}</p>";

        todoListHtml += html;
    }

    document.query(".js-todo-items").innerHTML = todoListHtml;

*/ 