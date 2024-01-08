
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Applicazione Webpack',
        })
    ],
    module:{
        rules:[
            {
                test: /.css$/i,
                use: ['style-loader' , 'css-loader']
            },
            {
                test: /\.(jpe?g|png|webp)$/i,
                use: {
                    loader: 'img-optimize-loader',
                    options: {
                      compress: { mode: 'low' }
                    }
                  }
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname , 'dist'),
        open: true
    }
}
