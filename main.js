const list=document.querySelector(".navlist");
const hamberger= document.querySelector(".fa-bars");
hamberger.addEventListener('click',()=>{
    hamberger.classList.toggle('fa-x');
    list.classList.toggle('navlist-active')
})