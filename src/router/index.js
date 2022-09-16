import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/login",
		name: "login",
		meta: {
			title: "登录",
		},
		component: () => import(/* webpackChunkName: "login" */ "../views/Login/Login"),
	},
	{
		path: "/",
		redirect: "/index",
		name: "Home",
		component: Home,
		meta: {
			title: "Home",
			requireAuth: false,
			sideBar: true,
		},
		children: [
			{
				path: "/index",
				name: "index",
				meta: {
					title: "Index",
					requireAuth: false,
					sideBar: true,
				},
				component: () => import(/* webpackChunkName: "index" */ "../views/Index/Index"),
			},
			{
				path: "/about",
				name: "About",
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "about" */ "../views/About/About.vue"),
				meta: {
					title: "About",
					requireAuth: false,
					sideBar: true,
				},
			},
			{
				path: "/pixi",
				name: "Pixi",
				meta: {
					title: "Pixi",
					requireAuth: false,
					sideBar: true,
				},
				component: () => import(/* webpackChunkName: "Pixi" */ "../views/Pixi/Pixi.vue"),
			},
			{
				path: "/plane",
				name: "Plane",
				meta: {
					title: "Plane",
					requireAuth: false,
					sideBar: true,
				},
				component: () => import(/* webpackChunkName: "index" */ "../views/Pixi/Plane/Index.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
