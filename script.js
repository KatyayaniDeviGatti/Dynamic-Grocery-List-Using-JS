let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container")
document.body.appendChild(bgContainer)

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading");
bgContainer.appendChild(headingEl)

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainer.appendChild(listContainerEl)

let groceryItems = ["Milk","Peanut Butter","Ghee","Curd","Tomato Sauce","Noodles","Eggs"]
for(let grocery of groceryItems){
    let listitemsEl = document.createElement("li");
    listitemsEl.classList.add("listitems")
    listitemsEl.textContent = grocery;
    listContainerEl.appendChild(listitemsEl);
}

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkBox"
bgContainer.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for","checkBox");
labelEl.textContent = "Need Home Delivery";
labelEl.classList.add("labelElement")
bgContainer.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainer.appendChild(breakEl)

let buttonEl = document.createElement("button");
buttonEl.textContent = "Proceed to Pay";
buttonEl.classList.add("btn","btn-primary");
bgContainer.appendChild(buttonEl)
