/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'Booting the DOT game engine', {
      font: '30px Courier',
      fill: '#ffffff'
    });

    // load all assets
    game.load.image('menuScreen', 'assets/menuScreen.png');
  },

  create: function() {
    console.log("loading done");
    game.state.start('menu');
  }

};