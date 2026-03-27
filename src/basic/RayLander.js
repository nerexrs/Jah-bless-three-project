import * as THREE from 'three';
import scene from './Scene.js';
import loopMachine from './LoopMachine.js';
class RayLander{

    constructor(){
        this.raycaster = new THREE.Raycaster()
        this.raycaster.layers.set(1)
        this.mesh = null
    }
    start(mesh, distanceToGround = .5){
        this.mesh = mesh
        this.distanceToGround = distanceToGround
        // this.raycaster.set(origin, direction)
        loopMachine.addCallback(this.tick.bind(this))
        

    }
    tick() {
        this.raycaster.set(this.mesh.position, this.mesh.up.negate().normalize())
        //Jah bless, meshh object3d y todo ubject tiene un metodo .up que es 0.1.0 y 
        // Jah bless, positivo apunta hacia arriba y como es vector tres invierte el valor en los ejes, si es positivo pone negativo y viceversa
        //Jah bless, y normalize normaliza el vector, que hace que el ector sea misma dirección longitud 1

        //Jah bless, en la posición del mesh y del mesh en el punto y negativo es decir abajo del cubo normalizado para vector longitud 1
        //Jah bless, para su shooter esto configura su arma, 
        // Jah bless this.raycaster.set(
        // Jah bless, de este objeto buscame el mesh (arma 3d u objeto, maya geometrica) que recibas y de él dame la posición , 
        // Jah bless, y de ese objeto subemelo en y 1 para después invertir su valor -1 y finalmente normalizamelo para que sea una unidad)
        //Jah bless, de tal forma que tengo la posició nde origen y digo que voy a apuntar hacia abajo de forma normalizada. Ya la pilla? de -1Y normalizado del mesh va a estar mirando
        // Jah bless, ahora vamos a disparar Escrito 2:29 pongale si quiere, retomado  5:55:55:55
        const intersected = this.raycaster.intersectObjects(scene.children, true)[0];
        if(intersected){
            // console.log(intersected);
            this.mesh.position.y = intersected.point.y + this.distanceToGround
            //Jah bless, ahora la posición de mi y es que de la distancia actual que esté mi cubo sumale la distancia del suelo en eeste caso 0.5
        }   //Jah bless, ahora si es posicion del cubo 0 - distancia interseccion 0 = -0-0.5 que es distancia del suelo -0(-0.5)= +0.5, 

        //Jah bless, tirar un rayo y ver si le pega a los hijos que estan anidados si no quiere que pegue a los hijos ponga false, quiere true
        //Jah bless, solo para un objeto es object, si quieres muchos el objects recibe array objects y object recibe object3d
        //Jah bless, esto aun no es variable a la posición modificada del cubo supongo el update
    }
    stop(){
        loopMachine.removeCallback(this.tick.bind(this))

    }
}

const rayLander = new RayLander()
export default rayLander


//Jah bless, explicación de la lógica del raylander

/*Jah bless
Jah bless, ¿Por qué la nueva línea es DIFERENTE y ARREGLA la falsa caída?

CÓDIGO ORIGINAL (rompe):


this.mesh.position.y -= intersected.distance - this.distanceToGround
intersected.distance = distancia del rayo (desde centro cubo → plano).
Si cubo perfecto: distance = 0.5 → 0.5 - 0.5 = 0 → sin cambio ✓.
Si cubo 0.1 arriba (distance=0.6): - (0.6-0.5) = -0.1 → baja 0.1 ✓.
Si cubo 0.1 abajo (distance=0.4): - (0.4-0.5) = +0.1 → SUBE 0.1 ❌.
Resultado: Fluctuación → oscila infinitamente (falsa caída).
NUEVA LÍNEA (funciona):


this.mesh.position.y = intersected.point.y + this.distanceToGround
intersected.point.y = Y EXACTA del plano (ej: terreno ondulado devuelve 2.3).
+ 0.5 = centro cubo siempre preciso sobre plano (2.3 + 0.5 = 2.8).
Iguala directo, no depende de posición anterior → 0 oscilación.
Ejemplo numérico (terreno Y=1.2):

Estado cubo	distance	Original (Y final)	Nueva (Y final)
Perfecto (Y=1.7)	0.5	1.7 - 0 = 1.7 ✓	1.2 + 0.5 = 1.7 ✓
Arriba (Y=1.8)	0.6	1.8 - 0.1 = 1.7 ✓	1.7 ✓
Abajo (Y=1.6)	0.4	1.6 + 0.1 = 1.7 ✓? NO, aleja más!	1.7 ✓
Diferencia clave: Original es "ajuste incremental inestable". Nueva es "set directo estable". ¡Jah bless, aterriza fijo!


Start New Task
Make */