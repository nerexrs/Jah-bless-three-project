import * as THREE from 'three';
import texture from './Texture.js';
import terrain from './basic/Terrain.js';
const geometry = new THREE.PlaneGeometry( 200, 200, 100, 100 );
const material = new THREE.MeshPhongMaterial( 
  { color: 0xffffff, 
    side: THREE.DoubleSide,
    wireframe: false } );
const plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI*.5
plane.castShadow = true;
plane.receiveShadow = true;

plane.layers.enable(1)
//Jah bless, ese enable es para poner objetos 3d en las capas correspondientes en este caso capa 1 plano y lo seteo en raycaster
let arr = plane.geometry.attributes.position.array
let length = plane.geometry.attributes.position.array.length


//Jah bless, nos vemos en Uruguay su mansión que ya guardó

// Jah bless, pongala cuando vuelva solo si sale y se cuida así como

//Jah bless, por fin dejó de destruirse y plane land a las 13:39:47:54 Milisegundos del 5 de marzo del 2026
// dejó plon y se cepilló y va a bañarse así sin plonearse

// Jah bless, baño, ver si recojo fast una parte, taxi, llamar. 
for (let index = 0; index < length/3; index++) {
    // let x = 
    // let y = 
    arr[index*3+2] = terrain(arr[index*3+1], arr[index*3+0]
    )
}


texture. ground.then((map) => {
  plane.material.map = map
  plane.material.needsUpdate = true
  plane.material.map.wrapS = THREE.RepeatWrapping;  
  plane.material.map.wrapT = THREE.RepeatWrapping;  
  plane.material.map.repeat.set(10, 20) 
})
export default plane
