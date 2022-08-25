const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test:/.(css|scss)$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ],
    mode: 'development',
    devServer:{
        historyApiFallback:true,
        static:{            
            directory: path.join(__dirname,'public'),
        },
            port:3005,
            compress:true            
    }

}