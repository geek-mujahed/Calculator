
let input = document.getElementById("inpt")


let onee= document.getElementById("one");
 onee.addEventListener("click" , ()=>{
     input.value += "1";
    
 })


 let twoo= document.getElementById("two");
 twoo.addEventListener("click" , ()=>{
    input.value += "2";
})


let threee= document.getElementById("three");
 threee.addEventListener("click" , ()=>{
    input.value += "3";
})


let fourr= document.getElementById("four");
 four.addEventListener("click" , ()=>{
    input.value += "4";
})


let fivee= document.getElementById("five");
 five.addEventListener("click" , ()=>{
    input.value += "5";
})


let sixx= document.getElementById("six");
 six.addEventListener("click" , ()=>{
    input.value += "6";
})


let sevenn= document.getElementById("seven");
 seven.addEventListener("click" , ()=>{
    input.value += "7";
})


let eightt= document.getElementById("eight");
 eight.addEventListener("click" , ()=>{
    input.value += "8";
})


let ninee= document.getElementById("nine");
 nine.addEventListener("click" , ()=>{
    input.value += "9";
})


let zeroo= document.getElementById("zero");
 zero.addEventListener("click" , ()=>{
    input.value += "0";
})


let dott= document.getElementById("dot");
 dot.addEventListener("click" , ()=>{
    input.value += ".";
})


let pluss= document.getElementById("plus");
 plus.addEventListener("click" , ()=>{
    input.value += "+";
})


let divisionn= document.getElementById("division");
 division.addEventListener("click" , ()=>{
    input.value += "/";
})


let starr= document.getElementById("star");
 star.addEventListener("click" , ()=>{
    input.value += "*";
})


let minuss= document.getElementById("minus");
 minus.addEventListener("click" , ()=>{
    input.value += "-";
})




 see.addEventListener("click" , ()=>{
    let result = eval(input.value);
    see.innertext = result;
    input.value = "";
})


let resultt= document.getElementById("result");
 result.addEventListener("click" , ()=>{
    let result = eval(input.value)
    input.value = result;
})

