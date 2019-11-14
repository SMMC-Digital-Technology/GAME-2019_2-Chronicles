
var levelState = {
  create: function() {
  plantMap = game.add.image(0, 0, 'plantMap');
  rangeStat = game.add.sprite(50, 100, 'rangeCh');
    cursors = game.input.keyboard.createCursorKeys();
a = game.input.keyboard.addKey(Phaser.KeyCode.A);
d = game.input.keyboard.addKey(Phaser.KeyCode.D);
one = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
   game.physics.arcade.enable(rangeStat);
    rangeStat.lastX = rangeStat.x;
    rangeStat.lastY = rangeStat.y;
    rangeStat.maxMove = Math.pow(100, 2);
    statMove = false;
    turnOverOne = false;
    move1Logi = true;
//    statButton = game.add.button(100, 750, 'range charicter');
//    statButton.anchor.setTo(0.5,0.5);
  },

  update: function() {
    turns = game.add.text(350, 800, 'Turn: 0', {
      font: '30px Courier',
      fill: '#1000'
      });
//    statText = game.add.text(statButton.x,statButton.y,'Range Charicter');
//  statButton.onInputUp.add(moveStat)
if (one.isDown && move1Logi == true) {
  statMove = true;
  move1Logi = false;
  console.log('works');
}
    rangeStat.body.velocity.x = 0;
    rangeStat.body.velocity.y = 0;

    if (statMove == true) {
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
    }

if (Math.pow (rangeStat.x - rangeStat.lastX, 2) + Math.pow (rangeStat.y - rangeStat.lastY , 2)> rangeStat.maxMove) {
  rangeStat.lastX = rangeStat.x;
  rangeStat.lastY = rangeStat.y;
  statmove = false;
  turnOverOne = true;
}

if (turnOverOne == true) {
  move1Logi = true;
     turns.text = 'Turn: ' + game.global.turn;
    }
  },  
};
