"JAH BLESS";
"Jah bless, despues vuelve a ver el curso lo mmismo que con la biblia pero lealo, vealo, terminelo y ya depsues lo vuelve a ver 30 veces, pero hagalo la primera por contexto";
import camera from "./Camera.js";

class Resize {
	constructor() {
		this.renderer = null;
	}
	start(renderer) {
		this.renderer = renderer;
		window.addEventListener("resize", this.resize.bind(this));
	}
	stop() {
		window.removeEventListener("resize", this.resize.bind(this));
	}
	resize() {
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
}
const resize = new Resize();
export default resize;

