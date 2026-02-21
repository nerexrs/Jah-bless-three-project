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
scene.add(cube);
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
loopMachine.addCallback(rotation)






loopMachine.start()

keyListener.start()



setTimeout(() => {
	guiImplementation.start()
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




