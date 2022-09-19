<template>
	<div class="game">
		<StartPage v-if="currentPage === 'StartPage'" @change-page="handleChangePage"></StartPage>
		<GamePage v-else-if="currentPage === 'GamePage'" @change-page="handleChangePage"></GamePage>
		<EndPage v-else-if="currentPage === 'EndPage'" @change-page="handleChangePage" :scoreNum="scoreNum"></EndPage>
	</div>
</template>

<script>
	import StartPage from "./StartPage";
	import GamePage from "./GamePage.vue";
	import EndPage from "./EndPage.vue";
	import { ref } from "vue";
	export default {
		components: { StartPage, GamePage, EndPage },
		setup() {
			const currentPage = ref("StartPage");
			let scoreNum;
			const handleChangePage = (pageName, score) => {
				currentPage.value = pageName;
				console.log(pageName, score);
				scoreNum = score;
			};
			console.log(scoreNum);
			return {
				currentPage,
				handleChangePage,
				scoreNum,
			};
		},
	};
</script>

<style lang="less" scoped>
	.game {
		width: 430px;
	}
</style>
