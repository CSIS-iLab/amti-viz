Highcharts.chart('hcContainer', {
  // Load Data in from Google Sheets
  data: {
    googleSpreadsheetKey: '1h-mbEvI-8UR8QTbgsjmaAt0FGnN_PCsXGAiWtfTbYM8',
    googleSpreadsheetWorksheet: 1
  },
  // General Chart Options
  chart: {
    zoomType: 'x',
    type: 'column',
  },
  // Chart Title and Subtitle
  title: {
    text: "Number of Vessels at Whitsun Reef"
  },
  subtitle: {
    text: "Click and drag to zoom in"
  },

  colors: ['#0078b2'],

  // Credits
  credits: {
    // useHTML: true,
    enabled: true,
    href: false,
    text: "CSIS AMTI | Source: AMTI/Planet Labs",
  },
  // Chart Legend
  legend: {
    enabled: false
  },
  // Y Axis
  yAxis: {
    title: {
      text: "Ship Count"
    }
  },
  xAxis: {
    // tickInterval: 100,

  },
  tooltip: {
    useHTML: true,
    xDateFormat: '%a, %m/%Y',
  },
  // Additional Plot Options
  plotOptions:
  {
    column: {
      stacking: null, // Normal bar graph
      pointWidth: 10,
      dataLabels: {
        enabled: false
      },
    }
  }
})