import { Application, Container } from "pixi.js";
import { containerWidth, containerHeight } from "./config";
export function createContainer(width = containerWidth, height = containerHeight) {
	const app = new Application({ width, height });
	const box = new Container();
	return { app, box };
}
