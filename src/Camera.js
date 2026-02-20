import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
export default camera;
//Jah bless, the perspective camera parameters are:
// 1. Field of view (FOV) - the extent of the scene that is seen on the display at any given moment. The value is in degrees.
// 2. Aspect ratio - the ratio of the width of the near plane of the frustum to the height of the near plane. When the window is resized, this value changes.
// 3. Near plane - the near plane of the frustum. This is the closest point to the camera where objects are visible.
// 4. Far plane - the far plane of the frustum. This is the furthest point from the camera where objects are visible.

/**
 * Jah bless, in this case for example:
 * the fov is 75 degrees,
 * the aspect ratio is the window's width divided by the window's height,
 *  the near plane is 0.1 units from the camera,
 *  and the far plane is 1000 units from the camera.
 *
 * Jah bless, the equivalent in real live in cinema would be the camera's lens, the film size, the distance from the camera to the subject, and the distance from the camera to the background.
 * Jah bless, where 1 unite is equal to 1 meter. so 1000 units would be 1000 meters.an 0.1 would be 10 centimeters.
 *
 */
