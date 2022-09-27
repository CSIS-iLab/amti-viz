var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [30.27, 125.05],
  zoom: 6,
  maxZoom: 9,
  scrollWheelZoom: true,
  minZoom: 1,
  zoomControl: true,
  scrollWheelZoom: true,
  layers: [basemap],
  attributionControl: false,
});

const client = new carto.Client({
  apiKey: "d04CdzdOaRbyl8fgmt7wHQ",
  username: "csis",
});

const clientChinaShelf = new carto.Client({
  apiKey: "VgCKCvaxBiG8EizMoaXPZQ",
  username: "csis",
});

const clientJapanShelf = new carto.Client({
  apiKey: "Csd-n3r-MxX5FVkeNqeWoQ",
  username: "csis",
});

const clientJointDevelopmentZone = new carto.Client({
  apiKey: "8Rsd_jhMzTGj7MriFytmQg",
  username: "csis",
});

const mapSource = new carto.source.SQL(
  `SELECT * FROM east_china_sea_oil_rig_locations_map ORDER BY cartodb_id DESC`
);

const chinaContinentalShelfSource = new carto.source.SQL(
  `SELECT * FROM china_continental_shelf_line`
);

const japanContinentalShelfSource = new carto.source.SQL(
  `SELECT * FROM japan_continental_shelf_line`
);

const joinDevelopmentZoneSource = new carto.source.SQL(
  `SELECT * FROM joint_development_zone_line`
);

const mapStyle = new carto.style.CartoCSS(`
  #layer {
  marker-width: 13;
  marker-fill: ramp([mobile], (#63a7ec, #e53e3a), (false, true), "=");
  marker-fill: ramp([rig_name], (#7d4391),
  ("Platform #13"), "=");
  marker-fill-opacity: 1;
  marker-file: ramp([mobile], (url('https://s3.amazonaws.com/com.cartodb.users-assets.production/production/csis/assets/20220927191107square_icon.svg')), (true), "=");
  marker-allow-overlap: true;
  marker-line-width: 1;
  marker-line-color: #3076B5;
  marker-line-color: ramp([rig_name], (#551C68),
  ("Platform #13"), "=");
  marker-line-color: ramp([new_or_old], (#99100D), ("New, Mobile"), "=");
  marker-line-opacity: 1;
  }
`);

const chinaContinentalShelfStyle = new carto.style.CartoCSS(`
  #layer {
    line-width: 1.5;
    line-color: #0078b2;
    line-opacity: 1;
  }
`);

const japanContinentalShelfStyle = new carto.style.CartoCSS(`
  #layer {
    line-width: 1.5;
    line-color: #caa16d;
    line-opacity: 1;
  }
`);

const joinDevelopmentZoneStyle = new carto.style.CartoCSS(`
  #layer {
    line-width: 6;
    line-color: #0c8d79;
    line-opacity: 1;
  }
`);

const mapLayer = new carto.layer.Layer(mapSource, mapStyle, {
  featureOverColumns: ["rig_name", "new_or_old", "mobile"],
});

const mapLayerChinaShelf = new carto.layer.Layer(
  chinaContinentalShelfSource,
  chinaContinentalShelfStyle,
  {
    featureOverColumns: ["name"],
  }
);

const mapLayerJapanShelf = new carto.layer.Layer(
  japanContinentalShelfSource,
  japanContinentalShelfStyle,
  {
    featureOverColumns: ["name"],
  }
);

const mapLayerJoinDevelopmentZone = new carto.layer.Layer(
  joinDevelopmentZoneSource,
  joinDevelopmentZoneStyle,
  {
    featureOverColumns: ["name"],
  }
);

client.addLayer(mapLayer);
clientChinaShelf.addLayer(mapLayerChinaShelf);
clientJapanShelf.addLayer(mapLayerJapanShelf);
clientJointDevelopmentZone.addLayer(mapLayerJoinDevelopmentZone);

client.getLeafletLayer().bringToFront().addTo(map);
clientChinaShelf.getLeafletLayer().bringToFront().addTo(map);
clientJapanShelf.getLeafletLayer().bringToFront().addTo(map);
clientJointDevelopmentZone.getLeafletLayer().bringToFront().addTo(map);

const popup = L.popup({ closeButton: true });

mapLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

function createPopup(event) {
  popup.setLatLng(event.latLng);
  if (!popup.isOpen()) {
    var data = event.data;
    var content = "";

    content += `
    <div class="popupHeaderStyle">
      ${data.rig_name}
    </div>
    <p>${data.new_or_old}</p>
    `;
    popup.setContent("" + content);
    popup.openOn(map);
  }
}

L.control
  .attribution({
    position: "bottomright",
  })
  .setPrefix(
    '<a href="https://amti.csis.org/">CSIS - AMTI</a>, <a href="https://leafletjs.com/">Leaflet</a>'
  )
  .addTo(map);
