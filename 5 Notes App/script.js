const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showUpdateStorage(){
    notesContainer.innerHTML=localStorage.getItem("notes");

}
showUpdateStorage();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}



createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");;
    let img =document.createElement("img");
    // inputBox.classList.add("input-box");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);

})


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        updateStorage();
    }else if(e.target.tagName === "P"){
                  notes=document.querySelectorAll(".input-box");
                  notes.forEach(note =>{
                  note.onkeyup =function(){
                  updateStorage();
         }
      })
   }
})
document.addEventListener("keydown" ,e =>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})