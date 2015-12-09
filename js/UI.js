// Helper function for print
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");
button.addEventListener("click", function(){
  var result = dice.roll();
  printNumber(result);
});
