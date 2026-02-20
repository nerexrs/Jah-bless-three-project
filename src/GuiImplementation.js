import {GUI} from "https://unpkg.com/three@0.128.0/examples/jsm/libs/dat.gui.module.js"
import cube from './Cube.js';

class GuiImplementation{
    constructor(){
        this.gui = null
    }
    start(){
        if(this.gui){
            this.gui.show()

            return
        }
        this.gui = new GUI()
        let colorObj = {
            colorParam : 0xff0000
        }
        this.gui.addColor(colorObj, 'colorParam').name("Jah bless, color").onChange(()=>{
            cube.material.color.set(colorObj.colorParam)
        })
        const rotation = this.gui.addFolder("Rotation")
        rotation.add(cube.rotation, 'x', 0, Math.PI * 2).step(Math.PI / 180)
        rotation.add(cube.rotation, 'y', 0, Math.PI * 2).step(Math.PI / 180)
        rotation.add(cube.rotation, 'z', 0, Math.PI * 2).step(Math.PI / 180)
        
        const position  =this.gui.addFolder("Position")
        position.add(cube.position, "x").min(-10).max(10)
        position.add(cube.position, "x").min(-10).max(10).step('0.5')
        position.add(cube.position, "z", -1, 1).step(1)

    }
    stop(){
        this.gui.hide()
    }
}

const guiImplementation = new GuiImplementation()
export default guiImplementation