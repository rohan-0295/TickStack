const text = document.querySelector("#input-box");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list-container");


btn.addEventListener("click",()=>{
    const task = text.value;
    if(task===""){
        alert("Please Enter a Task");
        return;
    }
    const listitem = document.createElement("li");
    listitem.innerText = task;
   

    listitem.addEventListener("click",()=>{
        listitem.classList.toggle("styles");
        saveData();
    })
    


    listitem.addEventListener("dblclick",()=>{
        listitem.remove();
        saveData();
    });
    list.appendChild(listitem);
    saveData();
    text.value="";

});

text.addEventListener("keydown",(evt)=>{
    if(evt.key==="Enter"){
        btn.click();
    }
})

function saveData(){
    localStorage.setItem('data',list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
    const allItems = list.querySelectorAll("li");
    allItems.forEach((item)=>{
        item.addEventListener("click",()=>{
            item.classList.toggle("styles");
            saveData();
        })

        item.addEventListener("dblclick",()=>{
            item.remove();
            saveData();
        })
    })
}
showData();