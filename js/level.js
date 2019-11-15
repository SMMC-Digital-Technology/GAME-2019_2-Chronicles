
var levelState = {
  create: function() {
  plantMap = game.add.image(0, 0, 'plantMap');
  rangeStat = game.add.sprite(50, 100, 'rangeCh');
  batStat = game.add.sprite(100, 100, 'batCh');
    cursors = game.input.keyboard.createCursorKeys();
a = game.input.keyboard.addKey(Phaser.KeyCode.A);
d = game.input.keyboard.addKey(Phaser.KeyCode.D);
one = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
two = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
   game.physics.arcade.enable(rangeStat);
   game.physics.arcade.enable(batStat);
    rangeStat.lastX = rangeStat.x;
    rangeStat.lastY = rangeStat.y;
    batStat.lastX2 = batStat.x;
    batStat.lastY2 = batStat.y;
    rangeStat.maxMove = Math.pow(100, 2);
    batStat.maxMove = Math.pow(100, 2);
    statMove = false;
    batMove = false;
    turnOverOne = false;
    turnOverTwo = false;
    move1Logi = true;
    move2Logi = true;
//    statButton = game.add.button(100, 750, 'range charicter');
//    statButton.anchor.setTo(0.5,0.5);
  },

  update: function() {
    turns = game.add.text(350, 400, 'Turn: 0', {
      font: '30px Courier',
      fill: '#10000'
      });
//    statText = game.add.text(statButton.x,statButton.y,'Range Charicter');
//  statButton.onInputUp.add(moveStat)
if (one.isDown && move1Logi) {
  statMove = true;
  move1Logi = false;
} else if (batMove) {
  statMove = false;
}
if (two.isDown && move2Logi) {
  batMove = true;
  move2Logi = false;
} else if (statMove) {
  batMove = false;
}
    rangeStat.body.velocity.x = 0;
    rangeStat.body.velocity.y = 0;

    if (statMove) {
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
batStat.body.velocity.x = 0;
batStat.body.velocity.y = 0;

if (batMove) {
    if (cursors.left.isDown) {
        batStat.body.velocity.x = -60;
    }
    if (cursors.right.isDown) {
        batStat.body.velocity.x = 60;
    }
    if (cursors.up.isDown) {
        batStat.body.velocity.y = -60;
    }
    if (cursors.down.isDown) {
        batStat.body.velocity.y = 60;
    }
}


if (Math.pow (rangeStat.x - rangeStat.lastX, 2) + Math.pow (rangeStat.y - rangeStat.lastY , 2)> rangeStat.maxMove) {
  rangeStat.lastX = rangeStat.x;
  rangeStat.lastY = rangeStat.y;
  statMove = false;
  turnOverOne = true;
}
if (Math.pow (batStat.x - batStat.lastX2, 2) + Math.pow (batStat.y - batStat.lastY2 , 2)> batStat.maxMove) {
  batStat.lastX2 = batStat.x;
  batStat.lastY2 = batStat.y;
  batMove = false;
  turnOverTwo = true;
}

if (turnOverOne == true && turnOverTwo == true) {
  move1Logi = true;
  move2Logi = true;
     turnOverOne = false;
     turnOverTwo = false;
   }
  },
};
