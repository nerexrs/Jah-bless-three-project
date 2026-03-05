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