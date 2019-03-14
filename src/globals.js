const globals = {
  /**
   * How big each tile of our spritesheet will be
   */
  tileSize: 32,
  /**
   * By what factor will we scale our game assets
   */
  scale: 2,
  /**
   * How many tiles tall is our game window
   */
  tilesTall: 10,
  /**
   * How many tiles wide is our game window
   */
  tilesWide: 6,
  /**
   * How many tiles of gap do we want between our pipe pairs
   */
  pipeGapSize: 3,
  /**
   * How strong is our force of gravity
   */
  gravity: 300,
  /**
   * How wide is the player's device
   */
  deviceWidth: window.innerWidth,
  /**
   * How high is the player's device
   */
  deviceHeight: window.innerHeight
};

/**
 * How wide with the game window be in pixels
 */
globals.width = globals.tileSize * globals.scale * globals.tilesWide;
/**
 * How high with the game window be in pixels
 */
globals.height = globals.tileSize * globals.scale * globals.tilesTall;
/**
 * How much do we need to scale our game to fit the device
 */
globals.deviceScale = Math.min(
  globals.deviceWidth / globals.width,
  globals.deviceHeight / globals.height
);

export default globals;
