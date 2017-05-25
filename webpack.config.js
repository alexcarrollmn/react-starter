const path = require('path'); //set resolved path
const webpack = require('webpack'); //used in plugins by getting some new instance
const HtmlWebpackPlugin = require('html-webpack-plugin'); //render a static html file through a template
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //get rid of internal style in <html/>, then generate css file for prod

//detect if current env is dev/prod
const DEVELOPMENT = process.env.NODE_ENV === "dev";
const PRODUCTION = process.env.NODE_ENV === "prod";

/**
 * ============
 *   [entry]
 * ============
 */
 const entry = PRODUCTION
    //PRODUCTION
    ? {
        'app': './app/index.js'
    } //DEVELOPMENT
    : [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './app/index.js'
    ]

/**
 * ============
 *  [plugins]
 * ============
 */
let plugins = PRODUCTION
    //PRODUCTION
    ? [new webpack.optimize.UglifyJsPlugin(), new ExtractTextPlugin('style-[contenthash:10].css')]
    //DEVELOPMENT
    : [
        new ExtractTextPlugin('[name].css'), new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()
    ];
    //SHARED
    plugins.push(new HtmlWebpackPlugin({template: './app/index.html'}));

/**
 * ============
 *  [plugins]
 * ============
 */
const output = {
    path: path.resolve(__dirname, './site'),
    filename: '[name].bundle.js',
    publicPath: '/'
}

/**
 * ============
 * [css-loader]
 * ============
 */
const cssIdentifier = PRODUCTION
    ? '[hash:base64:7]'
    : '[path][name]---[local]';
const cssLoader = PRODUCTION
    //PRODUCTION
    ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            'css-loader?module?minimize&localIdentName=' + cssIdentifier,
            {
                loader: 'sass-loader',
                options: {
                    // sourceMap: true
                    includePaths : ['./node_modules']
                }
            }
        ]
    })
    //DEVELOPMENT
    : [
        {
            loader: 'style-loader',
            options: {
                insertAt: 'top'
            }
        },
        {
            loader: 'css-loader',
            options: {
                // sourceMap: true,
                importLoader: 2,
                // module:true
            }
        },
        {
            loader:'postcss-loader',
            options: {
                plugins: function () {
                    return [
                        require('autoprefixer')
                    ];
                }
            }
        },
        {
            loader: 'sass-loader',
            options: {
                // sourceMap: true
            }
        }
    ]

/**
 * ============
 *   [rules]
 * ============
 */
const loaders = [
    {
        test: /\.font\.js$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader?module?minimize&localIdentName=' + cssIdentifier,
                'webfonts-loader'
            ]
        })
    },
    //NOTE: uncomment when needed
    {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    },
    {
        test: /\.(js|jsx)$/,
        exclude: [
            path.resolve(__dirname, '/node_modules/'),
        ],
        use: "babel-loader"
    }, {
        test: /\.(scss|css)$/,
        // exclude: /node_modules/,
        use: cssLoader
    }, {
        test: /\.md$/,
        // exclude: /node_modules/,
        use: [
            {
                loader: "html-loader"
            }
        ]
    }
]

/**
 * ============
 *   [alias]
 * ============
 */
const alias = {
    Root: path.resolve(__dirname),
	Component: path.resolve(__dirname, './src/components'),
	Essentials: path.resolve(__dirname, './src/essentials'),
	Globals: path.resolve(__dirname, './src/globals'),
	Utils: path.resolve(__dirname, './src/components/utils'),
	App: path.resolve(__dirname, './app')
};

/**
* ============*
*   [config]  *
* ============*
**/
const config = {
    bail: true,
    devtool: 'eval',
    entry: entry,
    output: output,
    resolve: {
		alias: alias
	},
    module: {
        loaders: loaders
    },
    plugins: plugins
};

module.exports = config;