let todo = document.getElementById("todo");
let orderedList = document.getElementById("ol");
let clear = document.getElementById("clear");

document.onkeydown = function () {
    if (window.event.keyCode == "13") {
        toDo();
    }
}

function toDo() {

    let listElement = document.createElement("li");
    orderedList.appendChild(listElement);

    let node = document.createTextNode(todo.value + "  <<<>>>  ");
    listElement.appendChild(node);

    let button = document.createElement("button");
    button.addEventListener("click", function () {
        listElement.innerHTML = "";
        listElement.parentNode.removeChild(listElement);
    })
    let node1 = document.createTextNode("X");
    button.appendChild(node1);
    listElement.appendChild(button);

    todo.value = "";
}

clear.onclick = () => {
    orderedList.innerHTML = " ";
}



