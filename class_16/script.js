let input=document.querySelector("#task-input")
let displey=document.querySelector("#task-list")
let btn=document.querySelector("#add-task-btn")
let maindiv=document.querySelector(".container")
// let taskItem = document.querySelector(".task-item")

// function handleEvent(event){
    
//     displey.innerHTML=inputValue
 
//  }


btn.addEventListener('click',listItam)


function listItam(){
    let inputValue=input.value
   const ul= document.createElement("ul")
   ul.setAttribute("class","task-item")
   ul.innerHTML=inputValue
   maindiv.append(ul)
   
   const upbtn= document.createElement("button")
   upbtn.setAttribute("class","edit-btn")
   upbtn.innerHTML="Edit"
   ul.append(upbtn)


   const delbtn= document.createElement("button")
   delbtn.setAttribute("class","delete-btn")
   delbtn.innerHTML="Delete"
   ul.append(delbtn)
   delbtn.onclick=()=>{
    ul.remove()
   }

   
}
