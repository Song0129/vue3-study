import { Application, Container } from "pixi.js";
export function createContainer(width, height) {
	const app = new Application({ width, height });
	const box = new Container();
	return { app, box };
}
