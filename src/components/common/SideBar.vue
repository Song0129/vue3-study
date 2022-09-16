<template>
	<div class="leftNav">
		<div class="logo">
			<a href="/" class="router-link-active">
				<h1 v-if="!collapsed">
					<svg
						t="1597989581210"
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="4448"
						width="30"
						height="30"
					>
						<path
							d="M218.112 64h583.296L1024 384.768 509.76 960 0 384.768 218.112 64z m286.08 504.192l-252.48-287.36-86.72 91.968 339.2 366.464 329.28-366.464-77.184-91.968-252.096 287.36z"
							fill="#fff"
							p-id="4449"
						></path>
					</svg>
					<span class="title" :title="title">{{ title }}</span>
				</h1>
				<h1 :class="{ small: collapsed }" v-if="collapsed">
					<svg
						t="1597989581210"
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="4448"
						width="30"
						height="30"
					>
						<path
							d="M218.112 64h583.296L1024 384.768 509.76 960 0 384.768 218.112 64z m286.08 504.192l-252.48-287.36-86.72 91.968 339.2 366.464 329.28-366.464-77.184-91.968-252.096 287.36z"
							fill="#fff"
							p-id="4449"
						></path>
					</svg>
				</h1>
			</a>
		</div>
		<a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark">
			<template v-for="menu in menuList">
				<a-menu-item v-if="!menu.children.length" :key="menu.id" @click="menuClick(menu)">
					<component :is="menu.icon"></component>
					<span>{{ menu.name }}</span>
				</a-menu-item>
				<a-sub-menu v-else :key="menu.id">
					<template v-slot:title>
						<component :is="menu.icon"></component>
						<span>{{ menu.name }}</span>
					</template>
					<a-menu-item v-for="inMenu in menu.children" :key="inMenu.id" @click="menuClick(inMenu)">
						<component :is="menu.icon"></component>
						<span>{{ inMenu.name }}</span>
					</a-menu-item>
				</a-sub-menu>
			</template>
		</a-menu>
	</div>
</template>

<script>
	import { ref, reactive } from "vue";
	import { useRoute, useRouter } from "vue-router";

	export default {
		name: "SideBar",
		components: {},
		props: {
			collapsed: {
				typeof: Boolean,
				default: true,
			},
		},
		setup(props, ctx) {
			const $router = useRouter();
			const $route = useRoute();

			let title = ref("Vue3-Study");
			let logo = require("../../assets/images/process-white.png");

			let menuList = reactive([
				{ id: 0, name: "Index", url: "/index", icon: "SmileOutlined", children: [] },
				{
					id: 1,
					name: "About",
					url: "/about",
					icon: "SmileOutlined",
					children: [{ id: 1, name: "About", url: "/about", icon: "SmileOutlined" }],
				},
				{
					id: 2,
					name: "Pixi",
					url: "/pixi",
					icon: "SmileOutlined",
					children: [
						{ id: 1, name: "Pixi", url: "/Pixi", icon: "SmileOutlined" },
						{ id: 2, name: "Plane", url: "/Plane", icon: "SmileOutlined" },
					],
				},
			]);

			// 显示隐藏菜单
			function toggleCollapsed() {
				ctx.emit("toggleCollapsed");
			}

			// 菜单点击
			function menuClick(item) {
				let route = { path: item.url };
				console.log(route);
				if ($route.path !== item.url) {
					$router.push(route).catch(() => {});
				}
			}

			return {
				vm: this,
				logo,
				title,
				menuList,
				toggleCollapsed,
				menuClick,
			};
		},
	};
</script>

<style scoped lang="less">
	.leftNav {
		height: 100%;

		.logo {
			height: 88px;
			display: flex;
			align-items: center;
			justify-content: center;

			h1 {
				color: #fff;
				font-size: 26px;
				display: flex;
				align-items: center;
				justify-content: center;

				.title {
					display: inline-block;
					width: 160px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.icon {
					margin-right: 10px;
				}
			}

			h1.small {
				color: #00ccff;

				.icon {
					margin-right: 0;
				}
			}
		}
	}
</style>
