const ringsData = require('./rings.geojson');
var MapboxDraw = require('@mapbox/mapbox-gl-draw');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}