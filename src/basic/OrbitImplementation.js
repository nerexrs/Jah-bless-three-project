import { OrbitControls } from 'https://unpkg.com/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import camera from './Camera.js'
import renderer from './Renderer.js'

const controls = new OrbitControls( camera, renderer.domElement );

controls.enablePan = true
controls.enableZoom = true
controls.target.set(0, 0, 0 );
controls.update()