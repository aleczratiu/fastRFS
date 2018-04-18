const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[md5:contenthash:hex:20].css",
    disable: process.env.NODE_ENV === "development",
});

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ['react', 'react-dom'],
    },
    output: {
        filename: '[name].[md5:contenthash:hex:20].bundle.js',
        chunkFilename: '[name].[md5:contenthash:hex:20].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              test: 'vendor',
              enforce: true
            },
          }
        },
        runtimeChunk: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ]
}