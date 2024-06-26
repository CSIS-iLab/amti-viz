import L from 'mapbox.js'
import MarketCluster from './marketcluster.js'
import { polyfill } from 'es6-promise'
polyfill()
import { fetch as fetchPolyfill } from 'whatwg-fetch'

let map,
  interestsData,
  exclude = ['Introduction', 'Conclusion'],
  nations = ['United States', 'Australia', 'New Zealand', 'France', 'China'],
  allowedContent = [`port-or-base_${window.lang}`, `description_${window.lang}`]

const chapterColors = {
  'United States': `#6688b9`,
  France: `#f89c74`,
  'New Zealand': `#00ad3b`,
  Australia: `#f6cf71`,
  China: `#e06b91`
}

const makeMap = (dataWebgl) => {
  window.map.on('load', function() {
    interestsData = parseInterestsData(dataWebgl)
    initIslands()
  })
  window.map.setView([-12, 180], 4)

  return map
}

function initIslands() {
  window.map.attributionControl.setPrefix(
    '<a href="https://amti.csis.org">CSIS</a>'
  )

  addInterestsLayer()
  addAnimatedPointLayer()
}

function addInterestsLayer() {
  window.nation_marker_clusters = {}
  nations.forEach(nation => {
    let chapterName = nation.toLowerCase().replace(' ', '-')

    nation_marker_clusters[nation] = new L.MarkerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      maxClusterRadius: 40,
      iconCreateFunction: function(cluster) {
        return L.divIcon({
          className: `icon-${chapterName}`,
          html: `${cluster.getChildCount()}`
        })
      }
    })

    let filteredData = interestsData.features.filter(
      f => f.properties.country.indexOf(nation) > -1
    )

    for (let i = 0; i < filteredData.length; i++) {
      let a = filteredData[i]
      let properties = a.properties
      let description = Object.keys(properties)
        .map(p => {
          if (properties[p] && allowedContent.includes(p))
            return `<div class="popupEntryStyle">${properties[p]}</div>`
        })
        .filter(p => p)
        .join('')

      let nation_marker = L.marker(
        new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]),
        {
          icon: L.divIcon({
            className: `icon-${chapterName}`
          })
        }
      )
      nation_marker.bindPopup(description)
      nation_marker_clusters[nation].addLayer(nation_marker)
    }

    window.map.addLayer(nation_marker_clusters[nation])

    nation_marker_clusters[nation].on('clustermouseover', a => {
      Object.keys(window.map._layers).forEach((layer, i) => {
        window.map._layers[a.layer._leaflet_id].spiderfy()
      })
    })
  })

  let objs = [{}, window.nation_marker_clusters]
  window.layer_cache = objs.reduce(function(r, o) {
    Object.keys(o).forEach(function(k) {
      r[k] = o[k]
    })
    return r
  }, {})

  nations.forEach(nation => {
    window.map.removeLayer(window.nation_marker_clusters[nation])
  })
}

function addAnimatedPointLayer() {
  window.map.addSource(`point`, {
    type: 'geojson',
    data: pointOnCircle(0)
  })

  window.map.addLayer({
    id: 'point',
    source: 'point',
    type: 'circle',
    paint: {
      'circle-color': 'transparent',
      'circle-radius': initialRadius,
      'circle-stroke-width': 2,
      'circle-stroke-color': 'transparent',
      'circle-radius-transition': { duration: 0 },
      'circle-opacity-transition': { duration: 0 }
    }
  })

  window.map.addLayer({
    id: 'point1',
    source: 'point',
    type: 'circle',
    paint: {
      'circle-radius': initialRadius,
      'circle-color': 'transparent'
    }
  })

  if (window.map.getLayer('point1')) {
    var layers = window.map.getStyle().layers
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
        basemapId = layers[i].id
        break
      }
    }
  }
}

function pointOnCircle(loc = 0) {
  return {
    type: 'Point',
    coordinates: loc
  }
}

function parseInterestsData(rawData) {
  let featureData = rawData.map(islandData => {
    console.log(islandData)
    let objs = [{}, islandData]
    let islandDataSansCoordinates = objs.reduce(function(r, o) {
      Object.keys(o).forEach(function(k) {
        r[k] = o[k]
      })
      return r
    }, {})

    delete islandDataSansCoordinates.latitude
    delete islandDataSansCoordinates.longitude

    islandData.longitude =
      parseFloat(islandData.longitude) < 0
        ? 360 + parseFloat(islandData.longitude)
        : parseFloat(islandData.longitude)

    islandData.latitude = parseFloat(islandData.latitude)

    let feature = {
      type: 'Feature',
      properties: islandDataSansCoordinates,
      geometry: {
        type: 'Point',
        coordinates: [islandData.longitude, islandData.latitude]
      }
    }

    return feature
  })

  return {
    type: 'FeatureCollection',
    features: featureData
  }
}

export default makeMap
