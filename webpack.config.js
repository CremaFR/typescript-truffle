const webpack              = require( 'webpack' ),
      autoprefixer         = require( 'autoprefixer' ),
      htmlWebpack          = require( 'html-webpack-plugin' ),
      copyWebpack          = require( 'copy-webpack-plugin' ),
      ExtractTextPlugin    = require( "extract-text-webpack-plugin" ),
      BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin,
      path                 = require( 'path' ),
      pkg                  = require( './package.json' );

const target = process.env.npm_lifecycle_event ? process.env.npm_lifecycle_event : 'start';

const Paths = {
    root            : path.join( __dirname ),
    app             : path.join( __dirname, 'src' ),
    build           : path.join( __dirname, 'build' ),
    node_modules_dir: path.resolve( __dirname, 'node_modules' ),
    test            : path.join( __dirname, 'test' )
};

const CompileTime = new Date().getTime();
const DevCSP = "script-src * 'unsafe-inline' 'unsafe-eval'; style-src https://fonts.googleapis.com/css 'self' 'unsafe-inline'";
const BuildCSP = "script-src 'self'; style-src https://fonts.googleapis.com/css 'self' 'unsafe-inline'; connect-src 'self'";

const CopyStatics = [
    { from: path.resolve( Paths.app, 'images' ), to: 'images' },
    //{ from: path.resolve( Paths.node_modules_dir, 'collaboration-js/src/images' ), to: 'images' },
];

/*
 "babel-polyfill": "6.23.0",
 "classnames": "2.2.5",
 "intl": "1.2.5",
 "jsdom": "^11.0.0",
 "lodash": "4.17.4",
 "moment": "2.18.1",
 "normalize.css": "^7.0.0",
 "react": "15.5.4",
 "react-dom": "15.5.4",
 "react-intl": "2.3.0",
 "react-redux": "5.0.5",
 "react-router": "4.1.1",
 "react-router-dom": "4.1.1",
 "react-router-redux": "5.0.0-alpha.6",
 "redux": "3.6.0",
 "redux-form": "6.7.0",
 "redux-observable": "0.14.1",
 "reflect-metadata": "0.1.10",
 "rxjs": "5.4.0",
 "semantic-ui-css": "2.2.10",
 "semantic-ui-react": "0.68.4"
 */
const vendors = [
    'rxjs', 'react', 'react-dom', 'react-intl', 'react-redux', 'react-router', 'react-router-dom', 'react-router-redux', 'redux',
    'redux-form', 'redux-observable', 'reflect-metadata', 'semantic-ui-react'
];

const plugins = [];
let dist = path.resolve( Paths.build );
let csp = BuildCSP;
if( target === 'start' ) {
    dist = '/dist';
    csp = DevCSP;
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin( {
            filename: '[file].map',
            exclude : [
                'vendor*.js'
            ]
        } )/*,
         new webpack.optimize.CommonsChunkPlugin( { names: [ 'vendor', 'manifest' ] } )*/
    );
}

module.exports = {
    entry    : {
        app   : Paths.app,
        vendor: vendors
    },
    output   : {
        path      : dist,
        filename  : '[name]-[hash].js',
        publicPath: '/'
    },
    devServer: {
        host              : 'localhost',
        disableHostCheck  : true,
        port              : pkg.config.devPort,
        historyApiFallback: true,
        hot               : true,
        inline            : true,
        // Display only errors to reduce the amount of output.
        stats             : 'errors-only',
        proxy             : {
            '/api': {
                target     : 'http://localhost:9000',
                pathRewrite: { '^/api': '' }
            },
        },
    },
    resolve  : {
        extensions : [ '.ts', '.tsx', '.js', '.css', '.scss' ],
        modules    : [ Paths.app, 'node_modules' ],
        unsafeCache: true
    },
    cache    : true,
    module   : {
        rules: [
            {
                test   : /\.tsx?$/,
                use    : { loader: 'ts-loader', options: { transpileOnly: true } },
                exclude: [ 'node_modules' ]
            },
            {
                test: /\.s?css$/,
                use : ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use     : [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'resolve-url-loader', options: { sourceMap: true } },
                        { loader: 'postcss-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true, includePaths: [ Paths.node_modules_dir, Paths.app ] } }

                    ],

                } )
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                use : 'file-loader'
            },
            {
                test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9-\.=]+)?$/,
                use : 'file-loader'
            }
        ]
    },
    plugins  : [
        /*new BundleAnalyzerPlugin( {
         analyzerMode: 'static'
         } ),*/
        new webpack.optimize.CommonsChunkPlugin( 'vendor' ),
        // Generate a 'manifest' chunk to be inlined in the HTML template
        new webpack.optimize.CommonsChunkPlugin( 'manifest' ),

        new htmlWebpack( {
            appMountId: 'app',
            mobile    : true,
            csp       : csp,
            template  : path.resolve( Paths.app, 'index.html' ),
            title     : pkg.name,
            buildTime : CompileTime,
        } ),
        new ExtractTextPlugin( { filename: 'styles-[hash].css', allChunks: true } ),
        new copyWebpack( CopyStatics ),

    ].concat( plugins ),
};
