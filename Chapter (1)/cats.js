//Draw as many cats as you want (counting up)!
var drawCats = function (howManyTimes) {
  // Loop from 0 up to (but not including) howManyTimes
  for (var i = 0; i < howManyTimes; i++) {
    // Print the current number and a cat face
    console.log(i + " =^.^=");
  }
};

// Call the drawCats function with 10 as the argument
// This will print 10 cats, numbered 0 to 9
drawCats(10); // You can put any number here instead of 10.


// Draw as many cats as you want (counting down)!
var drawCats = function (howManyTimes) {
  // Loop from 37 down to (but not including) howManyTimes
  for (var i = 37; i > howManyTimes; i--) {
    // Print the current number and a cat face
    console.log(i + " =^.^=");
  }
};

// Call the drawCats function with 30 as the argument
// This will print cats numbered from 37 down to 31
drawCats(30); // You can put any number here instead of 30.