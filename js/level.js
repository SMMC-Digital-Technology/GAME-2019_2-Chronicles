var levelState = {
  create: function() {
    plantMap = game.add.image(0, 0, 'plantMap');
    rangeStat = game.add.sprite(50, 100, 'rangeCh');
    batStat = game.add.sprite(100, 100, 'batCh');
    monster = game.add.sprite(400, 400, 'tf');
    cursors = game.input.keyboard.createCursorKeys();
    a = game.input.keyboard.addKey(Phaser.KeyCode.A);
    d = game.input.keyboard.addKey(Phaser.KeyCode.D);
    one = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
    two = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
    spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    game.physics.arcade.enable(rangeStat);
    game.physics.arcade.enable(batStat);
    rangeStat.lastX = rangeStat.x;
    rangeStat.lastY = rangeStat.y;
    batStat.lastX2 = batStat.x;
    batStat.lastY2 = batStat.y;
    rangeStat.maxMove = Math.pow(200, 2);
    batStat.maxMove = Math.pow(200, 2);
    statMove = false;
    batMove = false;
    turnOverOne = false;
    turnOverTwo = false;
    move1Logi = true;
    move2Logi = true;
    monsterTurn = false;
    turn = 0;
    batFight = false;
    statFight = false;
    pPlant = game.add.group();
    pPlant.enableBody = true;
    game.physics.arcade.enable(pPlant);
    //i did copy this code but i know what it means it reapears untill i is increememnted to 10 :)
    for (i = 0; i < 25; i++) {
      plant = pPlant.create(i * 40, Math.random() * 700, 'bush');
    }
  },

 update: function() {
   if (statFight == false && batFight == false) {
   rangeStat.animations.add('role', [0, 1, 2, 3], true);
   rangeStat.animations.play('role');
 rangeStat.body.collideWorldBounds = true;
 batStat.body.collideWorldBounds = true;
if (one.isDown && move1Logi) {
  statMove = true;
  move1Logi = false;
  batStat.lastX2 = batStat.x;
  batStat.lastY2 = batStat.y;
}
else if (batMove) {
  statMove = false;
  turnOverTwo = true;
}
if (two.isDown && move2Logi) {
  batMove = true;
  move2Logi = false;
  rangeStat.lastX = rangeStat.x;
  rangeStat.lastY = rangeStat.y;
} else if (statMove) {
  batMove = false;
  turnOverOne = true;
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


    if (Math.pow(rangeStat.x - rangeStat.lastX, 2) + Math.pow(rangeStat.y - rangeStat.lastY, 2) > rangeStat.maxMove) {
      rangeStat.lastX = rangeStat.x;
      rangeStat.lastY = rangeStat.y;
      statMove = false;
      turnOverOne = true;
    }
    if (Math.pow(batStat.x - batStat.lastX2, 2) + Math.pow(batStat.y - batStat.lastY2, 2) > batStat.maxMove) {
      batStat.lastX2 = batStat.x;
      batStat.lastY2 = batStat.y;
      batMove = false;
      turnOverTwo = true;
    }
    if (rangeLife >= 1 && batLife >= 1) {
    plant = pPlant.getClosestTo(rangeStat);
    }
    dx = rangeStat.x - plant.x;
    dy = rangeStat.y - plant.y;
    distance1 = Math.abs(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))
    rx = rangeStat.x - monster.x;
    ry = rangeStat.y - monster.y;
      distance2 = Math.abs(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))

    if (distance2 <= 250 && spacebar.isDown){
      rangeStat.body.velocity.x = 0;
      rangeStat.body.velocity.y = 0;
     statFight = true;
    }
    if (distance1 <= 250 && spacebar.isDown){
      batStat.body.velocity.x = 0;
      batStat.body.velocity.y = 0;
     batFight = true;
    }
    if () {

    }

    if (turnOverOne == true && turnOverTwo == true) {
      if (distance1 <= 400) {
        console.log('fje');
        monster.x = plant.x;
        monster.Y = plant.y;
      monsterTurn = true;
    } else if (distance1 >= 401) {
      monster.x = plant.x;
      monster.Y = plant.y;
    monsterTurn = true;
    }
  }
    if (monsterTurn) {
      move1Logi = true;
      move2Logi = true;
      turnOverOne = false;
      turnOverTwo = false;
      turn += 1;
      monsterTurn = false;
    }
   }
  },
};
