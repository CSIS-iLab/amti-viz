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

var shipsNames = []

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
  date_range
  FROM scslinemap`
);

const mapStyle = new carto.style.CartoCSS(`#layer {
  line-width: 2;
  line-color: ramp([date_range], (#3969ac, #11a579), (2021, 2020), "=", category);
}`);

const mapLayer = new carto.layer.Layer(mapSource, mapStyle, {
  featureOverColumns: ["start_date", "end_date", "layer", "date_range"],
});

client.addLayer(mapLayer);

client.getLeafletLayer().bringToFront().addTo(map);

const popup = L.popup({ closeButton: true });

mapLayer.on('load', function() {
  console.log('loaded');
})
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

var checks = Array.from(
  document.querySelectorAll(".date_range ul input")
).map(function (checkbox) {
  return checkbox.name;
});

var filter_checks = new carto.filter.Category("date_range", {
  notIn: checks
});

document
  .querySelector(".date_range ul")
  .addEventListener("click", function (e) {
    var checkbox = e.target.type === "checkbox" ? e.target : null;

    if (checkbox) {
      var checked = Array.from(
        document.querySelectorAll(".date_range ul input:checked")
      ).map(function (checkbox) {
        return checkbox.name;
      });

      var notChecked = checks.filter(function (name) {
        return checked.indexOf(name) < 0;
      });

      var filter_checked = new carto.filter.Category("date_range", {
        in: checked
      });

      var filter_notChecked = new carto.filter.Category("date_range", {
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

  const shipsDataview = new carto.dataview.Category(mapSource, 'layer', {limit: 100})
  shipsDataview.on('dataChanged', (data, shipsNames) => {
    const ships = data.categories.map(category => category.name)
    addShipNames(ships)
  })
  
  function addShipNames(ships) {
    // ships.forEach( s => shipsNames.push(s))
    ships.forEach( s => addSelectValues(s))
  }
  
  function removeDuplicates(array) {
    return [...new Set(array)]
  }

  function addSelectValues(shipName) {
    // shipsNames.push(shipName)
    shipsNames.push({
      value: shipName,
      label: shipName,
      selected: false,
      disabled: false,
    })
  }

  // const formatChoices = (array) => {
  //   return array.map(s => {
  //     return {
  //       value: s,
  //       label: s,
  //       selected: false,
  //       disabled: false,
  //     }
  //   })
  // }

  console.log(shipsNames)
  const testVal = [
    {
      value: 'Tan Suo 2',
      label: 'Tan Suo 2',
      selected: false,
      disabled: false,
    },
    {
      value: 'Jia Geng',
      label: 'Jia Geng',
      selected: false,
      disabled: false,
    },
  ]
  // console.log(formatChoices(shipsNames))
  // Handle select element
  const selectOptions = {
    removeItems: true,
    removeItemButton: true,
  }
  const shipsSelect = document.querySelector('.choices')
  const choices = new Choices(shipsSelect, selectOptions)
  // const choices = new Choices(element, {
  //   removeItems: true,
  //   removeItemButton: true,
    // choices: [
    //   {
    //     value: 'Tan Suo 2',
    //     label: 'Tan Suo 2',
    //     selected: false,
    //     disabled: false,
    //   },
    //   {
    //     value: 'Jia Geng',
    //     label: 'Jia Geng',
    //     selected: false,
    //     disabled: false,
    //   },
    //   {
    //     value: 'Option 3',
    //     label: 'Option 3',
    //     selected: false,
    //     disabled: false,
    //   },
    // ],
    // renderSelectedChoices: 'always'
  // });
  // choices.setChoices(
  //   [
  //     { value: 'One', label: 'Label One'},
  //     { value: 'Two', label: 'Label Two'},
  //     { value: 'Three', label: 'Label Three'},
  //   ],
  //   'value',
  //   'label',
  //   false,
  // )

  // choices.setChoices([...shipsNames], 'value', 'label', true)
  
  choices.setChoices(testVal, 'value', 'label', true)
  
  client.addDataview(shipsDataview)
  
  
  shipsSelect.addEventListener(
    'addItem',
    function (e) {
      console.log(e.detail.value)
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
          date_range
        FROM scslinemap
        WHERE layer LIKE '${e.detail.value}'`) 
      }
    }
  )

  shipsSelect.addEventListener(
    'removeItem',
    function(e) {
      mapSource.setQuery(`
      SELECT
        cartodb_id,
        the_geom,
        the_geom_webmercator,
        layer,
        path,
        to_char(start_date, \'MM-DD-YYYY\') as start_date,
        to_char(end_date, \'MM-DD-YYYY\') as end_date,
        date_range
      FROM scslinemap`) 
    }
  )

L.control
  .attribution({
    position: "bottomright",
  })
  .setPrefix(
    '<a href="https://www.csis.org/programs/PROGRAMNAME">CSIS PROGRAM</a>, <a href="https://leafletjs.com/">Leaflet</a>'
  )
  .addTo(map);


  // choices.setChoices(shipsNames, 'value', 'label', true)
  // document.addEventListener('DOMContentLoaded', () => {
  //   choices.setChoices(shipsNames, 'value', 'label', true)
  // })
