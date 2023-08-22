const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

function clickButton() {
    var button = document.getElementById("btn");
    if (button) {
      button.click();
    }
  }
  
  // Call the function every 1000 milliseconds (1 second)
  var intervalId = setInterval(clickButton, 100);
  
  // To stop clicking the button after a certain time (e.g., after 10 seconds)
  setTimeout(function() {
    clearInterval(intervalId); // Stop the interval
  }, 100000); // 10000 milliseconds = 10 seconds