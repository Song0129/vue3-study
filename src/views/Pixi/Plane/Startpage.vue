<template>
	<div class="startpage"></div>
</template>

<script>
	import { Application, Container } from "pixi.js";
	import { onMounted } from "vue";
	import { createSprite } from "../../../utils";
	import StartPage from "../../../assets/images/start_page.jpg";
	import startBtnImg from "../../../assets/images/startBtn.png";
	export default {
		setup(props, { emit }) {
			let app = new Application({ width: 430, height: 764 });

			let box = new Container();
			app.stage.addChild(box);

			let startBg = createSprite(430, 764, StartPage);

			console.log(startBg);
			box.addChild(startBg);

			let startBtn = createSprite(320, 97, startBtnImg, startBg.width / 2 - 320 / 2, "500");
			startBtn.interactive = true;
			startBtn.buttonMode = true;
			startBtn.on("pointertap", () => {
				console.log("click");
				emit("change-page", "GamePage");
			});
			box.addChild(startBtn);

			onMounted(() => {
				let container = document.querySelector(".startpage");
				container.append(app.view);
			});
			return {};
		},
	};
</script>

<style lang="less" scoped></style>
