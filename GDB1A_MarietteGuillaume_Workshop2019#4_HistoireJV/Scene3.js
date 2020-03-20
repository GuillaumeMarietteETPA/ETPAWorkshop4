var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 500 },
			debug: false
		}
	},
	scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
	
};

var game = new Phaser.Game(config);

function init() {
	var sol;
	var platform;
	var player;
	var ennemy;
	var jump = 0;
	var cursor;
}

function preload(){
	this.load.image('background','assets/marioback.png');
	this.load.image('sol','assets/sol.png');
	this.load.image('platform','assets/platform1.png');
	
	this.load.spritesheet('ennemy','assets/marioennemy.png',{frameWidth: 31, frameHeight: 34});
	this.load.spritesheet('perso','assets/miro.png',{frameWidth: 19, frameHeight: 28});
}

function create(){
	this.add.image(512,363,'background');

	sol = this.physics.add.staticGroup();
	sol.create(512,720,'sol').refreshBody();

	platform = this.physics.add.staticGroup();
	platform.create(250,420,'platform').refreshBody();
	platform.create(812,220,'platform').refreshBody();

	player = this.physics.add.sprite(100,650,'perso');
	player.setCollideWorldBounds(true);
	this.physics.add.collider(player,sol);
	this.physics.add.collider(player,platform);

	cursors = this.input.keyboard.createCursorKeys(); 
	
	this.anims.create({
		key:'right',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 7}),
		frameRate: 10,
		repeat: -1
	});
	

}

function update() {
	
	if(cursors.left.isDown){
		player.anims.play('right', true);
		player.setVelocityX(-300);
		player.setFlipX(true);
	}else if(cursors.right.isDown){
		player.setVelocityX(300);
		player.anims.play('right', true);
		player.setFlipX(false);
	}else{
		player.anims.play('stop', true);
		player.setVelocityX(0);
		
	}
	
	if(cursors.up.isDown && player.body.touching.down) {
		player.setVelocityY(-550);
	}
	

	

	
}