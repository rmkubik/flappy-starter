import Phaser from "phaser";
import globals from "../globals";
import donutSpriteSheet from "../../assets/donuts.png";
import Donut from "../gameObjects/Donut";
import Pipes from "../gameObjects/Pipes";

/**
 * MainScene extends Phaser.Scene
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html
 *
 * In depth usage dev logs:
 * Part 1: https://phaser.io/phaser3/devlog/119
 * Part 2: https://phaser.io/phaser3/devlog/121
 */
class MainScene extends Phaser.Scene {
  preload() {
    // this.load.spritesheet("donuts", donutSpriteSheet, {
    //   frameWidth: globals.tileSize,
    //   frameHeight: globals.tileSize
    // });
  }

  create() {
    this.createPlayerInputs();

    // this.donut = new Donut({ scene: this, position: { x: 150, y: 100 } });

    // this.pipes = new Pipes({ scene: this });

    // this.physics.add.collider(this.donut, this.pipes, (donut, pipe) => {
    //   pipe.body.setGravityY(globals.gravity);
    // });

    // this.time.addEvent({
    //   delay: 1000,
    //   callback: this.pipes.buildPipePair,
    //   callbackScope: this.pipes,
    //   loop: true
    // });
  }

  /**
   * Set up input handling events so our game can respond to player inputs.
   */
  createPlayerInputs() {
    /**
     * Handle player input for controlling the Donut
     */
    // this.input.keyboard.on("keydown_SPACE", () => {
    //   this.donut.flap();
    // });
    // this.input.on("pointerdown", () => {
    //   this.donut.flap();
    // });
    //
    /**
     * Version 1: Spawn a single pipe
     */
    // this.input.keyboard.on("keydown_ENTER", () => {
    //   this.pipes.create({
    //     x: 100,
    //     y: 100,
    //     frame: 1
    //   });
    // });
    /**
     * Version 2: Spawn a pair of pipes
     */
    // this.input.keyboard.on("keydown_ENTER", () => {
    //   this.pipes.buildPipe(3);
    //   this.pipes.buildPipe(3, true);
    // });
    /**
     * Version 3: Spawn a randomly sized pair of pipes
     */
    // this.input.keyboard.on("keydown_ENTER", () => {
    //   this.pipes.buildPipePair();
    // });
  }

  update() {
    // this.pipes.update();
  }
}

export default MainScene;
