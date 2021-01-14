// var req = new XMLHttpRequest();
// req.open('GET', 'https://adventofcode.com/2020/day/1/input', false);
// req.send(null);
// if(req.status == 200)
//    dump(req.responseText);

// const axios = require("axios");

// axios
//   .get("https://adventofcode.com/2020/day/1/input")
//   .then(({ data }) => console.log("data", data))
//   .catch((err) => console.log("err", err));
/**
 *  TODO: Finish the below Hippo, and then also the subclass for it named HungryHippo
 *  Both of these should be in the PSEUDOCLASSICAL class style, meaning they will be
 *  called using the 'new' keyword (as you can see in the tests).
 *
 *  Hint: Hippo instances need a .name and a .marbles property
 */
var Hippo = function (name, marbleCount) {
  // fix me :)
  this.name = name;
  this.marbles = marbleCount;
};

Hippo.prototype.eats = function () {
  // remove one from the hippo's marble count
  this.marbles -= 1;
  // return a string: 'hipposName says, "That marble was delicious!"'
  return this.name + 'says, "That marble was delicious!"';
};

var HungryHippo = function (name, marbleCount, size) {
  Hippo.call(this, name, marbleCount);
  this.size = size;
};
/**
 * TODO: Make the new HungryHippo eats method
 * While the hippo still has marbles left, the HungryHippo eats method should work the same as the old method
 *
 * However, when a HungryHippo runs out of marbles, they should instead say:
 * "Do you have any more marbles? I'm a <hipposSize> hippo, and I need a lot of food!"
 */
HungryHippo.prototype.eats = function () {
  this.marbles -= 1;
  if (this.marbles > 0) {
    return this.name + 'says, "That marble was delicious!"';
  } else {
    "Do you have any more marbles? I'm a" +
      this.size +
      "hippo, and I need a lot of food!";
  }
};

// =============== TESTS ================= //
var alfie = new Hippo("Alfie", 5);
var ate = alfie.eats();
console.log(
  "Hippo .eats() correct:",
  ate === 'Alfie says, "That marble was delicious!"'
);
console.log("Hippo ate a marble:", alfie.marbles === 4);

var robby = new HungryHippo("Robby", 1, "ginormous");
var ate = robby.eats();
console.log(
  "HungryHippo eat string correct:",
  ate === "Robby says",
  `That ${marble} was delicious!`
);
console.log("HungryHippo ate a marble:", robby.marbles === 0);
var stillHungry = robby.eats();
console.log(
  "HungryHippo out-of-Marbles string correct:",
  stillHungry ===
    "Do you have any more marbles? I am a ginormous hippo, and I need a lot of food!"
);
