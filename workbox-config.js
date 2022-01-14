module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,json,md,js,png,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};