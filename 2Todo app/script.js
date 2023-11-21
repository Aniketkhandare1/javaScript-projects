const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button= document.querySelector("button");

function addTask(){
        if(inputBox.value=== ''){
        alert("You must ✏️write somethimg!");
    }else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        
    }
    inputBox.value="";
    saveData();
}
//task adding button
button.addEventListener("click", addTask);
//task delete and mark as completed
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.add("checked");
        // alert("Task Completed")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // alert("Task delete ?")
        saveData() 
    }
},false)//data save in localStorage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}function showData(){
    listContainer.innerHTML= localStorage.getItem("data")
}showData();






