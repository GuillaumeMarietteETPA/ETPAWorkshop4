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
	var platform;
	var player;
	var ennemy;
	var cursor;
}

function preload(){
	this.load.image('background','assets/marioback.png');
	this.load.image('sol','assets/sol.png');
	this.load.image('platform','assets/platform.png');
	
	this.load.spritesheet('ennemy','assets/marioennemy.png',{frameWidth: 31, frameHeight: 34});
	this.load.spritesheet('perso','assets/miro.png',{frameWidth: 31, frameHeight: 34});
}

function create(){
	this.add.image(512,380,'background');

	

}

function update() {
	

	
}