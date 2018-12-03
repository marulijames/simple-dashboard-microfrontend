const path = require('path');

module.exports = {
    entry: {
        singleSpaEntry: './src/singleSpaEntry.js'
    },

    output: {
        publicPath: '/service-c',
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'service-c'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/service-c',
                        }
                    }
                ]
            }
        ],
    },

    mode: 'development',

    devtool: 'eval-source-map',
    
    devServer: {
        contentBase: './release',
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    }
};
