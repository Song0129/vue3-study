<template>
	<div class="StartPage"></div>
</template>

<script>
	import { onMounted } from "vue";
	import { createSprite } from "../../../utils";
	import { containerWidth, containerHeight } from "./config";
	import { createContainer } from "./utils";
	import StartPage from "../../../assets/images/start_page.jpg";
	import startBtnImg from "../../../assets/images/startBtn.png";
	export default {
		setup(props, { emit }) {
			const { app, box } = createContainer();
			app.stage.addChild(box);

			let startBg = createSprite(containerWidth, containerHeight, StartPage);

			console.log(startBg);
			box.addChild(startBg);

			let startBtn = createStartBtn();
			startBtn.on("pointertap", () => {
				console.log("click");
				emit("change-page", "GamePage");
			});
			box.addChild(startBtn);

			onMounted(() => {
				let container = document.querySelector(".StartPage");
				container.append(app.view);
			});
			return {};
		},
	};

	function createStartBtn() {
		const startBtn = createSprite(320, 97, startBtnImg, containerWidth / 2 - 320 / 2, "500");
		startBtn.interactive = true;
		startBtn.buttonMode = true;
		return startBtn;
	}
</script>

<style lang="less" scoped></style>
