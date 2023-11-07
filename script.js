const checkbtn=document.querySelector("#eyebtn");
const inputbtn=document.querySelector(".input-box input")

let password=true;

checkbtn.addEventListener("click",function(){
if(password){
    inputbtn.setAttribute("type","text");
    checkbtn.classList.remove("fa-eye");
    checkbtn.classList.add("fa-eye-slash")
    password=false;
}
else{
    inputbtn.setAttribute("type","password");
    checkbtn.classList.add("fa-eye");
    checkbtn.classList.remove("fa-eye-slash")
    password=true;
}
})


const button=document.querySelector("button")
const body=document.querySelector("body");
const color=['yellow','pink','skyblue','orange','violet','blue','green',]


// body.style.backgroundColor="violet";

button.addEventListener('click',function(){
    alert('you have submitted the password')
    let colorpattern=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorpattern];
})