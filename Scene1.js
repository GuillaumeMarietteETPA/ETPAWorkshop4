var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
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
	var platform;
	var player;
	var cursor;
}

function preload(){
	this.load.image('background','assets/back.png');
	this.load.image('sol','assets/platform.png');
	this.load.spritesheet('perso','assets/sprite.png',{frameWidth: 27, frameHeight: 37});
}

function create(){
	this.add.image(512,310,'background');

	platform = this.physics.add.staticGroup();
	platform.create(512,670,'sol');

}

function update() {
	

	
}