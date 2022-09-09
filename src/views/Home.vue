<template>
	<a-layout>
		<a-layout-sider v-model:collapsed="collapsed" collapsible>
			<sideBar :collapsed="collapsed"></sideBar>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0; display: flex; align-items: center">
				<topBar>
					<template v-slot:menu-btn>
						<a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsedHandle">
							<menu-unfold-outlined v-if="collapsed" class="trigger" />
							<menu-fold-outlined v-else class="trigger" />
						</a-button>
					</template>
				</topBar>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', overflowY: 'scroll' }">
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
	import TopBar from "../components/common/TopBar.vue";
	import SideBar from "../components/common/SideBar.vue";
	import { ref } from "vue";

	export default {
		name: "Home",
		components: {
			TopBar,
			SideBar,
		},
		setup() {
			let hasSideBar = ref(true);
			let collapsed = ref(false); // 显示隐藏菜单

			function toggleCollapsedHandle() {
				collapsed.value = !collapsed.value;
				console.log(collapsed);
			}

			return {
				hasSideBar, //true有  false无 根据router中meta  sidebar属性
				collapsed,
				toggleCollapsedHandle,

				selectedKeys: ref(["1"]),
			};
		},

		beforeRouteEnter(to, from, next) {
			// 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
			next(vm => {
				vm.hasSideBar = to.meta.sideBar;
			});
		},
		watch: {
			$route(value) {
				// console.log(value)
				this.hasSideBar = value.meta.sideBar ? true : false;
			},
		},
	};
</script>

<style scoped lang="less">
	.ant-layout /deep/ .ant-layout-header {
		height: 88px;
	}

	.ant-layout {
		height: 100vh;
	}

	.logo {
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#components-layout-demo-custom-trigger .trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}

	#components-layout-demo-custom-trigger .trigger:hover {
		color: #1890ff;
	}

	#components-layout-demo-custom-trigger .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.2);
		margin: 16px;
	}
</style>
