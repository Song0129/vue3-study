<template>
	<div class="EndPage">
		<div class="score">{{ props.scoreNum }}</div>
	</div>
</template>

<script>
	import { Application, Container } from "pixi.js";
	import { onMounted } from "vue";
	import { createSprite } from "../../../utils";
	import { ContainerWidth, ContainerHeight } from "./config";
	import GamePage from "../../../assets/images/game_page.png";
	import RestartBtnImg from "../../../assets/images/restartBtn.png";
	export default {
		props: ["scoreNum"],
		setup(props, { emit }) {
			let app = new Application({ width: ContainerWidth, height: ContainerHeight });

			let box = new Container();
			app.stage.addChild(box);

			let GameBg = createSprite(ContainerWidth, ContainerHeight, GamePage);

			box.addChild(GameBg);

			let reStartBtn = createSprite(320, 97, RestartBtnImg, ContainerWidth / 2 - 320 / 2, "500");
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
			console.log(props.scoreNum);
			return {
				props,
			};
		},
	};
</script>

<style lang="less" scoped>
	.EndPage {
		position: relative;
		.score {
			position: absolute;
			top: 10px;
			left: 10px;
		}
	}
</style>
