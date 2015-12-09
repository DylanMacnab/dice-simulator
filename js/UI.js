// Helper function for print
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.addEventListener("click", function(){
  // Get Number of Sides
  var sidesInput = document.getElementById("sidesInput").value;
  dice.setSides(sidesInput);
  // Set length of roll time to random value from 100 to 1000
  var times = Math.floor(Math.random() * 10) + 1;
  // Create Timer
  var i = 0;
  var timer = setInterval(function() {
    if(i === times) {
      clearInterval(timer);
    }
    // Roll the dice
    var result = dice.roll();
    printNumber(result);
    // Incriment
    i++;
  }, 100);
});
