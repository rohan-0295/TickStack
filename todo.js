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
createTaskElement = (userInput,isComplete=false)=>{
    const li = document.createElement('li');
    li.classList.add("task-item");
    if(isComplete){
        li.classList.add("completed");
    }
    li.innerHTML=
    `<div class="task-content">
        <input type="checkbox" class="task-checkbox" ${isComplete ? "checked":''}>
        <span>${userInput}</span> 
    </div>`;
    const checkbox = li.querySelector(".task-checkbox");
    checkbox.addEventListener("change",()=>{
        li.classList.toggle("completed");
        updateStats();
        saveTasks();
        });
    todoList.appendChild(li);
    EmptyImg.classList.add("hidden");
    EmptyMsg.classList.add("hidden");
    updateStats();
}
const AddTasks = ()=>{
    let userInput = text.value.trim();
    if(userInput.length===0){
        alert("Please enter a reminder!");
        return;
    }else{
        createTaskElement(userInput);
        saveTasks();
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



const saveTasks = ()=>{
    const tasks=[];
    const tk = document.querySelectorAll(".task-item");
    tk.forEach((tks)=>{
        tasks.push({
            text: tks.querySelector("span").innerText,
            completed:tks.classList.contains("completed")
        })
    })
    localStorage.setItem("TickStack_data",JSON.stringify(tasks));

};

const loadTasks = ()=>{
    load = localStorage.getItem("TickStack_data");
    if(load){
        const savedData = JSON.parse(load);
        savedData.forEach(tasks=>{
            createTaskElement(tasks.text,tasks.completed);
    })
    }

    
}

loadTasks();