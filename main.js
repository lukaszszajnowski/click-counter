//        Potrzebne zmienne
let counter = 0;
const blasterShot = new Audio("shot.mp3");

//        Pobieranie elementów
const spanCounter = document.querySelector("span.counter");
const clickElement = document.querySelector("body");

//        Nasłuchiwanie + akcja
document.body.addEventListener("click", function() {
  counter = counter + 1;
  spanCounter.textContent = counter;
  blasterShot.currentTime = 0;
  blasterShot.play();
});
