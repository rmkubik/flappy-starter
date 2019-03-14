import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  create() {
    /**
     * Add a text Game Object to our Scene.
     *
     * parameters:
     * - x location in pixels
     * - y location in pixels
     * - text to be displayed
     *
     * Phaser uses the top left of the screen as origin (0, 0).
     */
    this.add.text(10, 10, "Flappy Donut");
  }
}

export default MainScene;
