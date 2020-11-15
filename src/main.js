import Phaser from './lib/phaser.js';

import Menu from './scenes/Menu.js';

let config = {
    type: Phaser.AUTO, 
    scene: Menu
};

export default new Phaser.Game(config);

