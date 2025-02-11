export default {
	name: '若川视野-小程序1-wx.config.js',
	projectPath: '../tdesign-miniprogram-starter-retail',
	packageJsonPath: '../tdesign-miniprogram-starter-retail',
	appid: 'wxdd3948dc1c7f95c2',
	privateKeyPath: './key/private.wxdd3948dc1c7f95c2.key',
	// # 多个小程序配置的路径
	configPath: './config',
	// # 版本描述可选，默认会读取版本号和git commit hash 和作者
	// # 如：v1.0.0 - 4c29ae8 - by@若川
	desc: '版本描述可选',
	// # 版本号可选，默认读取 package.json 中的 version
	// version: '1.0.0',
	// 参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html
	// 其他项目配置自定义配置，和上面配置合并
	projectOptions: {},
	// 新增上传的自定义配置
	uploadOptions: {
		// 程序中默认读取项目路径下的 project.config.json setting 配置
		setting: {
			es6: true,
			es7: true,
			minify: true,
			ignoreUploadUnusedFiles: true,
		},
		// uniapp taro 等压缩后的小程序一般采用以下不压缩配置
		// setting: { es6: false, es7: false, minify: false, ignoreUploadUnusedFiles: false }
	},
	// 新增下载的自定义配置
	previewOptions: {
		// 程序中默认读取项目路径下的 project.config.json setting 配置
		setting: {
			es6: true,
			es7: true,
			minify: true,
			ignoreUploadUnusedFiles: true,
		},
		// uniapp taro 等压缩后的小程序一般采用以下不压缩配置
		// setting: { es6: false, es7: false, minify: false, ignoreUploadUnusedFiles: false }
	},
};
