module.exports = {
	globDirectory: 'app/',
	globPatterns: [
		'**/*.{html,js,png,css}'
	],
	swDest: 'app/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};