const text = document.querySelector(".input-box input");
const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".list");
let total = document.querySelector("#total");
const EmptyImg = document.querySelector(".list img");
const EmptyMsg = document.querySelector(".list p");
let idxtotal =0;


addBtn.addEventListener("click",()=>{
    AddTasks();
    
})

const AddTasks = ()=>{
    let userInput = text.value.trim();
    if(userInput.length===0){
        alert("Please enter a reminder!");
        return;
    }else{
        let li =document.createElement("li");
        idxtotal++;
        EmptyImg.classList.add("hidden");
        EmptyMsg.classList.add("hidden");
        li.classList.add("task-item");
        li.innerHTML=
        `<div class="task-content">
            <input type="checkbox" class="task-checkbox">
            <span>${userInput}</span>
        </div>
            `;
        total.innerText=idxtotal
        todoList.appendChild(li);
        text.value ="";
    }
}

text.addEventListener("keydown",(evt)=>{
    if(evt.key==="Enter"){
        addBtn.click();
    }
})