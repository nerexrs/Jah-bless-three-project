import { OrbitControls } from 'https://unpkg.com/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import camera from './basic/Camera.js'
import renderer from './basic/Renderer.js'
import loopMachine from './basic/LoopMachine.js';
import cube from './Cube.js';

const controls = new OrbitControls( camera, renderer.domElement );

controls.enablePan = true
controls.enableZoom = true
controls.target.set(0, 0, 0 );
loopMachine.addCallback(() => {
  controls.target.set(
    cube.position.x, 
    cube.position.y, 
    cube.position.z
   );
  controls.update()
  //Jah bless, no estoy siguiendo al cubo estoy diciendo que la posición
  // Jah bless, vea si el renderer. canvas es mi vista de pantalla donde veo y
  // Jah bless, el position es el que mira mi camera entonces
  // Jah bless, acá le digo que lo que va a mirar va a ser la posición variable del cubo pero desde donde estoy no seguirlo
})