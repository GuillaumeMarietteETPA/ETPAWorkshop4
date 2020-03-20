var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
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
	this.load.image('background','assets/pacback.png');
	this.load.image('point','assets/pacpoint.png');
	
	this.load.spritesheet('ennemy','assets/pacennemy.png',{frameWidth: 31, frameHeight: 34});
	this.load.spritesheet('perso','assets/pac.png',{frameWidth: 31, frameHeight: 34});
}

function create(){
	this.add.image(512,380,'background');

	

}

function update() {
	

	
}