const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const Htmlwebpackplugin = require('html-webpack-plugin')
const UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: 'dist/'
        //publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时，是从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片大于limit时，需要使用file-loader模块进行加载
                            limit: 8196,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),

        new webpack.BannerPlugin('最终版权归kimoro所有'),
        new Htmlwebpackplugin({
            template: '箭头函数的基本使用.html'
        }),
        new UglifyjswebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }
}