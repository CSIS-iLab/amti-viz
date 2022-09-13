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
  apiKey: "y4YHHEDrimkbpx2uTRnLmw",
  username: "csis",
});

const clientChinaShelf = new carto.Client({
  apiKey: "wKvWlecNlfJkIWRlonmmGw",
  username: "csis",
});

const clientJapanShelf = new carto.Client({
  apiKey: "cGP_z0za2UplA4Zhh3NYnQ",
  username: "csis",
});

const clientJointDevelopmentZone = new carto.Client({
  apiKey: "KXP9_nSJPT7GU5MCrL38Aw",
  username: "csis",
});

const mapSource = new carto.source.SQL(
  `SELECT * FROM ecs_oil_rig_locations ORDER BY cartodb_id DESC`
);

const chinaContinentalShelfSource = new carto.source.SQL(
  `SELECT * FROM china_continental_shelf`
);

const japanContinentalShelfSource = new carto.source.SQL(
  `SELECT * FROM japan_continental_shelf`
);

const joinDevelopmentZoneSource = new carto.source.SQL(
  `SELECT * FROM table_161013_joint_development_zonecsv`
);

const mapStyle = new carto.style.CartoCSS(`
  #layer {
  marker-width: 20;
  marker-fill: ramp([rig_name], (#63a7ec, #63a7ec, #63a7ec, #63a7ec, #7d4391, #63a7ec, #63a7ec, #63a7ec, #63a7ec, #63a7ec, #63a7ec), ("Oriental Discovery", "Platform #1 ", "Platform #11", "Platform #12", "Platform #13", "Platform #2", "Platform #3", "Platform #4", "Platform #5", "Platform #6"), "=");
  marker-fill-opacity: 1;
  marker-allow-overlap: true;
  marker-line-width: 1;
  marker-line-color: #FFFFFF;
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
  featureOverColumns: ["rig_name", "new_or_old"],
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

const sidePanel = L.popup({ closeButton: true });

mapLayer.on(carto.layer.events.FEATURE_CLICKED, createSidePanel);

function createSidePanel(event) {
  sidePanel.setLatLng(event.latLng);

  const panel = document.querySelector('.panel');
  const panelContent = document.querySelector('.panel-content');
  panel.classList.add('open');

  if (!sidePanel.isOpen()) {
    var data = event.data;
    var content = '';

    content += `
    <h2 class="sidePanelHeaderStyle">
      ${data.rig_name}
    </h2>
    <p class="side-panel-value">Description: <span>${data.new_or_old}</span> </p>
    `;
    // if (data.source) {
    //   content += `<p class="side-panel-value"><span class="source">${data.source}</span> </p>`
    // }
    // content +=
    // `
    // <p class="side-panel-value">Focus Areas: <span>${data.focus_areas}</span> </p>
    // <p class="side-panel-value">Major Recipients: <span>${data.major_recipients}</span> </p>
    // <p class="side-panel-link">For more details, click <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxYNVcd_DsRaJzHo6c3dN78Y9uOypX2jX4VzEaJZpgX_t9qXFfCzNENobD7aFXB-HeVawqjFXtslKI/pubhtml" target="_blank">here</a>.</p>
    // `;
    panelContent.innerHTML = content;
  }
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function(e) {
  const panel = document.querySelector('.panel');
  panel.classList.remove('open');
})

L.control
  .attribution({
    position: "bottomright",
  })
  .setPrefix(
    '<a href="https://amti.csis.org/">CSIS - AMTI</a>, <a href="https://leafletjs.com/">Leaflet</a>'
  )
  .addTo(map);
