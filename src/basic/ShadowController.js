import loopMachine from "./LoopMachine"

class Shadowcontroller{
    constructor(){
        this.target = null
        this.directionalLight = null
        
    }
    start(target, directionalLight){
        this.target = target
        this.directionalLight = directionalLight        
        loopMachine.addCallback(this.run.bind(this))
    }
    stop(){
        loopMachine.removeCallback(this.run.bind(this))
    }
    run(){
        
    }
}

const shadowcontroller = new Shadowcontroller()
export default shadowcontroller