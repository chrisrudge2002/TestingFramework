const webpackTestConfig = require('./webpack.test.config.js');

module.exports = function (config) {
	config.set({
		browsers: [ 'Chrome', 'Firefox', 'IE' ],
		client: { mocha: { timeout: '5000'} },
		coverageReporter: { type: 'html', dir: 'coverage/' },
		files: [ 'tests.webpack.js' ],
		frameworks: [ 'mocha' ],
		preprocessors: { 'tests.webpack.js': [ 'webpack', 'sourcemap' ] },
		reporters: [ 'mocha', 'coverage' ],
		singleRun: true,
		webpack: webpackTestConfig,
		webpackServer: { noInfo: true },
	});
};
