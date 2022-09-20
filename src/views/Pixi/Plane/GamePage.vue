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
	import { ContainerWidth, ContainerHeight, GameTime, BulletSpeed } from "./config";
	import { createContainer, getRandom } from "./utils";
	import GamePage from "../../../assets/images/game_page.png";
	import BatteryImg from "../../../assets/images/battery.png";
	import LaunchImg from "../../../assets/images/launch.png";
	import BulletImg from "../../../assets/images/bullet.png";

	export default {
		setup(props, { emit }) {
			const { app, box } = createContainer();
			app.stage.sortableChildren = true;
			app.stage.addChild(box);

			let GameBg = createSprite(ContainerWidth, ContainerHeight, GamePage);
			// GameBg.zIndex = 100;
			box.addChild(GameBg);

			let gameTime = ref(GameTime);
			let GameTimer = setInterval(() => {
				gameTime.value--;
				if (gameTime.value === 0) {
					clearInterval(GameTimer);
					emit("change-page", "EndPage", score);
				}
			}, 1000);

			let score = ref(0);

			// 炮台 & 容器
			const { batteryContainer, battery } = createBattery();
			batteryContainer.addChild(battery);

			// box.addChild(battery);

			// 发射按钮
			let launchBtn = createLaunch();
			let bulletContainer = new Container();
			launchBtn.on("pointertap", () => {
				console.log("launch");
				score.value++;

				const BulletX = [ContainerWidth / 2 - 26 / 2 - 22, ContainerWidth / 2 - 26 / 2 + 18];
				const bullet = createBullet(BulletX[getRandom(1, 0)]);

				app.ticker.add(BulletTicker.bind(bullet));
				bulletContainer.addChild(bullet);
				console.log(bullet);
			});
			bulletContainer.zIndex = 1;
			box.addChild(bulletContainer);

			function BulletTicker() {
				// console.log(this);
				this.y -= BulletSpeed;
				if (this.y < 30) {
					box.removeChild(this);
					app.ticker.remove(BulletTicker);
				}
			}

			batteryContainer.addChild(launchBtn);
			box.addChild(batteryContainer);
			// box.addChild(launchBtn);

			console.log(batteryContainer, bulletContainer);

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
		const batteryContainer = new Container();
		batteryContainer.zIndex = 5;
		const battery = createSprite(320, 189, BatteryImg, ContainerWidth / 2 - 320 / 2, 575);
		return { batteryContainer, battery };
	}

	function createLaunch() {
		const launchBtn = createSprite(110, 49, LaunchImg, ContainerWidth / 2 - 110 / 2, 695);
		launchBtn.interactive = true;
		launchBtn.buttonMode = true;
		return launchBtn;
	}

	function createBullet(x = ContainerWidth / 2 - 26 / 2 + 18, y = 574) {
		const bullet = createSprite(26, 68, BulletImg);
		bullet.x = x;
		bullet.y = y;
		return bullet;
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
