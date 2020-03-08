const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [  '.ts', '.js' ],
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib'),
    },
};
