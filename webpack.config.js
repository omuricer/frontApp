const path = require('path');
module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    mode: 'development',
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例 
    entry: {
        // bundle: './src/index.tsx',
        bundle: './src/index.jsx',
    },
    devtool: 'inline-source-map',    // デバッグできるように
    output: {
        // モジュールバンドルを行った結果を出力する場所やファイル名の指定
        // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
        path: path.join(__dirname, 'public/js'),
        filename: 'app.[name].js'  // [name]はentryで記述した名前(この例ではbundle）が入る
    },
    // モジュールとして扱いたいファイルの拡張子を指定する
    // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions:['.js','.jsx','.ts','.tsx']
    },
    devServer: {
        open: true,//ブラウザを自動で開く
        contentBase: path.join(__dirname, 'public'),// HTML等コンテンツのルートディレクトリ
        publicPath: '/js/',
        watchContentBase: true,//コンテンツの変更監視をする
        port: 3000, // ポート番号
        //     historyApiFallback: true
    },
    // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
    module: {
        rules: [
            {                             // Linterを走らせる
                enforce: 'pre',           // ビルド前処理だよってこと
                loader: 'tslint-loader',  // tslint-loaderを使う
                test: /\.tsx?$/,          // tslint-loaderに渡すファイルの正規表現。xxx.tsとxxx.tsxの正規表現。
                exclude: [                // 渡さないファイル
                    /node_modules/
                ],
                options: {
                    emitErrors: true      // これ設定しとくとTSLintが出してくれたwarningをエラーとして扱ってくれる、要するに-Wall
                }
            },
            {
                // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test: /\.tsx?$/,          // tslint-loaderに渡すファイルの正規表現。xxx.tsとxxx.tsxの正規表現。
                loader:'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.dev.json'
                },
            },
            {
                test:[/\.jsx$/],
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', 
                        options: {url: false}
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    }
}