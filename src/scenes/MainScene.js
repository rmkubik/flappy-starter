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
    // We'll implement this later
  }

  /**
   * Scene lifecycle method, create().
   * This is the only required lifecycle method for a Scene.
   * It is used to initialize your game.
   */
  create() {
    /**
     * Add a text Game Object to our Scene.
     *
     * arguments:
     * - x location in pixels
     * - y location in pixels
     * - text to be displayed
     *
     * Phaser uses the top left of the screen as origin (0, 0).
     */
    this.add.text(10, 10, "Flappy Donut");
  }

  /**
   * Set up input handling events so our game can respond to player inputs.
   */
  createPlayerInputs() {
    // We'll implement this later
  }

  /**
   * Scene lifecycle method, update().
   * This method is used to make changes as the game progresses.
   * It is called when the Scene runs an update step.
   */
  update() {
    // We'll implement this later
  }
}

export default MainScene;
