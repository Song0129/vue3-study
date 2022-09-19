<template>
	<div class="GamePage">
		<div class="gameInfo">
			<div class="time">{{ gameTime }}s</div>
			<div class="score">{{ score }}</div>
		</div>
	</div>
</template>

<script>
	import { Container } from "pixi.js";
	import { onMounted, onUnmounted, ref } from "vue";
	import { createSprite } from "../../../utils";
	import { containerWidth, containerHeight } from "./config";
	import { createContainer } from "./utils";
	import GamePage from "../../../assets/images/game_page.png";
	import BatteryImg from "../../../assets/images/battery.png";
	import LaunchImg from "../../../assets/images/launch.png";

	export default {
		setup(props, { emit }) {
			const { app, box } = createContainer();
			app.stage.addChild(box);

			let GameBg = createSprite(containerWidth, containerHeight, GamePage);
			box.addChild(GameBg);

			let gameTime = ref(5);
			let GameTimer = setInterval(() => {
				gameTime.value--;
				if (gameTime.value === 0) {
					clearInterval(GameTimer);
					emit("change-page", "EndPage");
				}
			}, 1000);

			let score = ref(0);

			// 炮台 & 容器
			const { batteryContainer, battery } = createBattery();
			box.addChild(batteryContainer);
			batteryContainer.addChild(battery);

			// 发射按钮
			let launchBtn = createLaunch();
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

	function createBattery() {
		let batteryContainer = new Container();
		let battery = createSprite(320, 189, BatteryImg, containerWidth / 2 - 320 / 2, 575);
		return { batteryContainer, battery };
	}

	function createLaunch() {
		const launchBtn = createSprite(110, 49, LaunchImg, containerWidth / 2 - 110 / 2, 695);
		launchBtn.interactive = true;
		launchBtn.buttonMode = true;
		return launchBtn;
	}
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
