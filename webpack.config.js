const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        main: './src/pages/index.js'
    },
    output:  {
        path: path.resolve(__dirname, 'dist'),
        filename:'index.js',
        publicPath: ''
    },
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        compress: true,
        port: 8080,
        open: true
    },
    plugins: [
    new HtmlWepackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options:{importLoaders: 1}
                },
                'postcss-loader'
            ]
        },
        {
            test:/\.js$/,
            use:'babel-loader',
            exclude:'/node_modules/'
        },
        {
            test:/\.(svg|png|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
        }]
    },
    mode: 'development'
}