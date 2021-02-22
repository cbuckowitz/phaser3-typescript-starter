import 'phaser';

class DemoScene extends Phaser.Scene {

  constructor() {
    super('demo');
  }

  preload() {
    this.load.image('logo', 'assets/phaser_logo.png');
  }

  create() {
    var logo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo');
    
  }

}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: DemoScene,
});
