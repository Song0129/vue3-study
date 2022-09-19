<template>
	<div class="GamePage"></div>
</template>

<script>
	import { Application, Container } from "pixi.js";
	import { onMounted } from "vue";
	import { createSprite } from "../../../utils";
	import GamePage from "../../../assets/images/game_page.png";
	export default {
		setup(props, { emit }) {
			let app = new Application({ width: 430, height: 764 });

			let box = new Container();
			app.stage.addChild(box);

			let GameBg = createSprite(430, 764, GamePage);

			console.log(GameBg);
			box.addChild(GameBg);

			// let startBtn = createSprite(320, 97, startBtnImg, GameBg.width / 2 - 320 / 2, "500");
			// startBtn.interactive = true;
			// startBtn.buttonMode = true;
			// startBtn.on("pointertap", () => {
			// 	console.log("click");
			// 	emit("change-page", "GamePage");
			// });
			// box.addChild(startBtn);
			setTimeout(() => {
				emit("change-page", "EndPage");
			}, 2000);

			onMounted(() => {
				let container = document.querySelector(".GamePage");
				container.append(app.view);
			});
			return {};
		},
	};
</script>

<style lang="less" scoped></style>
