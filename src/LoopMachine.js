class LoopMachine{
    
    constructor(){
        this.flag = false
        this.callbacks = []
    }
    addCallback(callback){
        this.callbacks.push(callback)
    }
    removeCallback(callback){
        let index = this.callbacks.indexOf(callback)
        this.callbacks.splice(index, 1)
    }
    run() {
        if(!this.flag) return
        this,this.callbacks.forEach(cb => {
            cb()
        });
        requestAnimationFrame(this.run.bind(this))
        //Jah bless, acá van instrucciones se almacenan en array callbacks
    }
    start(){
        if(this.flag) return
        this.flag = true
        this.run()
    }
    
    stop(){
        this.flag = false 
    }
}

const loopMachine = new LoopMachine()
export default loopMachine