/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
     gameOver = game.add.sprite(0, 0, '' );
     startText = game.add.text(300, 500, 'the school is a lifeless place you lose', {
       font: '30px Courier',
       fill: '#15000'
     });
        game.state.start('menu');
   }

   //use the following to go back to the menu

};
