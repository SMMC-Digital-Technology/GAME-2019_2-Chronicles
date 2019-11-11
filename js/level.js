
var levelState = {
  create: function() {
  plantMap = game.add.image(0, 0, 'plantMap');
  rangeStat = game.add.sprite(50, 100, 'rangeCh');
    cursors = game.input.keyboard.createCursorKeys();
a = game.input.keyboard.addKey(Phaser.KeyCode.A);
d = game.input.keyboard.addKey(Phaser.KeyCode.D);
   game.physics.arcade.enable(rangeStat);
    rangeStat.lastX = rangeStat.x;
    rangeStat.lastY = rangeStat.y;
    rangeStat.maxMove = Math.pow(100, 2);
  },

  update: function() {
      rangeStat.body.velocity.x = 0;
      rangeStat.body.velocity.y = 0;
    if(true){
           if (cursors.left.isDown) {
            rangeStat.body.velocity.x = -60;
         }
          if (cursors.right.isDown) {
            rangeStat.body.velocity.x = 60;
          }
      if (cursors.up.isDown) {
       rangeStat.body.velocity.y = -60;
    }
    if (cursors.down.isDown) {
       rangeStat.body.velocity.y = 60;
     }

if (Math.pow (rangeStat.x - rangeStat.lastX, 2) + Math.pow (rangeStat.y - rangeStat.lastY , 2)> rangeStat.maxMove){
console.log('it works');
rangeStat.lastX = rangeStat.x;
rangeStat.lastY = rangeStat.y;
 }

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
