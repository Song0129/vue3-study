<template>
	<div class="GamePage">
		<div class="gameInfo">
			<div class="time">{{ gameTime }}s</div>
			<div class="score">{{ score }}</div>
		</div>
	</div>
</template>

<script>
	import { Application, Container } from "pixi.js";
	import { onMounted, onUnmounted, ref } from "vue";
	import { createSprite } from "../../../utils";
	import GamePage from "../../../assets/images/game_page.png";
	import BatteryImg from "../../../assets/images/battery.png";
	import LaunchImg from "../../../assets/images/launch.png";
	export default {
		setup(props, { emit }) {
			let app = new Application({ width: 430, height: 764 });

			let box = new Container();
			app.stage.addChild(box);

			let GameBg = createSprite(430, 764, GamePage);
			console.log(GameBg);
			box.addChild(GameBg);

			let gameTime = ref(5);
			let GameTimer = setInterval(() => {
				gameTime.value--;
				if (gameTime.value === 0) {
					clearInterval(GameTimer);
					// emit("change-page", "EndPage");
				}
			}, 1000);

			let score = ref(0);

			// 炮台容器
			let batteryContainer = new Container();
			box.addChild(batteryContainer);
			let battery = createSprite(320, 189, BatteryImg, GameBg.width / 2 - 320 / 2, 575);
			batteryContainer.addChild(battery);

			let launchBtn = createSprite(110, 49, LaunchImg, GameBg.width / 2 - 110 / 2, 695);
			launchBtn.interactive = true;
			launchBtn.buttonMode = true;
			launchBtn.on("pointertap", () => {
				console.log("launch");
				score.value++;
			});
			batteryContainer.addChild(launchBtn);

			onMounted(() => {
				let container = document.querySelector(".GamePage");
				container.append(app.view);
			});

			onUnmounted(() => {
				clearInterval(GameTimer);
			});

			return {
				gameTime,
				score,
			};
		},
	};
</script>

<style lang="less" scoped>
	.GamePage {
		position: relative;
	}
	.gameInfo {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		user-select: none;
	}
</style>
