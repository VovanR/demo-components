module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [
				require('stylelint'),
				require('postcss-reporter')({clearReportedMessages: true})
			]
		}),
		require('postcss-style-guide')({
			project: 'demo-components',
			dest: 'styleguide/index.html',
			showCode: true,
			silent: true
		})
	]
};
