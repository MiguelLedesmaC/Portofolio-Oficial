"use strict";

// Funcion jquery para añadir cursor personalizado

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

let hamburguesa = document.querySelector("#hamburguer");
let menu = document.querySelector(".ul-mobile");

const main = document.querySelector(".main");

const tema = document.querySelector("#toggle-theme");
const iconoTema = document.getElementById("icon-theme");

// Variables para imagenes
const cerrarHamburguesa = "./assets/icon-close.svg";
const abrirHamburguesa = "./assets/icon-hamburger.svg";
const temaClaro = "./assets/icons/light.svg";
const temaClaroFull = "./assets/icons/light-full.svg";
const temaOscuro = "./assets/icons/dark.svg";
const temaOscuroFull = "./assets/icons/dark-full.svg";
let menuHamburguesa = false;
const menuToggle = document.querySelector('.menu-toggle');


menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle('active');
  if (menuHamburguesa == false) {
    menuHamburguesa = true;

    menu.style.top = "0rem";
    menu.style.left = "0";
    menu.style.opacity = "1";
  } else {
    menuHamburguesa = false;
    menu.style.top = "-200rem";
    menu.style.left = "80rem";
    menu.style.opacity = "0";
  }
});


main.addEventListener("click", () => {
  hamburguesa.src = abrirHamburguesa;
  menuHamburguesa = false;
  menu.style.top = "-200rem";
  menu.style.left = "80rem";
  menu.style.opacity = "0";
});

tema.addEventListener("click", (e) => {
  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    iconoTema.src = temaOscuro;
    iconoTema.style.transition = ".5s";
  } else {
    document.body.classList.add("dark-mode");
    iconoTema.src = temaClaro;
  }
});

tema.addEventListener("mouseover", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");

  isDarkMode
    ? (iconoTema.src = temaClaroFull)
    : (iconoTema.src = temaOscuroFull);
  iconoTema.style.filter = "brightness(0%)";
});
tema.addEventListener("mouseout", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");

  isDarkMode ? (iconoTema.src = temaClaro) : (iconoTema.src = temaOscuro);
  iconoTema.style.filter = "brightness(100%)";
});




// Envio de formulario mediante mailto

//const buttonMailTo = document.querySelector("#send-mail")

// formulario.addEventListener('submit',handleSubmit)

// function handleSubmit (event) {
//   event.preventDefault();
//   const formData = new FormData(this);

//   console.log(formData.get('nombre'))
//   buttonMailTo.setAttribute('href', `mailto:xcorpio27@gmail.com?subject=${formData.get('name')} ${formData.get('email')}&body=${formData.get('mensaje')}`)
//   buttonMailTo.click();
// }

// Envio de formulario con EmailJs
const formulario = document.querySelector('#formulario');
let toastContainer = document.getElementById('toast-container');

const btn = document.getElementById('button');
console.log(btn)

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_rvjvhwc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Enviado';
      showToast();
    }, (err) => {
      btn.innerText = 'Error';
      alert(JSON.stringify(err));
    });
});


/**
 * Muestra el toast al hacer click en enviar
 */
function showToast() {
  toastContainer.classList.add('show');

  setTimeout(function() {
      var checkIcon = document.getElementById('check-icon');
      checkIcon.style.display = 'inline-block';
  }, 800); // Muestra la imagen después de 1 segundo

  setTimeout(function() {
      toastContainer.classList.remove('show');
      var checkIcon = document.getElementById('check-icon');
      checkIcon.style.display = 'none';
  }, 2000); // Oculta el toast después de 2 segundos
}

