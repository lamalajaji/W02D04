const head = document.createElement("h1"); //create heading
const body = document.querySelector("body"); //create body tag
head.innerHTML=("ToDo List");
body.append(head);

const ul = document.createElement("ul");
body.append(ul); // add unorderlist to the page 

const toDos= document.createElement("ul");


