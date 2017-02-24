const envFile = require('node-env-file');
const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'test';

try {
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {}

module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_KEY: JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
				STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
				MESSAGE_SENDER_ID: JSON.stringify(process.env.MESSAGE_SENDER_ID)
			}
		})
	],
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./app/api',
			'./app/components',
		],
		alias: {
			actions: 'app/actions/actions.jsx',
			app: 'app',
			applicationStyles: 'app/styles/app.scss',
			configureStore: 'app/store/configureStore.jsx',
			reducers: 'app/reducers/reducers.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loader: 'babel-loader' }
		],
		postLoaders: [
			{
				test: /\.jsx$/,
				exclude: /\.test.jsx$/,
				loader: 'istanbul-instrumenter'
			}
		]
	},
	devtool: 'inline-source-map'
};
