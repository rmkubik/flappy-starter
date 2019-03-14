import Phaser from "phaser";
import globals from "../globals";

/**
 * Pipes extends Phaser.Group
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Group.html
 *
 * A Group is a way for you to create, manipulate, or recycle similar Game Objects.
 */
class Pipes extends Phaser.GameObjects.Group {
  /**
   * @param {object} configuration
   * @param {Phaser.Scene} configuration.scene - the Phaser.Scene that owns this Sprite
   */
  constructor({ scene }) {
    /**
     * We need to call the Group constructor
     *
     * arguments:
     * - the Phaser.Scene that owns this Group
     */
    super(scene);
  }

  /**
   * Creates a new Game Object and adds it to this group
   *
   * This is an extension of the default Phaser.GameObject.Group.create() function.
   * We want to set a few defaults on our pipe sections after we add them to the Pipes Group.
   *
   * @param {object} configuration
   * @param {number} configuration.x - coordinate in pixels
   * @param {number} configuration.y - coordinate in pixels
   * @param {string} configuration.frame - the frame to use for our pipe Sprite
   * @param {boolean} configuration.isOnCeiling - should our pipe be attached to the ceiling
   */
  create({ x, y, frame, isOnCeiling }) {
    // We'll implement this later
  }

  /**
   * Checks if the provided pipe section off the bottom or side of the screen
   *
   * @param {Phaser.GameObjects.Sprite} pipe - the piece of pipe we're checking
   */
  static isPipeOffScreen(pipe) {
    // We'll implement this later
  }

  /**
   * Determine the state of our Pipes when the parent Scene is updated
   *
   * This isn't called automatically and needs to be called explicitly
   * by our parent scene's update lifecycle method.
   */
  update() {
    // We'll implement this later
  }

  /**
   * Build a pipe on the screen that is either attached to the floor or the ceiling
   *
   * @param {number} height - how many tiles tall should our pipe be
   * @param {boolean} [isOnCeiling=false] - should our pipe be attached to the ceiling
   */
  buildPipe(height, isOnCeiling = false) {
    // We'll implement this later
  }

  /**
   * Build a pair of pipes, one on the the ceiling and one attached to the floor
   */
  buildPipePair() {
    // We'll implement this later
  }
}

export default Pipes;
