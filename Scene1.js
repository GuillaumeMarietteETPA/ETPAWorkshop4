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
	var player2;
	var cursor;
}

function preload(){
	this.load.image('background','assets/pongback.png');
	this.load.image('ball','assets/pongball.png');
	this.load.image('perso','assets/pongbar.png');
}

function create(){
	this.add.image(512,380,'background');

	player = this.physics.add.sprite(39,200,'perso');
	player.setCollideWorldBounds(true);
	this.physics.add.collider(player,ball);

	cursors = this.input.keyboard.createCursorKeys();
	
	player2 = this.physics.add.sprite(984,500,'perso');
	player2.setCollideWorldBounds(true);
	this.physics.add.collider(player2,ball);

}

function update() {
	

	
}