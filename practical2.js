// let country='bhutan';
// let continent='asia';
// let population=10000
// console.log(country)
// console.log(continent)
// console.log(population)


// function sayhello(){
//     let you=prompt('what is your name')
//     console.log('hello',you+'!')
// }
// sayhello()


// function addnum(){
//     x=Number(prompt('enterthenum'))
//     y=Number(prompt('enterthenum'))
//     let add=x+y
//     console.log(add)
// }
// addnum()

// function addnum(x,y){
//     console.log(x+y)
// }addnum(1,6,8)


// check whether a gven any number is even or odd by using function

// function checkevenodd(number){
//     console.log(number%2==0)

// }
// checkevenodd(5)

// function checkevenodd(x){
   
//     if(x%2==0){
//         console.log('number is an even number')
//     }
//     else{
//         console.log('number is an odd number')
//     }
//     return x

// }
// z=Number(prompt('enter the no.'))
// checkevenodd(z)

// return keyword

// function addtwonumbers(x=2, y=3){
//     console.log(x+y)
// }
// addtwonumbers(1,2,3,4)


// arrowfunction
username='yangzom'
userage=19
userhashobby=true

// const summarizeuser=function summarizeuseer(username,userage,userhashobby){
//     return('name is'+username+',age is'+userage+'and the user has hobbies:'+userhashobby);
// }

// const summarizeuser=(username,userage,userhashobby)=>{
//     return('name is'+username+',age is'+userage+'and the user has hobbies:'+userhashobby);
// }

// const add=(a,b)=>{
//     return a+b;
// }

// // omit return statement
// const add1=(a,b)=>a+b;
// // with one argument,you dont need bracket (a)
// const addone=a=>a+1;

// const addrandom=()=>2+3
// console.log(add(2,3))


// const arr=['squirrel','alpaca','buddy']
// arr.forEach((e)=>console.log(e))

let spread=['so','much','fun']
let message=['javascript','is',...spread,'and','very','powerful']
console.log(message)

// function addtwonumbers(x,y,z,a){
//     console.log(x+y+z+a)
// }
// let arr=[5,9,6,7]
// addtwonumbers(...arr)

    //   or

// function addtwonumbers(x,y,z,a){
//     console.log(x+y+z+a)
// }
// let arr=[5,9]
// let arr1=[5,9]
// addtwonumbers(...arr,...arr1)

function somefunction(param1,...param2){
    console.log(param1, param2.join(""))
}
somefunction('hi','there!','how are you')