import React from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
// import ringsData from "./rings.geojson";
import ringsData from "./rings.json";
import MapboxDraw from '@mapbox/mapbox-gl-draw';

// mapboxgl.accessToken =
//   "pk.eyJ1Ijoic21hcmFnaGkiLCJhIjoiY2thcXdnbW54MDU2bzJxcG40Z3djMHdlcCJ9.FewrNk0Daa9_fUyyGwYNTg";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng:  110.54,
      lat: 22.89,
      zoom: 3.77,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/ilabmedia/ckjvjizi20pg019lxvzwcg20h",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    var Draw = new MapboxDraw();
    map.addControl(Draw, 'top-left');

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

  map.on('load', function () {
    // Add a single point to the map
    map.addSource('line', {
    'type': 'geojson',
    'data': ringsData
    });



    // let r = ringsData.filter(d => d.features[0].properties.capabilities === 'Radar')
    
 

    var coordinates = document.getElementById('coordinates');
    // console.log(coordinates)

    var canvas = map.getCanvasContainer();


    var geojson = {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'MultiLineString',
          'coordinates': [ringsData.features[0].geometry.coordinates, ringsData.features[0].geometry.coordinates]
          }
        }
      ]
      // ringsData
    };

    function onMove(e) {
      var coords = e.lngLat;
       
      // Set a UI indicator for dragging.
      canvas.style.cursor = 'grabbing';
       
      // Update the Point feature in `geojson` coordinates
      // and call setData to the source layer `point` on it.
      geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
      map.getSource('line').setData(geojson);
      }
       
      function onUp(e) {
      var coords = e.lngLat;
       
      // Print the coordinates of where the point had
      // finished being dragged to on the map.
      coordinates.style.display = 'block';
      coordinates.innerHTML =
      'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
      canvas.style.cursor = '';
       
      // Unbind mouse/touch events
      map.off('mousemove', onMove);
      map.off('touchmove', onMove);
      }

      map.addLayer({
      'id': 'line',
      'type': 'line',
      'source': 'line',
      'paint': {
        // 'circle-radius': 10,
        'line-width': 5,
        'line-color': 'purple'
        }
      });

  map.on('mouseenter', 'line', function () {
    map.setPaintProperty('line', 'line-color', '#3bb2d0');
    canvas.style.cursor = 'move';
  });
     
  map.on('mouseleave', 'line', function () {
    map.setPaintProperty('line', 'line-color', '#3887be');
    canvas.style.cursor = '';
  });
     
  map.on('mousedown', 'line', function (e) {
    // Prevent the default map drag behavior.
    e.preventDefault();
     
    canvas.style.cursor = 'grab';
     
  map.on('mousemove', onMove);
    map.once('mouseup', onUp);
  });
     
  map.on('touchstart', 'line', function (e) {
    if (e.lines.length !== 1) return;
     
    // Prevent the default map drag behavior.
    e.preventDefault();
     
  map.on('touchmove', onMove);
    map.once('touchend', onUp);
  });
}
  )}
    

  render() {
    return (
      <div className="App">
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default App;
