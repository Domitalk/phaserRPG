import Phaser from '../lib/phaser.js';


export default class Menu extends Phaser.Scene {
    constructor() {
        // remember the old school way, constructor is like useEffect(() => {},[]) aka componentDidMount
        super('Menu')
    }
    preload() {
        this.load.image('', '')
    }
    create() {

    }
}