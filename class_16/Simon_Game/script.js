let gameSeq=[];
let userSeq=[];
let buttonColours=["red","green","purple","yellow"];
let level=0
let oldLevel=[]

let gameStarted=false;
let highScore=0


  
// if (level>oldLevel.length){
//     if (level>highScore){
//         highScore=level
//         score.innerHTML=highScore
//     }
//     oldLevel.push(level)

// }

let h2=document.querySelector("h2")


document.addEventListener("keydown",function(){
    if (gameStarted === false){
        console.log("key pressed");
        gameStarted=true
        levelUp();
    }

})


function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{btn.classList.remove("flash")},250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`level ${level}`

    let randomNumber=Math.floor(Math.random()*3)
    let randomChosenColour=buttonColours[randomNumber]
    let randombtn=document.querySelector(`.${randomChosenColour}`)

    gameSeq.push(randomChosenColour)
    console.log(gameSeq)
    btnflash(randombtn)
}




function checkAnswer(idx){
   

    if (userSeq[idx]===gameSeq[idx]){
        console.log("correct");

        if (userSeq.length===gameSeq.length){
            setTimeout(()=>{levelUp()},1000)}
    }else{
        h2.innerHTML=`Game Over score is <b>${level} </b> <br> press any key to restart`
        
       
           
        reset()
    }
}


function btnPressed(){
   let btn= this;
   btnflash(btn)
   let userColour=btn.getAttribute("id")
   userSeq.push(userColour)
   console.log(userSeq)

   checkAnswer(userSeq.length-1)
  
}

let allbtns=document.querySelectorAll(".btn")

for (btn of allbtns){
    btn.addEventListener("click",btnPressed)
}

function reset(){
    gameSeq=[]
    userSeq=[]
    level=0
    gameStarted=false
}