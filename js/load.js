/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'Booting the DOT game engine', {
      font: '30px Courier',
      fill: '#15000'
    });


    game.load.image('menuScreen', 'assets/menuScreen.png');
    game.load.image('rangeCh', 'assets/soccerball.png');
    game.load.image('bush','assets/bush.png');
    game.load.image('bg2','assets/BG2.png');
    game.load.image('BG','assets/good.png');
    game.load.image('spike','assets/spiky.png');
    game.load.image('bat','assets/bat.png');
    game.load.image('guy','assets/male.png');
    game.load.image('monsters','assets/monst.png');
  },

  create: function() {
    console.log("loading done");
    game.state.start('menu');
  }

};
