import Phaser from '../lib/phaser.js';


export default class Menu extends Phaser.Scene {
    // try to remember, constructor is like vanilla js version of componentDidMount/useEffect(() => {}, [])
    constructor() {
        // every Phaser.Scene has to define a unique key, so this is like calling Phaser.Scene('Menu') or Phaser.Scene({ key: 'Menu' })
        super('Menu')
    }
    preload() {
        this.load.image('background', 'assets/backgrounds/MenuBackground.png')
    }
    create() {

    }
}