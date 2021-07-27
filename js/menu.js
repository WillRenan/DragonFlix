
var menu = document.querySelector('.header');

window.addEventListener('scroll',()=>{

 if(window.scrollY > 10 ){
  menu.classList.remove('scrollZero'); 
  menu.classList.add('scrollOne');
   
  
 } else{
  menu.classList.add('scrollZero');
  menu.classList.remove('scrollOne');
}
  
})



