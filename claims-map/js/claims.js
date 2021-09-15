export async function china() {
  var map = await makeMap({
    mapID: 'chinapower',
    center: [0, 152.58],
    fullscreen: true,
    zoom: 3.5,
    maxZoom: 6,
    minZoom: 0,
    clusterDistance: 15,
    Attribution:
      'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
    table: 'claims_1',
    apiKey: '-WVcqNSmPGpl4TdVLJE5LQ',
    program: 'Asia Maritime Transparency Initiative',
    website: 'https://amti.csis.org/',
    title: 'Maritime Claims of the Indo-Pacific',
    description:  'Search claimants by name or click the search bar to see the full list. Up to six can be selected at once. Use the boxes below to toggle different claim types. Zoom in or out using the buttons on the side of the map. Click and drag to move across the map.',
    mapboxStyle:   lang && lang.indexOf("zh-") > -1
    ? "citui3waw00162jo1zcsf1urj"
    : "cj84s9bet10f52ro2lrna50yg",
    'ocean color': '#b7c7d1',
    formatPopupContent: function (feature, map) {
      var suffix = lang ? '_' + lang.replace(/-/, '_') : ''
  
      var name = feature.properties['name' + suffix]
  
      var description = feature.properties['description' + suffix]
        .replace(/<a href=/gi, '<a target="_blank" href=')
        .replace(/<\/a>/gi, externalLink + '</a>')
  
      return (
        '<div class="popupHeaderStyle">' +
        name +
        '</div><div class="popupEntryStyle">' +
        description +
        '</div>'
      )
    },

    zoomSlider: false,

    widgets: [{
      id: '0',
      field: "claimant",
      input: "dropdown",
      type: "color",
      keys: [
      {
        color: '#367D98',
        value: "Niue",
        group: 'pacific',
        selected: false
      },
      {
        color: '#367D98',
        value: "Malaysia",
        group: 'east asia',
        selected: false
      },
      {
        color: '#4F8963',
        value: "Myanmar",
        group: 'east asia',
        selected: false
      },
      {
        color: '#855080',
        value: "India",
        group: 'east asia',
        selected: true
      },
      {
        color: '#888048',
        value: "Australia",
        group: 'pacific',
        selected: true
      },
      {
        color: '#DAAD74',
        value: "United States",
        group: 'pacific',
        selected: true
      },
      {
        color: '#4F8963',
        value: "Vietnam",
        group: 'pacific',
        selected: true
      },
      {
        color: '#A17754',
        value: "Fiji",
        group: 'pacific',
        selected: true
      },
      {
        color: '#367D98',
        value: "vanuatu",
        group: 'pacific',
        selected: false
      },
      {
        color: '#367D98',
        value: "papua new guinea",
        group: 'pacific',
        selected: false
      },
      {
        color: '#888048',
        value: "solomon islands",
        group: 'pacific',
        selected: false
      },
      {
        color: '#367D98',
        value: "palau",
        group: 'pacific',
        selected: false
      },
      {
        color: '#888048',
        value: "Federated States of Micronesia",
        group: 'pacific',
        selected: false
      },
      {
        color: '#4F8963',
        value: "Nauru",
        group: 'pacific',
        selected: false
      },
      {
        color: '#888048',
        value: "Timor Leste",
        group: 'east asia',
        selected: false
      },
      {
        color: '#888048',
        value: "Cook Islands",
        group: 'pacific',
        selected: false
      },
      {
        color: '#DAAD74',
        value: "France",
        group: 'pacific',
        selected: false
      },
      {
        color: '#367D98',
        value: "Thailand",
        group: 'pacific',
        selected: false
      },
      {
        color: '#DAAD74',
        value: "New Zealand",
        group: 'pacific',
        selected: false
      },
      {
        color: '#4F8963',
        value: "Samoa",
        group: 'pacific',
        selected: false
      },
      {
        color: '#DAAD74',
        value: "Cambodia",
        group: 'pacific',
        selected: false
      },
      {
        color: '#A17754',
        value: "Kiribati",
        group: 'pacific',
        selected: false
      },
      {
        color: '#A17754',
        value: "United Kingdom",
        group: 'pacific',
        selected: false
      },
      {
        color: '#A17754',
        value: "Russia",
        group: 'east asia',
        selected: false
      },
      {
        color: '#A17754',
        value: "Philippines",
        group: 'east asia',
        selected: false
      },
      {
        color: '#A17754',
        value: "Marshall Islands",
        group: 'pacific',
        selected: false
      },
      {
        color: '#A17754',
        value: "Sri Lanka",
        group: 'east asia',
        selected: false
      },
      {
        color: '#855080',
        value: "Tuvalu",
        group: 'pacific',
        selected: false
      },
      {
        color: '#855080',
        value: "Tonga",
        group: 'pacific',
        selected: false
      },
      {
        color: '#367D98',
        value: "People's Republic of China",
        group: 'east asia',
        selected: true
      },
      {
        color: '#4F8963',
        value: "Maldives",
        group: 'east asia',
        selected: false
      },
      {
        color: '#367D98',
        value: "Republic of China (Taiwan)",
        group: 'east asia',
        selected: false
      },
      {
        color: '#367D98',
        value: "South Korea",
        group: 'east asia',
        selected: false
      },
      {
        color: '#367D98',
        value: "Democratic People's Republic of Korea (North Korea)",
        group: 'east asia',
        selected: false
      },
      {
        color: '#855080',
        value: "Japan",
        group: 'east asia',
        selected: false
      },
      {
        color: '#855080',
        value: "Bangladesh",
        group: 'east asia',
        selected: false
      },
      {
        color: '#4F8963',
        value: "Indonesia",
        group: 'east asia',
        selected: false
      },
      {
        color: '#855080',
        value: "Singapore",
        group: 'east asia',
        selected: false
      },
      {
        color: '#855080',
        value: "Brunei",
        group: 'east asia',
        selected: false
      },
      ]
    },
    {
      id: '1',
      field: "type",
      type: "form",
      input: "checkbox",
      keys: [
        {
          color: '#c5c5c5',
          label: "Territorial Baselines",
          value: "Territorial Baselines",
          form: "line",
          selected: false
        },
        {
          color: '#c5c5c5',
          label: "Territorial Sea",
          value: "Territorial Sea",
          form: "line",
          icon: '',
          selected: true
        },
        {
          color: '#c5c5c5',
          label: "Exclusive Economic Zone",
          value: "Exclusive Economic Zone",
          form: "line",
          icon: '',
          selected: true
        },
        {
          color: '#c5c5c5',
          label: "Continental Shelf",
          value: "Continental Shelf",
          form: "line",
          icon: '',
          selected: false
        },
        {
          color: '#c5c5c5',
          label: "Nine-Dash/U-Shaped Line",
          value: "Nine-Dash/U-Shaped Line",
          form: "line",
          icon: '',
          selected: true
        }
      ]
      },
    ]
  })
}
