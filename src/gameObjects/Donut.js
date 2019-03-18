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
  constructor({ scene, position }) {
    super(scene, position.x, position.y, "donuts", 0);
    // scene.add.existing(this);
    // this.setScale(globals.scale);

    // scene.physics.world.enable(this);

    /**
     * Arcade physics Body functions
     */
    // this.body.setBounce(0.8);
    // this.body.setCollideWorldBounds(true);
    // this.body.setGravityY(globals.gravity);
  }

  /**
   * Tell our Donut to flap up higher into the air
   */
  flap() {
    // this.body.velocity.y -= 400;
  }
}

export default Donut;
