import camera from "./Camera.js";
import cube from "./Cube.js";
import renderer from "./Renderer.js";
import scene from "./Scene.js";

scene.add(cube);

camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 2;
camera.lookAt(cube.position);

renderer.render(scene, camera);
