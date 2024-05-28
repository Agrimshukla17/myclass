// let oldImage = document.getElementsByClassName("oldimg")
// console.log(oldImage)

// for(let i =0; i<=oldImage.length;i++){
//     oldImage[i].src="assets/Amazing_Fantasy_15.jpg"
// }

// let body = document.querySelector("body")




// const div= (type,claname,apand,)=>{
//     let div=document.createElement(type)
//     div.classList.add(claname)
//     apand.append(div)
// }



// div("div","newdiv",body)

// let newdiv=document.querySelector(".newdiv")
// console.log(newdiv)

// let h1=document.createElement('h1')
// h1.innerHTML="hay i am div"
// newdiv.append(h1)


// let p=document.createElement('p')
// p.innerHTML="ME To!"
// newdiv.append(p)

let hex = '';

for (i=0;i<8;i++){
    hex+=Math.round(Math.random()*16).toString(16)
}

console.log(hex)


