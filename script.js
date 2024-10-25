

const promo = document.querySelectorAll(".promo img");
let intervalo = null;
let numeroImg= 0;
const imagenes = document.querySelector(".promo a")

carruselInit(); 

function carruselInit(){
    
    if(promo.length > 0){ 
    promo[numeroImg].classList.add("carrusel");
    intervalo = setInterval(avanzarImgs, 4000);   
    }

   
}

function incrementoPosicion(index){

    
    if(index >= promo.length){
        numeroImg = 0;

    }else if(index < 0){
        numeroImg = promo.length = 1;
    }

    promo.forEach(slide => {
        slide.classList.remove("carrusel");  
    });


//
//  promo.add("mostar")
    promo[numeroImg].classList.add("carrusel");


//  promo.classList.add[numeroImagen]

}

function retrocederImgs(){
    incrementoPosicion(numeroImg);   
    numeroImg--;
   
}; 

function avanzarImgs(){
    incrementoPosicion(numeroImg);
    numeroImg++;
    
}

/*<!boton dark mode--- >*/
var toggle = document.getElementById('conteiner');
var body = document.querySelector('body');
var sponsor = document.getElementById('patrocinio');
var celdas = document.querySelectorAll('.celda');

toggle.onclick = function(){
 toggle.classList.toggle('active');
 body.classList.toggle('active');
 sponsor.classList.toggle('active');
 
 celdas.forEach(function(celda) {
    celda.classList.toggle('active');
  });

}

