import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  create() {
    this.add.text(10, 10, "Flappy Donut");
  }
}

export default MainScene;
