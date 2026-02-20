import loopMachine from './LoopMachine.js';
import Stats  from 'https://unpkg.com/three@0.128.0/examples/jsm/libs/stats.module.js';

let stats = new Stats()
document.body.appendChild(stats.dom)

loopMachine.addCallback(() => {
  stats.update()
})