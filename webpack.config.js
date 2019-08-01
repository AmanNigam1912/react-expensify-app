//tell webapck what is the entry file inside src folder
//what is the output file

const path = require('path');

//define configuration details for webpack 
//node thing: export object to another file
//webapack will run it an will have access to whatever is written in object
module.exports = {
    mode: 'development',
    //entry file is the one that gets loaded and executed 
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        //set up array of rules. how to use loader. convert scss file to css
        rules: [{
            //what we want the rule to be
            loader: 'babel-loader',
            //what files do we want to run it on
            //check via regex whether the file ends with .js
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            //to make s optional and be used by normalize css 
            test: /\.s?css$/,
            //use provide to use array of loaders
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //source map makes debugging easier
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

//loader - customize behavior of webpack 
//babel-cli allows to run command from command line
//babel-core allows to run command from tools like webpack
//babel-loader is a webpack plugin. teach webpack how to run babel when webpack sees certain files