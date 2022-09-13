<template>
	<div class="pixi">
		<div class="title">本页面用来展示pixi的实例</div>
		<div class="container"></div>
	</div>
</template>

<script>
	import * as PIXI from "pixi.js";
	import { onMounted } from "vue";
	export default {
		setup() {
			onMounted(() => {
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
					// app.ticker.remove(handleTicker);
					rect.x++;
					rect.y++;
				});

				rect.x = 100;
				rect.y = 100;

				function handleTicker() {
					console.log("add");
					box.x++;
				}

				app.stage.addChild(rect);
				console.log(rect);

				const text = new PIXI.Text("hello pixijs", { fill: "red" });
				box.addChild(text);

				// 把 Pixi 应用中创建出来的 canvas 添加到页面上
				let container = document.querySelector(".container");
				container.append(app.view);
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
