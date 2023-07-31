const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const cartoSourceMarkers = "edcasitesandinformation";

var map = L.map("map", {
  center: [0.1, 149.68],
  zoom: 3,
  maxZoom: 8,
  minZoom: 3,
  scrollWheelZoom: true,
  zoomControl: true,
  scrollWheelZoom: true,
  layers: [basemap],
  attributionControl: false,
});

const markersByCountry = {};
let omsOptions = {
  keepSpiderfied: false,
  nearbyDistance: 20,
  circleSpiralSwitchover: 3,
};

var oms = new OverlappingMarkerSpiderfier(map, omsOptions);

var transparentIcon = L.divIcon({
  className: "transparent-icon",
});
var myIcon = L.divIcon({
  className: "my-div-icon",
});

var bounds = new L.LatLngBounds();

let sql = new cartodb.SQL({ user: "csis" });
sql
  .execute("SELECT * FROM csis." + cartoSourceMarkers)
  .done(function (data) {
    const rows = data.rows;
    rows.forEach((row) => {
      let loc = new L.LatLng(row.lat, row.long);
      bounds.extend(loc);
      let marker = new L.Marker(loc, { icon: transparentIcon });
      marker.planned_facilities = row.planned_facilities;
      marker.site_name = row.site_name;
      marker.location = row.location;
      marker.recent_upgrades = row.recent_upgrades;
      map.addLayer(marker);
      oms.addMarker(marker);
    });
    map.fitBounds(bounds);

    var popup = new L.Popup({
      closeButton: true,
      offset: new L.Point(0.5, -24),
    });

    oms.addListener("click", function (marker) {
      var content = "<div>";
      console.log(marker);
      content += `
          <div class="popupHeaderStyle">
            ${marker.site_name}
          </div>
          <div class="popupEntryStyle">
            ${marker.location}
          </div>`
          if (marker.planned_facilities) {
            content += `<p class="popupEntryStyle">
              <b>Planned facilities: </b>
              ${marker.planned_facilities}</p>`
          }
          if (marker.recent_upgrades) {
            content += `<p class="popupEntryStyle">
            <b>Recent upgrades: </b>
            ${marker.recent_upgrades}</p>`
          }
          content += "</div>";
      popup.setContent(content);
      popup.setLatLng(marker.getLatLng());
      map.openPopup(popup);
    });

    oms.addListener("spiderfy", function (markers) {
      console.log(markers.length);
      for (var i = 0, len = markers.length; i < len; i++)
        markers[i].setIcon(myIcon);
      map.closePopup();
    });

    oms.addListener("unspiderfy", function (markers) {
      for (var i = 0, len = markers.length; i < len; i++)
        markers[i].setIcon(transparentIcon);
    });
    // from here https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/blob/gh-pages/demo.html
  })
  .error(function (errors) {
    // errors contains a list of errors
    console.log("errors:" + errors);
  });

const client = new carto.Client({
  apiKey: "JLBcPF354dCF9Kp7oUnytA",
  username: "csis",
});

const populatedPlacesSource = new carto.source.SQL(
  "SELECT * FROM edcasitesandinformation"
);

const populatedPlacesStyle = new carto.style.CartoCSS(`
  #layer {
    marker-width: 12;
    marker-fill: ramp([base_type], (#11a579, #3969ac,#ca6d92),
    ("Air Force", "Naval Force", "Armed Force"), "=");
    marker-fill-opacity: 1;
    marker-allow-overlap: true;
    marker-line-width: 0.5;
    marker-line-color: #fff;
    marker-line-opacity: 0.5;
  }
`);

const populatedPlacesLayer = new carto.layer.Layer(
  populatedPlacesSource,
  populatedPlacesStyle,
  {
    featureOverColumns: [
      "site_name",
      "location",
      "base_type",
      "date_of_acquisition",
      "planned_facilities",
      "recent_upgrades",
      "country",
    ],
  }
);

client.addLayer(populatedPlacesLayer);

client.getLeafletLayer().bringToFront().addTo(map);

L.control
  .attribution({
    position: "bottomright",
  })
  .setPrefix(
    'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, Leaflet contributors'
  )
  .addTo(map);
