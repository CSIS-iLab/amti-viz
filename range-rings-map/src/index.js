import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("map")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const NewSimpleSelect = _.extend(MapboxDraw.modes.simple_select, {
    //   // dragMove() {}
    //   ringsData
    // });

    // const NewDirectSelect = _.extend(MapboxDraw.modes.direct_select, {
    //   dragFeature() {}
    // });
    
    // const draw = new MapboxDraw({
    //   modes: {
    //     ...MapboxDraw.modes,
    //     simple_select: NewSimpleSelect,
    //     direct_select: NewDirectSelect
    //   }
    // });




    // map.on("move", () => {
    //   this.setState({
    //     lng: map.getCenter().lng.toFixed(4),
    //     lat: map.getCenter().lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2),
    //   });
    // });





    // let r = ringsData.filter(d => d.features[0].properties.capabilities === 'Radar')
    
 

    // var coordinates = document.getElementById('coordinates');
    // // console.log(coordinates)

    // var canvas = map.getCanvasContainer();


    // var geojson = {
    //   'type': 'FeatureCollection',
    //   'features': [{
    //     'type': 'Feature',
    //     'geometry': {
    //       'type': 'MultiLineString',
    //       'coordinates': [ringsData.features[0].geometry.coordinates, ringsData.features[0].geometry.coordinates]
    //       }
    //     }
    //   ]
    // };

    // function onMove(e) {
    //   var coords = e.lngLat;
       
    //   // Set a UI indicator for dragging.
    //   canvas.style.cursor = 'grabbing';
       
    //   // Update the Point feature in `geojson` coordinates
    //   // and call setData to the source layer `point` on it.
    //   geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
    //   map.getSource('line').setData(geojson);
    //   }
       
    //   function onUp(e) {
    //   var coords = e.lngLat;
       
    //   // Print the coordinates of where the point had
    //   // finished being dragged to on the map.
    //   coordinates.style.display = 'block';
    //   coordinates.innerHTML =
    //   'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
    //   canvas.style.cursor = '';
       
    //   // Unbind mouse/touch events
    //   map.off('mousemove', onMove);
    //   map.off('touchmove', onMove);
    //   }

    

  // map.on('mouseenter', 'line', function () {
  //   map.setPaintProperty('line', 'line-color', '#3bb2d0');
  //   canvas.style.cursor = 'move';
  // });
     
  // map.on('mouseleave', 'line', function () {
  //   map.setPaintProperty('line', 'line-color', '#3887be');
  //   canvas.style.cursor = '';
  // });
     
  // map.on('mousedown', 'line', function (e) {
  //   // Prevent the default map drag behavior.
  //   e.preventDefault();
     
  //   canvas.style.cursor = 'grab';
     
  // map.on('mousemove', onMove);
  //   map.once('mouseup', onUp);
  // });
     
  // map.on('touchstart', 'line', function (e) {
  //   if (e.lines.length !== 1) return;
     
  //   // Prevent the default map drag behavior.
  //   e.preventDefault();
     
  // map.on('touchmove', onMove);
  //   map.once('touchend', onUp);
  // });
