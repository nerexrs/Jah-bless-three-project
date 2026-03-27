//Jah bless, fyah bun
import camera from "./basic/Camera.js";
import cube from "./Cube.js";
import light from "./Light.js";
import loopMachine from "./basic/LoopMachine.js";
import renderer from "./basic/Renderer.js";
import resize from "./basic/Resize.js";
import scene from "./basic/Scene.js";
import keyListener from './basic/KeyListener.js';
import './OrbitImplementation.js'
import './basic/StatsImplementation.js'
import guiImplementation from "./GuiImplementation.js";
import plane from "./Plane.js";
import lander from "./basic/Lander.js";
import rayLander from "./basic/RayLander.js";
import cubeController from "./basic/CubeController.js";
import rotationController from "./basic/RotationController.js";
import moveController from "./basic/MoveController.js";
import shadowcontroller from "./basic/ShadowController.js";
import * as THREE from 'three';
scene.add(cube);
scene.add(plane)
camera.position.set(1, 2, 5);
camera.lookAt(cube.position);
scene.add(light);
resize.start(renderer)

loopMachine.addCallback(() => {
	
	renderer.render(scene, camera);
});


keyListener.start()
loopMachine.start()
rayLander.start(cube, 0.5)
// cubeController.start(cube, 0.2)
rotationController.start(cube)
moveController.start(cube, 0.3)
shadowcontroller.start(cube, light.children[0], new THREE.Vector3(5, 5, 5))
setTimeout(() => {
	guiImplementation.start()
}, 3000);
// let rotation = () => {
//   cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;
// }
// loopMachine.addCallback(rotation)




// keyListener.start()
// loopMachine.start()
// rayLander.start(cube, 0.5)
// // cubeController.start(cube, 0.2)
// rotationController.start(cube, 0.05)
// moveController.start(cube, 0.3)
// setTimeout(() => {
// 	guiImplementation.start()
// }, 3000);
// shadowcontroller.start(cube, light.children[0], new THREE.Vector3(5, 5, 5))
// setTimeout(() => {
// 	guiImplementation.stop()
// }, 5000);
//Jah bless, escrit o16-03-2026. 7:21 post 4:20 anchorage que es ahora a esa hora 
// Jah bless, she's on the top of the line she's in her prime time sin cpillarme hasta las 7:23 pero lo haré antes de cenar first time
//Jah bless, por esperar estar "trabado" solo para trabarme hasta ahorita a cambio de mucha productividad
//Jah bless, que visaje solo le queda un gateway porque despuetodo es lo mismo, la luz. shader begginings, paso esto creo mi ev.io mas pro porque ellos si buen game en 2020 pero papi webgpu salio ayer nattywatching you lazer watching you 
//Jah bless, start 7:25 al vapo de hot hot pongalo green pa flavor while aprovechando hot. Empecé luz a las o sea sombras, el beggining del triple a xd y lo digo feliz, estoy dispuesto a hacer todo y acá está escrito 7:28 para lograrlo, desde mi google, en adelante,Reconocí q no me las sé y toca estudiar y empecé a estudiar y busqué de que toca aprender matematicas de cero??? si ve el ego para postergar la acción xd, no rey apenas lo que le falta después si de trillonario ya rey una universidad diaria multifacetica ahora si tiempos de noe parchadito, arca parchadito si esfuerzo y sacrificio donde todos estan descansando le meto con clippy y nos fuimonos clippy porque un día ya no será palabras sino código a esta velocidad y estaré bien de mis manos. diario a las:  triple a en la web para JAH JAH THE LOOOORD HE IS THE CONQUEROR OF THE TRIB OF JUDAH,  BUM con PUL! a las y ya que de hecho. nada, se paró de su silla pa ir con su papá a las y hoy se tiene que cepillar enserio así como fue responsable con todo y no se parchará post comida pa eso jugó ya ev.io y pa eso jugará con los juegos que va creando en un flujo a alas a  se paro 19 horas, 34 minutos, 0 segundos, 261 milisegundos con 389+ clippy bye o           
// setTimeout(() => {d333
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
// Jah bless, me cepillé el 11 de marzo del 2026 
// Jah bless, a las 18 horas, 21 minutos, 28 segundos, 497 milisegundos 
// Jah bless, y terminé entendiendo el curso 21.
// Jah bless,  dije 22 y amen voy a ese
// Jah bless,, este era el propio gatekeeper
// Jah bless, stop root listen dijo roots cafe
// Jah bless,  tanztee no 1 pt1 35:41 pls,
// Jah bless, LISTEN! STOP LOOK LISTEN, 
// Jah bless, y next tune clippy chao en 174 ROOTS.




