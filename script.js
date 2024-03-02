let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.scroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// let modebtn=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currMode="light";
// modebtn.addEventListener("click",()=>{
// if(currMode==="light")
// {
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
//     document.querySelector("body").style.color="white";

//     // body.classList.add("dark");
//     // body.classList.remove("light");
// }
// else{
//     currMode="light";
//     document.querySelector("body").style.backgroundColor="white";
//     document.querySelector("body").style.color="black";
//     // body.classList.add("light");
//     // body.classList.remove("dark");
// }

// console.log(currMode);
// });
