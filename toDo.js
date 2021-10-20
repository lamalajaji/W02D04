// 1-2  create heading
const head = document.createElement("h1");
head.innerHTML = "ToDo List"; // give a text to the heading
document.body.append(head); //give it a position  "body"



// create an empty ul
const ul = document.createElement("ul");
ul.id = "mynewlist";
document.body.append(ul); // add unorderlist to the page


// 3 : create To-Do array 
const toDos = ["Wake Up", "eat Breakfast", "Code"];




///////////// 6:  delete function
const delFunction = (e) => {
    console.log(e.target.id);
  toDos.splice(e.target.id, 1);
  renderList();
};



///////////// 7:  update function

const updFunction = (e) => {
  const input = prompt("Enter your new routine");
  i = e.target.id;
  toDos[i] = input;
  renderList();
};


/// 4 : the main function 
renderList = () => {
  ul.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const newEle = document.createElement("li");
    newEle.innerHTML = toDos[i];
    const pp = document.querySelector("#mynewlist");
    pp.append(newEle);
    newEle.id = i;


    //create Delete Button 
    delButton = document.createElement("button");
    delButton.innerHTML = "Click to Delete";
    delButton.id = i;
    delButton.addEventListener("click", delFunction);
    ul.append(delButton); 


    // create Update Button 
    updButton = document.createElement("button");
    updButton.innerHTML = "Click to Update";
     updButton.id = i;
     updButton.addEventListener("click", updFunction);
    ul.append(updButton); 

  }
};
renderList();

// 5: create input
const input1 = document.createElement("input");
input1.type = "text";
input1.placeholder = "Enter your routine";
document.body.append(input1);


// 5: create add button 
const btn1 = document.createElement("button");
btn1.innerHTML = "Add";
document.body.append(btn1);

const addToList = () => {
  toDos.push(input1.value);
  renderList();
};
// active addToList function 
btn1.addEventListener("click", addToList);
