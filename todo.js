const text = document.querySelector(".input-box input");
const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".list");
let total = document.querySelector("#total");
const EmptyImg = document.querySelector(".list img");
const EmptyMsg = document.querySelector(".list p");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#complete");
all.classList.add("select");



console.log(completed); 
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
        </div>`;
        const checkbox = li.querySelector(".task-checkbox");
        checkbox.addEventListener("change",()=>{
            li.classList.toggle("completed");
            updateStats();
        });
        todoList.appendChild(li);
        updateStats();
        text.value ="";
    }
}


const updateStats = ()=>{
    const allTasks = document.querySelectorAll(".task-item");
    const completedTasks = document.querySelectorAll(".task-item.completed");

    const totalCount = allTasks.length;
    const CompletedCount = completedTasks.length;
    const pendingCount = totalCount- CompletedCount

    total.innerText= totalCount;
    document.querySelector("#completed").innerText = CompletedCount;
    document.querySelector("#pending").innerText = pendingCount;
}

text.addEventListener("keydown",(evt)=>{
    if(evt.key==="Enter"){
        addBtn.click();
    }
})

active.addEventListener("click",()=>{
    active.classList.add("select");
    all.classList.remove("select");
    completed.classList.remove("select");
    const allTasks = document.querySelectorAll(".task-item");
    allTasks.forEach((task)=>{
        if(!task.classList.contains("completed")){
            task.style.display="flex";
        }else{
            task.style.display="none";
        }
    })

})

all.addEventListener("click",()=>{
    all.classList.add("select");
    active.classList.remove("select");
    completed.classList.remove("select");
    const allTasks = document.querySelectorAll(".task-item");
    allTasks.forEach((task)=>{
        task.style.display="flex";
    })
})

completed.addEventListener("click",()=>{
    completed.classList.add("select");
    all.classList.remove("select");
    active.classList.remove("select");
    const allTasks = document.querySelectorAll(".task-item");
    allTasks.forEach((task)=>{
        if(task.classList.contains("completed")){
            task.style.display="flex";
        }else{
            task.style.display="none";
        }
    })
})