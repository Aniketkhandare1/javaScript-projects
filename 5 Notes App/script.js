const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function showUpdateStorage(){
    notesContainer.innerHTML=localStorage.getItem("notes");

}
showUpdateStorage();


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
    }else if(e.target.tagName === "p"){
                  notes=document.querySelectorAll(".input-box");
                  notes.forEach(note =>{
                  note.onkeyup =function(){
                  updateStorage();
         }
      })
   }
})