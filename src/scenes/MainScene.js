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
  /**
   * Scene lifecycle method, preload().
   * This method is used to load and register assets into our game.
   */
  preload() {
    /**
     * This loads our sprite sheet and assigns it to the key "donuts"
     */
    // this.load.spritesheet("donuts", donutSpriteSheet, {
    //   frameWidth: globals.tileSize,
    //   frameHeight: globals.tileSize
    // });
  }

  /**
   * Scene lifecycle method, create().
   * This is the only required lifecycle method for a Scene.
   * It is used to initialize your game.
   */
  create() {
    this.createPlayerInputs();

    /**
     * Create a donut instance, a Phaser Sprite or an image on the screen
     */
    // this.donut = new Donut({ scene: this, position: { x: 150, y: 100 } });

    /**
     * Create a Pipes instance, a Phaser Group or a grouping of similar game objects
     */
    // this.pipes = new Pipes({ scene: this });

    /**
     * Enable collisions between our donut and our pipes with the Arcade Physics plugin
     */
    // this.physics.add.collider(this.donut, this.pipes, (donut, pipe) => {
    //   pipe.body.setGravityY(globals.gravity);
    // });

    /**
     * Spawn pairs of pipes on a one second loop
     */
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
    // this.input.keyboard.on("keydown_SPACE", () => { this.donut.flap(); });
    // this.input.on("pointerdown", () => { this.donut.flap(); });
    //
    /**
     * Handle player input for spawning test pipes
     */
    // this.input.keyboard.on("keydown_ENTER", () => { console.log("keydown_ENTER"); });
  }

  /**
   * Scene lifecycle method, update().
   * This method is used to make changes as the game progresses.
   * It is called when the Scene runs an update step.
   */
  update() {
    /**
     * Game objects don't have lifecycle events by default.
     * We need to trigger our Pipes' update function explicitly.
     */
    // this.pipes.update();
  }
}

export default MainScene;
