// lazy load ant-design-vue
// if your use import on Demand, Use this code

module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins: [
		[
			"import",
			{
				libraryName: "ant-design-vue",
				libraryDirectory: "es",
				style: true, // `style: true` 会加载 less 文件
			},
		],
	],
};
