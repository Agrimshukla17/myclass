let divBox=document.querySelector(".coler")
let button=document.querySelector(".btn")
let h1 = document.querySelector("h1")
let spam =document.querySelector("#hex")


button.addEventListener('click',()=>{
    let hex = '#'+'';
setTimeout(()=>{
    for (i=0;i<8;i++){
        hex+=Math.round(Math.random()*16).toString(16)
      }
      divBox.style.backgroundColor = hex
      h1.style.color = hex
      spam.innerHTML=hex
},500)
   

})
if (!divBox){

}