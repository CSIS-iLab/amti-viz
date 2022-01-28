var url =
  window.location != window.parent.location
    ? document.referrer
    : document.location.href;

var href = /lang=([^&]+)/.exec(url);
var lang = href ? href[1] : null;

var basemap;
if (lang && lang.indexOf("zh-") > -1) {
  basemap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/ilabmedia/citui3waw00162jo1zcsf1urj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
    {}
  );
} else {
  basemap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
    {}
  );
}

var map = L.map("map", {
  center: [13.7237264, 110.6814572],
  zoom: 5,
  maxZoom: 6,
  scrollWheelZoom: true,
  minZoom: 4,
  zoomControl: true,
  scrollWheelZoom: true,
  layers: [basemap],
  attributionControl: false,
});

const client = new carto.Client({
  apiKey: "c0p2NyjIBCjp5BSH7un2MQ",
  username: "csis",
});

const mapSource = new carto.source.SQL(`
  SELECT 
  cartodb_id,
  the_geom,
  the_geom_webmercator,
  layer,
  path,
  to_char(start_date, \'MM-DD-YYYY\') as start_date,
  to_char(end_date, \'MM-DD-YYYY\') as end_date,
  date_range
  FROM scslinemap`
);

const mapStyle = new carto.style.CartoCSS(`#layer {
  line-width: 1.5;
  line-color: #4CC8A3;
  line-opacity: 1;
}`);

const mapLayer = new carto.layer.Layer(mapSource, mapStyle, {
  featureOverColumns: ["start_date", "end_date", "layer", "date_range"],
});

client.addLayer(mapLayer);

client.getLeafletLayer().bringToFront().addTo(map);

const popup = L.popup({ closeButton: true });

mapLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    var data = event.data;
    let start_date
    let end_date
    if (data.start_date == null || data.end_date == null) {
      start_date = 'No Start Date'
      end_date = 'No End Date'
    } else {
      start_date = data.start_date
      end_date = data.end_date
    }
    var content = "<div>";

    content += `
    <div class="popupHeaderStyle">
      Survey Vessel: ${data.layer}
    </div>
    <div class="popupEntryStyle">
      <div>Start Date: ${start_date}</div> 
   
      <div>End Date: ${end_date}</div> 
      
    </div>
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
    '<a href="https://www.csis.org/programs/PROGRAMNAME">CSIS PROGRAM</a>, <a href="https://leafletjs.com/">Leaflet</a>'
  )
  .addTo(map);
