import React from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
// import ringsData from "./rings.geojson";
// import ringsData from "./rings.json";
import carrierSam from "./Carrier SAM radius (movable).json"
import kj500 from "./KJ-500 max.json"
import MapboxDraw from '@mapbox/mapbox-gl-draw';
// import _ from 'lodash';

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

    // map.on('load', function () {
    //   map.addSource('line', {
    //   'type': 'geojson',
    //   'data': kj500
    //   });

    //   map.addLayer({
    //     'id': 'line',
    //     'type': 'line',
    //     'source': 'line',
    //     'paint': {
    //       'line-width': 5,
    //       'line-color': 'purple'
    //     }
    //   });

    map.once('load', function loaded() {
 
      
          carrierSam.forEach(function eachFilter(feature, index) {
          
              var id = 'feature-' + index;
              map.addSource(id, {type: 'geojson', data: feature});
              map.addLayer({
                  id: id + '-line',
                  type: 'line',
                  source: id,
                  paint: {'line-color': 'blue', 'line-width': 4}
              });
     
      });


 

      map.on('click', 'feature-1-line', function(e) {
        let x = e.features[0]
        console.log(x)
       

        carrierSam.features = [] 
        Draw.add(x)

        map.getSource('feature-1').setData(carrierSam[0])
      })
    }
    
  )}
    

  render() {
    return (
      <div className="App">
        <div className="sidebarStyle">
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default App;
