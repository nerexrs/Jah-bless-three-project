import * as THREE from 'three';

const texture = {}

texture.ground = new Promise((res, rej) => {
  const loader = new THREE.TextureLoader();

    loader.load(
        'img/image.png',
        function (texture) {
            res(texture)
        },
        function (err) {
            rej(err)
        }
    )
})

export default texture


//Jah bless, apagué reloj 6 horas, 37 minutos, 17 segundos, 86 milisegundos +2 segundos y 19, not sure pero igual y 39 bajo por agua ya le digo cuando vuelvo por miutos acambio mas accion y 43 este video:
// Jah bless: https://www.youtube.com/watch?v=JgMF9ECmhX8