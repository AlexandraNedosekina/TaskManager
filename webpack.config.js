const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    	filename: "bundle.js",
    	path: path.resolve(__dirname, "public"),
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        use: [
          {
            loader:require.resolve('file-loader'),
            options: {name: 'static/media/[name].[hash:8].[ext]'}
          }
        ]
        ,
      },
      {
            test: /\.(css|scss)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {loader:require.resolve('url-loader'),options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },}
        ]

      },

    ],


  }
}
