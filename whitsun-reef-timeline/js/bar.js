Highcharts.chart('hcContainer', {
  // Load Data in from Google Sheets
  data: {
    googleSpreadsheetKey: '1h-mbEvI-8UR8QTbgsjmaAt0FGnN_PCsXGAiWtfTbYM8',
    googleSpreadsheetWorksheet: 1
  },
  // General Chart Options
  chart: {
    // zoomType: 'x',
    type: 'column',
  },
  // Chart Title and Subtitle
  title: {
    text: "Vessels at Union Banks and Whitsun Reef"
  },
  subtitle: false,

  colors: ['#0078b2', '#00B29E', '#94C9FF'],

  // Credits
  credits: {
    // useHTML: true,
    enabled: true,
    href: false,
    text: "CSIS AMTI | Source: AMTI/Planet Labs",
  },
  // Chart Legend
  legend: {
    enabled: true
  },
  // Y Axis
  yAxis: {
    title: {
      text: "Ship Count"
    }
  },
  // xAxis: {
  //   categories: '%m/%d/%y',

  // },
  tooltip: {
    useHTML: true,
    xDateFormat: '%m/%d/%y',
  },
  // Additional Plot Options
  plotOptions:
  {
    column: {
      stacking: true, // Normal bar graph
      pointWidth: 10,
      dataLabels: {
        enabled: false
      },
    }
  }
})