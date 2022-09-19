<template>
	<div class="game">
		<StartPage v-if="currentPage === 'StartPage'" @change-page="handleChangePage"></StartPage>
		<GamePage v-else-if="currentPage === 'GamePage'" @change-page="handleChangePage"></GamePage>
		<EndPage v-else-if="currentPage === 'EndPage'" @change-page="handleChangePage"></EndPage>
	</div>
</template>

<script>
	import StartPage from "./Startpage.vue";
	import GamePage from "./GamePage.vue";
	import EndPage from "./EndPage.vue";
	import { ref } from "vue";
	export default {
		components: { StartPage, GamePage, EndPage },
		setup() {
			const currentPage = ref("StartPage");
			const handleChangePage = pageName => {
				currentPage.value = pageName;
			};
			return {
				currentPage,
				handleChangePage,
			};
		},
	};
</script>

<style lang="less" scoped>
	.game {
		width: 430px;
	}
</style>
