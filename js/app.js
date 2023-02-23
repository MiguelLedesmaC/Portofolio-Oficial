'use strict'
// $(document).ready(function(){

//     $('body').on({'mousemove': function(e){
//         console.clear()
//         let clientX = e.originalEvent.clientX;
//         let clientY = e.originalEvent.clientY;
//         $('#cursor').css({
//             'left' : (clientX - 40) + 'px',
//             'top' : (clientY - 40) + 'px'
//         })
//     }})
//     $('a').on({
//         'mouseover':function(){
//             $('#cursor').addClass('mini')
//         },
//         'mouseout':function(){ 
//               $('#cursor').removeClass('mini') 
//     },
// })
    
// })

let hamburguesa = document.querySelector('#hamburguer');
let menu = document.querySelector('.ul-mobile');
const main = document.querySelector('.main');

// Variables para imagenes
const cerrarHamburguesa = '../assets/icon-close.svg';
const abrirHamburguesa = '../assets/icon-hamburger.svg';
let menuHamburguesa = false;


hamburguesa.addEventListener('click', () => {
    if(menuHamburguesa == false) {
        menuHamburguesa = true
        hamburguesa.src = cerrarHamburguesa
        menu.style.top = '0rem';
        menu.style.left ='0'
        menu.style.opacity = '1'
    }else {
        menuHamburguesa = false;
        hamburguesa.src = abrirHamburguesa;
        menu.style.top = '-200rem';
        menu.style.left ='80rem'
        menu.style.opacity = '0'
    }
   
})


main.addEventListener('click', ()=> {
    hamburguesa.src = abrirHamburguesa;
    menuHamburguesa = false;
    menu.style.top = '-200rem';
    menu.style.left ='80rem'
    menu.style.opacity = '0'
})