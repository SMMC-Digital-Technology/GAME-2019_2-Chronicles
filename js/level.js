var levelState = {
  create: function() {
    plantMap = game.add.image(0, 0, 'BG1');
    rangeStat = game.add.sprite(1000, 100, 'rangeCh');
    batStat = game.add.sprite(100, 100, 'rangeCh');
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
    player = false;
    move1Logi = true;
    move2Logi = true;
    monsterTurn = false;
    fightingStart = true;
    singlerun = true;
    plantAlive = 25;
    ennemyAttack = 100;
    ennemyAttack2 = 100;
    theEnd = false;
    bigmonsterhealth = 3;
    turn = 0;
    batFight = false;
    statFight = false;
    fighting  = false;
    rangeLife = 100;
    batLife = 100;
    pPlant = game.add.group();
    pPlant.enableBody = true;
    game.physics.arcade.enable(pPlant);
       	game.stage.backgroundColor = '#124184';
    //i did copy this code but i know what it means it reapears untill i is increememnted to 10 :)
    for (i = 0; i < 25; i++) {
      plant = pPlant.create(i * 40, Math.random() * 600, 'bush');
    }
  },

 update: function() {
   if (statFight == false && batFight == false) {
//  game.physics.arcade.overlap(batStat, plant, goodending, null, this);
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
  //ask sir about this tommorow
  rangeStat.lastX = rangeStat.x;
  rangeStat.lastY = rangeStat.y;
  statMove = false;
  turnOverTwo = true;
}
if (two.isDown && move2Logi) {
  batMove = true;
  move2Logi = false;
  rangeStat.lastX = rangeStat.x;
  rangeStat.lastY = rangeStat.y;
} else if (statMove) {
  batStat.lastX2 = batStat.x;
  batStat.lastY2 = batStat.y;
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
    dx = rangeStat.x - plant.x;
    dy = rangeStat.y - plant.y;
    distance1 = Math.abs(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))
    rx = rangeStat.x - monster.x;
    ry = rangeStat.y - monster.y;
      distance2 = Math.abs(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))

      if (rangeLife >= 1 && batLife >= 1) {
      plant = pPlant.getClosestTo(rangeStat);
    } if (rangeLife <= 0 && batLife >= 1) {
          plant = pPlant.getClosestTo(batStat);
    } if (rangeLife >= 1 && batLife >= 0) {
          plant = pPlant.getClosestTo(rangeStat);
    }

    if (distance2 <= 40 && spacebar.isDown && statMove == true){
      rangeStat.body.velocity.x = 0;
      rangeStat.body.velocity.y = 0;
     statFight = true;
     fighting = true;

    }
    if (distance1 <= 40 && spacebar.isDown && batMove == true){
      batStat.body.velocity.x = 0;
      batStat.body.velocity.y = 0;
     batFight = true;
     fighting = true;

    }

    if (turnOverOne == true && turnOverTwo == true) {
      if (distance1 <= 400) {
        monster.x = plant.x;
        monster.Y = plant.y;
      monsterTurn = true;
    } else if (distance1 >= 401) {
      monster.x = plant.x;
      monster.Y = plant.y;
    monsterTurn = true;
    }
  }
  game.physics.arcade.collide(rangeStat, plant, this.goodendin, null, this);
  game.physics.arcade.collide(batStat, plant, this.goodendi, null, this);
    if (monsterTurn) {
      move1Logi = true;
      move2Logi = true;
      turnOverOne = false;
      turnOverTwo = false;
      turn += 1;
      monsterTurn = false;
    }
   }

   if (fighting) {
    if (fightingStart){
      spike = game.add.group();
      spike.enableBody = true;
      game.physics.arcade.enable(spike);
    for (o = 0; o < 25; o++) {
      spikes = pPlant.create(0, Math.random() * 650, 'spike');
      spikes.body.gravity.x = 10;
      }
      fightingStart = false;
    }
    if (spikes.y == 640) {
      fightingStart = true;
      console.log('jfjf');
    }
    if (ennemyAttack >= 1) {
      ennemyAttack -= 1;
    for (o = 0; o < 1; o++) {
      spikes = pPlant.create(0, Math.random() * 650, 'spike');
      spikes.body.gravity.x = 60;
      }
    }
    if (ennemyAttack2 >= 1) {
      ennemyAttack2 -= 1;
    for (o = 0; o < 1; o++) {
      spikes = pPlant.create(0, Math.random() * 650, 'spike');
      spikes.body.gravity.x = 20;
      }
    }

    if (singlerun) {
    if (statFight) {
     player = game.add.sprite(1000, 325, 'rangeP');
    }
    if (batFight) {
     player = game.add.sprite(1000, 325, 'batP');
     }
    monsterfight = game.add.sprite(0, 150, 'bigmonster');
    monsterfight.scale.setTo(10, 10);
     singlerun = false;
    }
   game.physics.arcade.enable(monsterfight);
    game.physics.arcade.enable(player);
       monsterfight.body.immovable = true;
   rangeStat.body.collideWorldBounds = true;
   if (player) {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
      if (cursors.left.isDown) {
        player.body.velocity.x = -80;
      }
      if (cursors.right.isDown) {
        player.body.velocity.x = 80;
      }
      if (cursors.up.isDown) {
        player.body.velocity.y = -80;
      }
      if (cursors.down.isDown) {
        player.body.velocity.y = 80;
    }
  }
game.physics.arcade.collide(player, monsterfight, this.goodending, null, this);
game.physics.arcade.collide(player, spikes, this.healthending, null, this);
}


//    if (spikes.x >= player.x && spikes.y == player.y) {
  //  if (batFight) {
  //    batLife -= 25;
  //  }
  //  if (statFight) {
  //    rangeLife -= 25;
  //   }
  //   }
    if (theEnd == true) {
      player = false;
       statFight = false;
       batFight = false;
       fighting = false;
       singlerun = true;
       console.log('xcfg');
    }

 },
healthending: function(player, spikes) {
     console.log('gr');

},
goodending: function(player, monsterfight) {
     console.log('gg');
     bigmonsterhealth -= 1;
     
   },


  goodendin: function(rangeStat, plant) {
       console.log('gg');
       plant.kill();
plantAlive -= 1;
 if (plantAlive == 10) {
game.state.start('gameover');
}
},
goodendi: function(batStat, plant) {
     console.log('gg');
     plant.kill();
plantAlive -= 1;
if (plantAlive == 10) {
game.state.start('gameover');
}
},
};
