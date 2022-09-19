<template>
	<div class="EndPage"></div>
</template>

<script>
	import { Application, Container } from "pixi.js";
	import { onMounted } from "vue";
	import { createSprite } from "../../../utils";
	import { containerWidth, containerHeight } from "./config";
	import GamePage from "../../../assets/images/game_page.png";
	import RestartBtnImg from "../../../assets/images/restartBtn.png";
	export default {
		setup(props, { emit }) {
			let app = new Application({ width: containerWidth, height: containerHeight });

			let box = new Container();
			app.stage.addChild(box);

			let GameBg = createSprite(containerWidth, containerHeight, GamePage);

			console.log(GameBg);
			box.addChild(GameBg);

			let reStartBtn = createSprite(320, 97, RestartBtnImg, containerWidth / 2 - 320 / 2, "500");
			reStartBtn.interactive = true;
			reStartBtn.buttonMode = true;
			reStartBtn.on("pointertap", () => {
				console.log("click");
				emit("change-page", "StartPage");
			});
			box.addChild(reStartBtn);

			onMounted(() => {
				let container = document.querySelector(".EndPage");
				container.append(app.view);
			});
			return {};
		},
	};
</script>

<style lang="less" scoped></style>
