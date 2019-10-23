/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */

var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, 'game-world');

var menuState = {
  create: function() {
    // create the scene
    game.add.sprite(0, 0, 'bg');
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  }

};