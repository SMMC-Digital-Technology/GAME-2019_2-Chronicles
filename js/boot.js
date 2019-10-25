/**
 * The very first stage of opening the game.
 * Use this to set game wide settting (eg physics.)
 */
var bootState = {
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.state.start('load');
  }
};