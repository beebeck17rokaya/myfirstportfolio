console.log("hi! hope you are doing well");

let menu=document.querySelector('#menu-icon');
let navList=document.querySelector('.navlist');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
};
 window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navList.classList.remove('active');
 };

 const sr= ScrollReveal({
    distance: '40px',
    duration: 2600,
    reset: true
 })
 sr.reveal('.home-text',{delay:300 ,origin:'left'});
 sr.reveal('.about,.services,.portfolio,.blog,.contact,.copyright',{delay:100 ,origin:'bottom'});