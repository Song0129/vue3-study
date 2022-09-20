import { Application, Container } from "pixi.js";
import { ContainerWidth, ContainerHeight } from "./config";
// 生成舞台和容器
export function createContainer(width = ContainerWidth, height = ContainerHeight) {
	const app = new Application({ width, height });
	const box = new Container();
	return { app, box };
}

// 获取随机数 包含最大、最小值
export function getRandom(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
