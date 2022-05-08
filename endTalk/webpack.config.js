const path = require('path');

module.exports={

    name: 'wordTalk', // 아무거나 해도 됨
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.jsx']
    },

    // jsx 한번에 묶어줌 ( 입력 )
    entry:{
        app:['./client'],
    },


    module:{
        rules: [{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options : {
              presets : ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },

    // 출력
    output:{
        // __dirname : 현재 폴더 경로
        path : path.join(__dirname),
        filename : 'app.js'
    }
};
