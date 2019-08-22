const path = require('path');

//extract text from bundle.js
//text will be that if it sees a file with css or scss extension
//dump it into a separate file
//with node we don't have access to import but to require('')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    //styles.css is the file name where all the css data will be dumped
    //const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        mode: 'development',
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                //tell webpack to extract stuff of css
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            //default is false
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        //whenever working with 3rd party webpack plugins
        //so must add them here in plugins array
        plugins: [
            //CSSExtract
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        //cheap-module-eval-source-map takes a lot a space
        //so for production we want to use a version that is slower 
        //slow is not a prob in production
        //but in dev it is a prob as we are adding a build 2-3 times a minute as we change our files
        //new prod source-map creates a huge external files but it will load when someone opens dev tools 
        //so regular user rarely opens dev tools so it won't affect the running of the program too much
        //source-map takes a lot more time to build,is an external file and is great for production
        //inline-source-map is useful for developement 
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            //this tells dev server to return index.html for all 404 errors
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};