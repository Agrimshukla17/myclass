// let todo = [];
// let task=prompt('plese enter your task')

// while(true){
//     if(task==="quit"){
//         console.log("Quit")
//         break
//     }
//     if(task=='create'){
//         create=prompt('create your task')
//         todo.push(create)
//         console.log("your task is created")
//     }else if(task=='list'){
//         for(var i=0;i<task.length;i++){
//             console.log("-----------------")
//             console.log(i,todo[i])
//             console.log("-----------------")
//         }
//     }else if(task=='delete'){
//       let index =  prompt(" enter index")  zz
//       todo.splice(index,1)
//       console.log("your task is deleted")
//     }else{
//         console.log("wrong input")
//     }
//     task=prompt('plese enter next task')

// }   

// let yourNum  =parseInt(prompt('renge the guess number'))
// let num =Math.floor(Math.random()*yourNum)+1;

// let guess =prompt('plese guess number 1 to 3')

// while(true){
//    console.log(num)
//     if (guess=="q"){
//         console.log("quit")
//         break
//     }else if(guess==num){
//         console.log(num)
//         console.log("you win")

//         break
//     }else if(guess>num){
//         console.log("too high")
//     }else if(guess<num){
//         console.log("too low")
//     }
//     guess=prompt('try again')
//}
let yorscores =[];
function dice(){
    
    let num =Math.floor(Math.random()*6)+1;
    if(num===6){
        console.log (`your stap is ${num}`)
        yorscores.push(num)
    }else if (num===5){
        console.log (`your stap is ${num}`)
        yorscores.push(num)
    }else if (num===4){
        console.log (`your stap is ${num}`)
        yorscores.push(num)
    }else if (num===3){
        console.log (`your stap is ${num}`)
        yorscores.push(num)
    }else if (num===2){
        console.log (`your stap is ${num}`)
        yorscores.push(num)
    }else if (num===1){
        console.log (`your stap is ${num}`)
        yorscores.push(num)
    }


    

}

dice()
console.log(yorscores)