
var menu = document.querySelector('.header');

window.addEventListener('scroll',()=>{

 if(window.scrollY > 10 ){
  menu.classList.add('scrollOne');
  menu.classList.remove('scrollZero'); 
  
   
  
 } else{
  menu.classList.add('scrollZero');
  menu.classList.remove('scrollOne');
}
  
})



