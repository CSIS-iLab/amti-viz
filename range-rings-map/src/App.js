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

    map.on('load', function () {
      map.addSource('line', {
      'type': 'geojson',
      'data': kj500
      });

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
      // }


      map.on('click', 'line', function(e) {
        // let x = e.features[0].properties
        let x = e.features[0]
        // console.log(e.features[0])
        
        // if (x.properties.name !== 'Bomber Range') {
        //   return
        // }
        console.log(carrierSam)

        carrierSam.features = [] 
        Draw.add(x)

       map.getSource('line').setData(carrierSam)
      })


      //   map.on('click', hi) 

      //   function hi(e) {
      //     console.log(e)
      //     console.log(ringsData)
      //   }
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
