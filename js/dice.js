// Dice Constructor Function
function Dice(sides) {
  this.sides = sides;
  this.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// Create an instance of Dice
var dice = new Dice(50);
