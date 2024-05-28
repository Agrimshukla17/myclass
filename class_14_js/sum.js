

// function average(a,b,c){
//     let sum=(a+b+c)/3
//     console.log(sum);
// }

// average(10,20,30);

// function table(a){
//     for(let i=1;i<=10;i++){
//         console.log(a*i);
//     }
// }

// table(176);


// function table(a){
//     for(let i=a;i<=a*10;i=i+a){
//         console.log(i);
//     }
// }

// table(9);


// function sum(a){
//     let sum=0;
//     for(let i=a;i>=0;i--){
//           sum+=i
//     }
//     return sum;
// }
// console.log(sum(1000));

// 


// const hay = function(){
//     console.log("hello world");
// }
// function loopPrint(hay,count){
//     for(let i=0;i<=count;i++){
//         hay();
//     }
// }

// loopPrint(hay,100);\


// console.log(this)



// const square = n=>n*n

// console.log(square(10))
// function helloWorld(){
//     let id =setInterval(()=>console.log('helloworld'),2000)
//     setTimeout(()=>{
      
//         clearInterval(id)
//     }, 10000);
// }

// helloWorld()

// let arr =[10,20,34]

// const everyArr=arr.every((el)=>{
//     return el%10==0})
// console.log(everyArr)
// let arr=[4,6,78,9,2]

// let fin=arr.reduce((pre,curr)=>{
//    if (pre<curr){
//     return pre
//    }else{
//     return curr 
//    }

// })
// console.log(fin)
function sayhello (as){
   for(let i=0 ; i<=100; i++){
      console.log(as)
   }
}

sayhello("hii ")