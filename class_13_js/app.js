// let favMovie="avatar"

// let gusses=prompt("plese gusses my favorite movies")

// while ((gusses!="exit") && (gusses!=favMovie)){

//     gusses=prompt("wrong gusses my favorite movies please try again")
    
// }
let fruits = ["apple", "banana", "orange", "grape", "kiwi", "mango", "pear", "peach", "plum", "strawberry"];

// for (let i = 0 ;i <fruits.length;i++){
//     console.log(i,fruits[i],fruits.indexOf(fruits[i]))
// }

// for(i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i],fruits.indexOf(fruits[i]))
// }


let superheroes = [
    ["Batman", "Superman", "Wonder Woman"],
    ["Iron Man", "Captain America", "Thor"],
    ["Spider-Man", "Hulk", "Black Panther"]
];

// for (let i=0;i<superheroes.length;i++) {
//     console.log("list",superheroes[i])
//     for (let j=0;j<superheroes[i].length;j++) {
//         console.log(superheroes[i][j])
//     }
// }
for(hero of superheroes){
    console.log(hero)
    for(name of hero){
        console.log(name)
    }
}