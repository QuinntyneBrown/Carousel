const path = require("path");

module.exports = {
    mode:"development",
    entry: {
        carousel: './src/carousel/src/carousel.ts',
    },
    output: {
        path: path.resolve(__dirname, "wwwroot/js"),
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js",".ts",".less",".css"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            strictMath: true,
                            noIeCompat: true,
                        },
                    }
                ],
            }
        ]
    },
    plugins: [

    ]
};