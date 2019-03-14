import Phaser from "phaser";
import globals from "../globals";

/**
 * Donut extends Phaser.GameObject.Sprite
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
 *
 * Phaser has a variety of different types of game objects.
 * The Sprite game object is a visually rendered entity.
 * The Sprite can have a physics body, animations, and more.
 */
class Donut extends Phaser.GameObjects.Sprite {
  /**
   * @param {object} configuration
   * @param {Phaser.Scene} configuration.scene - the Phaser.Scene that owns this Sprite
   * @param {object} configuration.position
   * @param {number} configuration.position.x - coordinate in pixels
   * @param {number} configuration.position.y - coordinate in pixels
   */
  constructor({ scene, position }) {
    /**
     * We need to call the Sprite constructor
     *
     * arguments:
     * - the Phaser.Scene that owns this Sprite
     * - x location in pixels
     * - y location in pixels
     * - the spritesheet asset to reference
     * - the frame in the spritesheet to use
     */
    super(scene, position.x, position.y, "donuts", 0);
  }

  /**
   * Tell our Donut to flap up higher into the air
   */
  flap() {
    // We'll implement this later
  }
}

export default Donut;
