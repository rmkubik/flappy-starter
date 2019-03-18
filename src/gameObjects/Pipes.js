import Phaser from "phaser";
import globals from "../globals";

/**
 * Pipes extends Phaser.Group
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Group.html
 *
 * A Group is a way for you to create, manipulate, or recycle similar Game Objects.
 */
class Pipes extends Phaser.GameObjects.Group {
  constructor({ scene }) {
    super(scene);
    scene.add.existing(this);
    this.scene = scene;
  }

  /**
   * Creates a new Game Object and adds it to this group
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
   */
  static isPipeOffScreen(pipe) {
    return pipe.body.x < 0 || pipe.body.y > globals.height;
  }

  /**
   * Determine the state of our Pipes when the parent Scene is updated
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
   */
  buildPipe(height, isOnCeiling = false) {
    for (let i = 1; i <= height; i += 1) {
      const pipeLength = globals.tileSize * globals.scale * i;

      let y;
      if (isOnCeiling) {
        y = pipeLength - globals.tileSize;
      } else {
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
