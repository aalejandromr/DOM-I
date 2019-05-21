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

    msTens_div.style.color = "red";
    msHundreds_div.style.color = "red";
    secondOnes_div.style.color = "red";
    secondTens_div.style.color = "red";
    colons.style.color = "red";
    return false
  }
  else {
    let tempInt = miliseconds.toString().split("");
    if(tempInt.length === 3) {
      secondOnes_div.textContent = tempInt[0];
      msHundreds_div.textContent = tempInt[1];
      msTens_div.textContent = tempInt[2];
      // secondTens_div.textContent = 1;
    }

    if(tempInt.length === 2) {
      msHundreds_div.textContent = tempInt[0];
      msTens_div.textContent = tempInt[1];
      // debugger;
    }

    if(tempInt.length === 1) {
      msTens_div.textContent = tempInt[0];
      
    }
    return true
  }
};

const msTens_div = document.getElementById("msTens");
const msHundreds_div = document.getElementById("msHundreds");
const secondOnes_div = document.getElementById("secondOnes");
const secondTens_div = document.getElementById("secondTens");
const colons = document.getElementById("colon");

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


function updateDOM(){
  let tempInt = miliseconds.toString().split("");
  if(miliseconds % 1000 === 0){
    msTens_div.textContent = 0;
    msHundreds_div.textContent = 0;
    secondOnes_div.textContent = 0;
    secondTens_div.textContent = 1;

    msTens_div.style.color = "red";
    msHundreds_div.style.color = "red";
    secondOnes_div.style.color = "red";
    secondTens_div.style.color = "red";
    colons.style.color = "red";
    return false
  } else if(miliseconds % 100 === 0){
    
  } else if(miliseconds % 10 === 0) {

  }
}