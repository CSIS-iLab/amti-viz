Highcharts.chart('hcContainer', {
    // Load Data in from Google Sheets
    data: {
      googleAPIKey: 'AIzaSyACszxQur7wd4Q6_qDlwJHr6_KX4jIc0Tw',
      googleSpreadsheetKey: '1StrugkUfqaWP-VGFOSKXAhbCrft7H5RZvJ5uwrwXstA',
      googleSpreadsheetRange: 'Sheet1'
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'line'
    },
    // Chart Title and Subtitle
    title: {
      text: "Chinese Ships Near Thitu Island"
    },
    subtitle: {
      text: "Click and drag to zoom in"
    },

    colors: ['#0078b2'],

    // Credits
    credits: {
      useHTML: true,
      enabled: true,
      href: false,
      text: "CSIS AMTI | Source: AMTI/Planet Labs",
      position: {
        y: -5
      }
    },
    // Chart Legend
    legend: {
      enabled: false
    },
    tooltip: {
      useHTML: true,
      xDateFormat: '%a, %m/%d/%y',
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Ship Count"
      }
    },
    // Additional Plot Options
    plotOptions:
    {
      line: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3
        },
        lineWidth: 3
      }
    }
  })
