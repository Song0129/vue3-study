import { Sprite, Texture } from "pixi.js";

export function createSprite(width = 100, height = 100, imgUrl = "../assets/logo.png", x = 0, y = 0) {
	let sprite = new Sprite();
	sprite.width = width;
	sprite.height = height;
	sprite.x = x;
	sprite.y = y;
	sprite.texture = Texture.from(imgUrl);
	return sprite;
}
