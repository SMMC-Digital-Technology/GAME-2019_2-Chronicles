/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {
    // create the scene
    menuScreen = game.add.image(0, 0, 'menuScreen');
    //menuScreen.scale.setTo(0.75, 0.8)
    menuScreen.width = window.innerWidth;
    menuScreen.height = window.innerHeight;

  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  }

};