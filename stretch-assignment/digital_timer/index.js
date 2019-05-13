let miliseconds = 0;

function addMiliseconds(){
  // let seconds_div = document.getElementById("secondOnes");
  // seconds_div.textContent = "1";
  miliseconds++;
  if(miliseconds > 1000){
    msTens_div.textContent = 0;
    msHundreds_div.textContent = 0;
    secondOnes_div.textContent = 0;
    secondTens_div.textContent = 1;
    return false
  }
  else {
    return true
  }
};

const msTens_div = document.getElementById("msTens");
const msHundreds_div = document.getElementById("msHundreds");
const secondOnes_div = document.getElementById("secondOnes");
const secondTens_div = document.getElementById("secondTens");

(function init(){
  msTens_div.textContent = 0;
  msHundreds_div.textContent = 0;
  secondOnes_div.textContent = 0;
  secondTens_div.textContent = 0;
})();

const interval = window.setInterval(function() {
  // alert("Alert");
  addMiliseconds() ? console.log(miliseconds) : clearInterval(interval);
}, 10)