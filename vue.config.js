const path = require('path')
module.exports = {
	lintOnSave: true,
	publicPath: './', // 基本路径
	outputDir: 'nft-car-dist', // 输出文件目录
	css: {
		requireModuleExtension: true,
		sourceMap: process.env.NODE_ENV == 'development' ? true : false,
	},
	devServer: {
		host: '0.0.0.0', // 允许外部ip访问
		port: 9517, // 端口
		https: false, // 启用https
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.resolve(__dirname, 'src'))
		return config
	},
}
