/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector(".number").innerHTML = generateNumber();
  document.querySelector(".suit1").innerHTML = suit;
  document.querySelector(".suit2").innerHTML = suit;

  if (randomSuit == 0 || randomSuit == 1) {
    document.querySelector(".suit1").classList.add("red");
    document.querySelector(".suit2").classList.add("red");
  } else {
    document.querySelector(".suit1").classList.add("black");
    document.querySelector(".suit2").classList.add("black");
  }
};

const generateNumber = () => {
  let numbers = ["A", 2, 3, 4, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
//saque este codigo de la funcion generateSuit() debido a que me creaba dos suites distintas a la hora de agregarlo al html en la linea 8 y 9 como innerHTML = generateSuit()
let suits = ["♦", "♥", "♠", "♣"];
let randomSuit = Math.floor(Math.random() * suits.length);
let suit = suits[randomSuit];
