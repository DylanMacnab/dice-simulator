
// Dice Constructor Function
function Dice() {
  this.sides = 6;
}

Dice.prototype.roll = function() {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
};

Dice.prototype.setSides = function(sides) {
  this.sides = sides;
};

// Create an instance of Dice
var dice = new Dice();
