<template>
	<div class="pixi">
		<div class="title">本页面用来展示pixi的实例</div>
		<div class="container"></div>
	</div>
</template>

<script>
	import * as PIXI from "pixi.js";
	import { onMounted, onUnmounted } from "vue";
	export default {
		setup() {
			// 创建一个Pixi 应用
			let app = new PIXI.Application({ width: 460, height: 764 });

			const box = new PIXI.Container();
			app.stage.addChild(box);

			const rect = new PIXI.Graphics();
			rect.beginFill(0xff0000);
			rect.drawRect(0, 0, 50, 50);
			rect.endFill();
			rect.interactive = true;
			rect.on("pointertap", () => {
				console.log("click");
				app.ticker.remove(handleTicker);
				rect.x++;
				rect.y++;
			});

			// rect.x = 100;
			// rect.y = 100;

			let speed = 1;
			let fspeed;
			function handleTicker() {
				// console.log("handleTicker", rect.x);
				if (rect.x >= 100) {
					fspeed = -speed;
				}
				if (rect.x <= 0) {
					fspeed = speed;
				}
				// console.log(fspeed);
				rect.x += fspeed;
				rect.y += fspeed * 2;
			}

			app.ticker.add(handleTicker);
			app.stage.addChild(rect);

			const text = new PIXI.Text("hello pixijs", { fill: "red" });
			box.addChild(text);

			onMounted(() => {
				// 把 Pixi 应用中创建出来的 canvas 添加到页面上
				let container = document.querySelector(".container");
				container.append(app.view);
			});

			onUnmounted(() => {
				app.ticker.remove(handleTicker);
			});

			return {};
		},
	};
</script>

<style lang="less" scoped>
	.pixi {
		.title {
			// text-align: center;
			font-size: 16px;
		}
		.container {
			canvas {
				border: 1px solid #000;
			}
		}
	}
	canvas {
		border: 1px solid #000;
	}
</style>
