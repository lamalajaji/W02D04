//2 make a head and empty unorderlist in body 
const head = document.createElement("h1");
head.innerHTML= "ToDo List";
const body = document.querySelector("body");
body.append(head);

const ul = document.createElement("ul");
body.append(ul); // empty unorderlist 


// 3 list array "global varable"
const toDo = ["Wake Up", "eat Breakfast", "Code"];

// 4
const li = document.createElement("li");  //to hold array's values
renderList = () => {
for (let i = 0; i < toDos.length; i++) {
    li.innerHTML = toDos[i];
    const ul = document.querySelector("ul")
ul.append(li);
} 
};
 renderList();
