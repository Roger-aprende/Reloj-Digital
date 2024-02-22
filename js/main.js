let buttoMusic = document.querySelector(".click");
let audio = new Audio("assets/audio/Walker-Alone.mp3");
audio.volume = 0.2;

buttoMusic.addEventListener('click' ,()=>{
  audio.play();
})

// let buttonMas = document.querySelector(".button-more");
// let buttonMenos = document.querySelector(".button-menos");
// let buttonNext = document.querySelector(".button-next");
let calendario = document.querySelector(".calendario");

var elementHora = document.querySelector(".reloj")
let horario, hour, minutes, seconds, reloj, interval;

let clickSuma, clickResta;
clickSuma = 0;



function horaActual(){
 horario = new Date();

 hour = horario.getHours()
 seconds = horario.getSeconds();
 minutes = horario.getMinutes(); 
 if(hour <= 9) hour = '0' + hour;
 if(seconds <= 9) seconds = '0' + seconds;
 if(minutes <= 9) minutes = '0' + minutes;

 elementHora.innerHTML = `
  <p class="sHora">${hour}</p>: <p class="sMinutes">${minutes}</p>:<p class="sSeconds">${seconds}</p><span class="font-low">s</span>`;


  reloj = elementHora.innerHTML;

} interval = setInterval( horaActual,1000);






