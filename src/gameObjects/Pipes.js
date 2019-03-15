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
    scene.add.existing(this);
    this.scene = scene;
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
    // const pipe = super.create(x, y, "donuts", frame);
    // this.scene.physics.world.enable(pipe);
    // pipe.setScale(globals.scale);
    // pipe.body.velocity.x = -300;
    // pipe.flipY = isOnCeiling;
    //
    // return pipe;
  }

  /**
   * Checks if the provided pipe section's physics body is off the bottom or left side of the screen
   *
   * @param {Phaser.GameObjects.Sprite} pipe - the piece of pipe we're checking
   */
  static isPipeOffScreen(pipe) {
    return pipe.body.x < 0 || pipe.body.y > globals.height;
  }

  /**
   * Determine the state of our Pipes when the parent Scene is updated
   *
   * This isn't called automatically and needs to be called explicitly
   * by our parent scene's update lifecycle method.
   */
  update() {
    // this.getChildren().forEach(pipe => {
    //   if (Pipes.isPipeOffScreen(pipe)) {
    //     if (pipe.active) {
    //       this.remove(pipe);
    //     }
    //   }
    // });
  }

  /**
   * Build a pipe on the screen that is either attached to the floor or the ceiling
   *
   * @param {number} height - how many tiles tall should our pipe be
   * @param {boolean} [isOnCeiling=false] - should our pipe be attached to the ceiling
   */
  buildPipe(height, isOnCeiling = false) {
    /**
     * We want our pipe to be the specified height
     */
    for (let i = 1; i <= height; i += 1) {
      /**
       * How long will the pipe be after this section is
       */
      const pipeLength = globals.tileSize * globals.scale * i;

      let y;
      if (isOnCeiling) {
        /**
         * If the pipe is on the ceiling, its y location should be at the last pipe section
         */
        y = pipeLength - globals.tileSize;
      } else {
        /**
         * If the pipe is on the floor, its y location needs to be calculated from the height of the entire window
         */
        y = globals.height - pipeLength + globals.tileSize;
      }

      // this.create({
      //   x: globals.width + (globals.tileSize / 2) * globals.scale,
      //   y,
      //   frame: i === height ? 1 : 2,
      //   isOnCeiling
      // });
    }
  }

  /**
   * Build a pair of pipes, one on the the ceiling and one attached to the floor
   */
  buildPipePair() {
    // const topHeight = Phaser.Math.RND.between(
    //   1,
    //   globals.tilesTall - globals.pipeGapSize - 1
    // );
    // const bottomHeight = globals.tilesTall - globals.pipeGapSize - topHeight;
    //
    // this.buildPipe(topHeight, false);
    // this.buildPipe(bottomHeight, true);
  }
}

export default Pipes;
