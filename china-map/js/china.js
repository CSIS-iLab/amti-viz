export async function china() {
  var map = await makeMap({
    mapID: 'chinapower',
    center: [13.7237264, 110.6814572],
    fullscreen: true,
    zoom: 4,
    maxZoom: 6,
    minZoom: 0,
    clusterDistance: 15,
    Attribution:
      'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
    table: 'range_rings_map',
    apiKey: 'jlLXUHUYItbaht_u6RIX0A',
    program: 'Asia Maritime Transparency Initiative',
    website: 'https://amti.csis.org/',
    title: 'Chinese Power Projection Capabilities in the South China Sea',
    description:  'To toggle each layer on and off, check and uncheck the corresponding box on the key in the upper-right of the graphic. For identifying information on the individual outposts and range rings, hover the cursor over them on the map.',
    mapboxStyle:   lang && lang.indexOf("zh-") > -1
    ? "citui3waw00162jo1zcsf1urj"
    : "cj84s9bet10f52ro2lrna50yg",
    'ocean color': '#b7c7d1',
    onEachFeature: {
      mouseover: function mouseover(e) {
        this.openPopup(e.latlng)
      },
    },
    formatPopupContent: function(feature, map) {
    const getPageLang = () => {
      var url = (window.location != window.parent.location)
        ? document.referrer
        : document.location.href;

      const queryString = '?' + url.split('?')[1]
      const urlParams = new URLSearchParams(queryString)
      const lang = urlParams.get('lang')
      return lang
    }

    lang = getPageLang()
    document.documentElement.setAttribute('lang', lang)

    var suffix = lang ? "_" + lang : "";
    suffix = suffix.replace("-", "_");
    var name = feature.properties["name" + suffix];
    var description = feature.properties["description" + suffix];
    var outpost = feature.properties.chinese_outposts;

    return (
      '<div class="popupEntryStyle">' +
      (!lang ? outpost : "") +
      (name && outpost && !lang ? "" : "") +
      (name !== outpost ? name : "") +
      "</div>" +
      '<div class="popupEntryStyle">' +
      description +
      "</div>"
    )
  },

    zoomSlider: false,
    widgets: [
      {
        id: '0',
        field: "combat_aircraft",
        input: "checkbox",
        type: "form",
        keys: [{
          color: '#00B29E',
          label: "Bomber Aircraft",
          value: "Bomber Aircraft",
          form: "line",
          selected: true
        },
        {
          color: '#00B29E',
          label: "Fighter Aircraft",
          value: "Fighter Aircraft",
          form: "line",
          selected: true
        }
        ]
      },
      {
        id: '1',
        field: "missile_platforms",
        type: "form",
        input: "checkbox",
        keys: [
          {
            color: '#a77db2',
            patter: 'stripe',
            label: "Anti-Ship Cruise Missiles",
            value: "Anti-Ship Cruise Missiles",
            form: "line",
            selected: true
          },
          {
            color: '#a77db2',
            label: "SAM Sites",
            value: "SAM Sites",
            form: "line",
            selected: true
          }
        ]
      },
      {
        id: '3',
        field: "radar",
        type: "form",
        input: "checkbox",
        keys: [
          {
            color: '#2e8ebc',
            label: "Radar Range (targets at 25,000 feet)",
            value: "Radar Range (targets at 25,000 feet)",
            form: "line",
            selected: true
          },
          {
            color: '#2e8ebc',
            label: "Radar Range (targets at sea level)",
            value: "Radar Range (targets at sea level)",
            form: "line",
            selected: true
          }
        ]
      },
    ]
  })
}




