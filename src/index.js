import camera from "./Camera.js";
import cube from "./Cube.js";
import light from "./Light.js";
import renderer from "./Renderer.js";
import scene from "./Scene.js";

scene.add(cube);
camera.position.set(1, 2, 5);
camera.lookAt(cube.position);
scene.add(light);

setInterval(() => {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}, 1000 / 30);
