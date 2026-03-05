//Jah bless, fyah bun
import camera from "./Camera.js";
import cube from "./Cube.js";
import light from "./Light.js";
import loopMachine from "./LoopMachine.js";
import renderer from "./Renderer.js";
import resize from "./Resize.js";
import scene from "./Scene.js";
import keyListener from './KeyListener.js';
import './OrbitImplementation.js'
import './StatsImplementation.js'
import guiImplementation from "./GuiImplementation.js";
import plane from "./Plane.js";
scene.add(cube);
scene.add(plane)
camera.position.set(1, 2, 5);
camera.lookAt(cube.position);
scene.add(light);
resize.start(renderer)

loopMachine.addCallback(() => {
	
	renderer.render(scene, camera);
});
let rotation = () => {
  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}
// loopMachine.addCallback(rotation)






loopMachine.start()

keyListener.start()



setTimeout(() => {
	// guiImplementation.start()
}, 3000);
// setTimeout(() => {
// 	guiImplementation.stop()
// }, 5000);


// setTimeout(() => {
// 	console.log(keyListener.isPressed(13));

// }, 3000); 
// let n = 1;
// let render = () => {
// 	console.log(n++);
// 	renderer.render(scene, camera);
// };
// loopMachine.addCallback(render )

// let rotation = () => {
// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;
// };
// loopMachine.addCallback(rotation)


// Jah bless, madure del readme a las 10:39:59:186 Milisec. Pull up curso a las:
// Jah bless: nah... a las y 40segundos pero nah voy a bajar a las

// Jah bless, bajé:10 horas, 45 minutos, 51 segundos, 309 milisegundos

// Jah bless, subí y copié el numero: 10 horas, 48 minutos, 36 segundos, 456 milisegundos

// Jah bless, maduré: 

// Jah bless, no había puesto Jah bless, 2:05:02 Jackie Mittoo & Friends - The heaviest cuts - a dj Mix by Mista Savona

// Jah bless, entonces ya solo eso de resto no guardo horas

// Jah bless, foto y ya cuando cerró el reloj a las:

// Jah bless, dos veces subí y bajé por agua last one

// Jah bless, jah bless cancion 1:57:23. Maduró no es exacto:

// Jah bless, ahora sí:
// Jah bless,




