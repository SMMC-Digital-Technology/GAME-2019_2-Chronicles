/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {

    // create the scene
    spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    menuScreen = game.add.image(0, 0, 'menuScreen');


    startText = game.add.text(300, 500, 'Press the spacebar to begin!', {
      font: '30px Courier',
      fill: '#15000'
    });
    menuScreen.scale.setTo(0.75, 0.8)
    menuScreen.width = 1100;
    menuScreen.height = 700;


  },

  update: function() {
    if (spacebar.isDown) {
      game.state.start('level');
    }
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  }

};