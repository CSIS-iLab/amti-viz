Highcharts.chart('hcContainer', {
    // Load Data in from Google Sheets
    data: {
      googleAPIKey: 'AIzaSyACszxQur7wd4Q6_qDlwJHr6_KX4jIc0Tw',
      googleSpreadsheetKey: '1Vmq1FhTzmhriH9OYygQYHwjV-hTZikH4z5WGFlIGPOA',
      googleSpreadsheetRange: 'Sheet1'
    },
    // General Chart Options
    chart: {
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "Research Ships in the Indo-Pacific"
    },
    subtitle: {
      text: "Government vessels operating beyond their areas of national jurisdiction, Apr 2019 – Mar 2020"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "Source: Asia Maritime Transparency Initiative | CSIS"
    },
    // Chart Legend
    //legend: {
    //  title: {
    //    text: 'Ships<br/><span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
    //  },
    //  align: 'center',
    //  verticalAlign: 'bottom',
    //  layout: 'horizontal'
    //},
    // Y Axis
    legend: {
        enabled: false
    },
    yAxis: {
      title: {
        text: "Number of Ships"
      },
    },
    // Additional Plot Options
    plotOptions:
    {
      column: {
        //stacking: null, // Normal bar graph
        stacking: "normal", // Stacked bar graph
        dataLabels: {
            enabled: true,
        }
      }
    }
  })
