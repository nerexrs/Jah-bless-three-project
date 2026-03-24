import keyListener from "./KeyListener.js"
import loopMachine from "./LoopMachine.js"

class RotationController{
    constructor(){
        this.target = null
        this.speed = null
    }
    start(target, speed){
        this.target = target
        this.speed = speed

        loopMachine.addCallback(this.run.bind(this))

    }
    
    run(){
            //Jah bless- clockwise sense
        if (keyListener.isPressed(68)) {
            this.target.rotation.y -= this.speed
        }
            //Jah bless- counter clockwise
        if (keyListener.isPressed(65)) {
            this.target.rotation.y += this.speed
        }
    }
    stop(){
        loopMachine.removeCallback(this.tick.bind(this))

    }
}

const rotationController = new RotationController()
export default rotationController