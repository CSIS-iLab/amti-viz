var url =
  window.location != window.parent.location
    ? document.referrer
    : document.location.href;

var href = /lang=([^&]+)/.exec(url);
var lang = href ? href[1] : null;

let dataLoaded = false

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
  center: [14.7237264, 115.6814572],
  zoom: 6,
  maxZoom: 7,
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
  date_range,
  survey_type
  FROM scslinemap
  ORDER BY survey_type`
);

console.log(mapSource)

const mapStyle = new carto.style.CartoCSS(
  `#layer {
    line-width: 1.5;
    line-color: ramp([survey_type], (#023950, #0C8D79), ("Other", "Seabed"), "=");
  }`
);

const mapLayer = new carto.layer.Layer(mapSource, mapStyle, {
  featureOverColumns: ["start_date", "end_date", "layer", "date_range", "survey_type"],
});

client.addLayer(mapLayer);

client.getLeafletLayer().bringToFront().addTo(map);

const popup = L.popup({ closeButton: true });

mapLayer.on('load', function () {
  console.log('loaded');
})


// Populates the shipsNames array
let selectedShips = []

const shipsDataview = new carto.dataview.Category(mapSource, 'layer', { limit: 100 })

shipsDataview.on('dataChanged', (data) => {
  if (dataLoaded) { return }
  const ships = data.categories.map(category => category.name)
  const shipNames = ships.map(s => ({
    value: s,
    label: s,
    selected: false,
    disabled: false,
  }))

  choices.setChoices(shipNames, 'value', 'label', true)
})

// Select Options for choicesJS
const selectOptions = {
  removeItems: true,
  removeItemButton: true,
}
const shipsSelect = document.querySelector('.choices')
const choices = new Choices(shipsSelect, selectOptions)
client.addDataview(shipsDataview)

shipsSelect.addEventListener(
  'addItem',
  function (e) {
    dataLoaded = true
    selectedShips.push(e.detail.value)
    const shipLayers = selectedShips.map(s => `'%${s}%'`)
    if (e.detail.value) {
      mapSource.setQuery(`
        SELECT
          cartodb_id,
          the_geom,
          the_geom_webmercator,
          layer,
          path,
          to_char(start_date, \'MM-DD-YYYY\') as start_date,
          to_char(end_date, \'MM-DD-YYYY\') as end_date,
          date_range,
          survey_type
        FROM scslinemap
        WHERE layer LIKE ${shipLayers.join(' OR layer LIKE ')}
        ORDER BY survey_type`)
    }
  }
)

shipsSelect.addEventListener(
  'removeItem',
  function (e) {
    selectedShips = selectedShips.filter(s => s !== e.detail.value)
    const shipLayers = selectedShips.map(s => `'%${s}%'`)
    let query = selectedShips.length > 0 ? `FROM scslinemap WHERE layer LIKE ${shipLayers.join(' OR layer LIKE ')} ORDER BY survey_type` : `FROM scslinemap ORDER BY survey_type`

    mapSource.setQuery(`
        SELECT
          cartodb_id,
          the_geom,
          the_geom_webmercator,
          layer,
          path,
          to_char(start_date, \'MM-DD-YYYY\') as start_date,
          to_char(end_date, \'MM-DD-YYYY\') as end_date,
          date_range,
          survey_type
        ${query}`)
  }
)

let choicesInput = document.querySelector('.choices__input--cloned')
choicesInput.placeholder = 'Select a survey vessel'

mapLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    const data = event.data;
    const start_date = (data.start_date ? data.start_date : 'No Start Date')
    const end_date = (data.end_date ? data.end_date : 'No End Date')

    let content = "<div>";

    content += `
    <div class="popupHeaderStyle">
      ${data.layer}
    </div>
    <div class="popupEntryStyle">
      <p>Start Date: <span>${start_date}</span></p> 
      <p>End Date: <span>${end_date}</span></p>      
    </div>
    `;
    popup.setContent("" + content);
    popup.openOn(map);
  }
}

// Code for filters
var checks = Array.from(
  document.querySelectorAll(".survey_type ul input")
).map(function (checkbox) {
  return checkbox.name;
});

var filter_checks = new carto.filter.Category("survey_type", {
  notIn: checks
});

document
  .querySelector(".survey_type ul")
  .addEventListener("click", function (e) {
    var checkbox = e.target.type === "checkbox" ? e.target : null;

    if (checkbox) {
      var checked = Array.from(
        document.querySelectorAll(".survey_type ul input:checked")
      ).map(function (checkbox) {
        return checkbox.name;
      });

      var notChecked = checks.filter(function (name) {
        return checked.indexOf(name) < 0;
      });

      var filter_checked = new carto.filter.Category("survey_type", {
        in: checked
      });

      var filter_notChecked = new carto.filter.Category("survey_type", {
        notIn: notChecked
      });

      var filters =
        checkbox.name === "OTHERS" && checkbox.checked
          ? [filter_checks, filter_checked]
          : checkbox.name === "OTHERS" && !checkbox.checked
            ? [filter_checked]
            : [filter_notChecked];

      mapSource.getFilters().forEach(function (f) {
        mapSource.removeFilter(f);
      });

      mapSource.addFilter(new carto.filter.OR(filters));
    }
  });

// Attribution
L.control
  .attribution({
    position: "bottomright",
  })
  .setPrefix(
    '<a href="https://amti.csis.org/" alt="Link to AMTI website">Asia Maritime Transparency Initiative</a>, <a href="https://dskbd.org/" alt="Link to South China Sea Chronicle website">South China Sea Chronicle Initiative</a> <a href="https://leafletjs.com/">Leaflet</a>'
  )
  .addTo(map);

