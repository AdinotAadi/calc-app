module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,json,js,png,svg,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};