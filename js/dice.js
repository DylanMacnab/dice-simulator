
// Dice Constructor Function
function Dice() {
  this.sides = 6;
  this.setSides = function(sides) {
    this.sides = sides;
  };
  this.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  };
}

// Create an instance of Dice
var dice = new Dice();
