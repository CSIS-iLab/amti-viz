Highcharts.chart('hcContainer', {
  // Load Data in from Google Sheets
  data: {
    googleAPIKey: 'AIzaSyACszxQur7wd4Q6_qDlwJHr6_KX4jIc0Tw',
    googleSpreadsheetKey: '1h-mbEvI-8UR8QTbgsjmaAt0FGnN_PCsXGAiWtfTbYM8',
    googleSpreadsheetRange: 'Sheet1'
  },
  // General Chart Options
  chart: {
    type: 'column',
  },
  // Chart Title and Subtitle
  title: {
    text: "Vessels at Union Banks"
  },
  subtitle: {
    text: "As visible in Planet Labs satellite imagery"
  },

  colors: ['#00B29E', '#0078b2'],

  // Credits
  credits: {
    // useHTML: true,
    enabled: true,
    href: false,
    text: "CSIS AMTI | Source: AMTI/Planet Labs",
  },
  // Chart Legend
  legend: {
    enabled: true,
    title: {
      text:
        '<span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
    },
  },
  // Y Axis
  yAxis: {
    title: {
      text: "Ship Count"
    }
  },
  tooltip: {
    shared: true,
    useHTML: true,
    xDateFormat: '%m/%d/%y',
  },
  // Additional Plot Options
  plotOptions:
  {
    column: {
      stacking: true, // Normal bar graph
      pointWidth: 8,
      dataLabels: {
        enabled: false
      },
    }
  }
})