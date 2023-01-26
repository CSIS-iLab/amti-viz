const DATA_FORMATTED = []
const URL = `https://content-sheets.googleapis.com/v4/spreadsheets/1BfIDHH5pwXrk-qDdAcBDL_vhClfl3xFRHymJBjl_Z-I/values/Sheet1?key=AIzaSyBXuQRRw4K4W8E4eGHoSFUSrK-ZwpD4Zz4&majorDimension=ROWS`;

async function getData() {
  const RESPONSE = await fetch(URL)
  const DATA = await RESPONSE.json()
  return formatData(DATA.values)
}

function formatData(data) {
  data.shift()
  dataLength = data.length
  for (let index = 0; index < dataLength; index++) {
    let row = []
    data[index].forEach((element, i) => {
      if (i > 1) {
        row.push(new Date(element))
      } else {
        row.push(element)
      }
    })
    DATA_FORMATTED[index] = row
  }
  return DATA_FORMATTED
}

google.charts.load("current", { packages: ["timeline"] });

document.addEventListener("DOMContentLoaded", (event) => {
  google.charts.setOnLoadCallback(drawChart)
})

async function drawChart() {
  const dataFormatted = await getData()
  var container = document.getElementById("timeline-tooltip");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  // var dateFormat = new google.visualization.DateFormat({ pattern: 'd.M.yy' })

  dataTable.addColumn({ type: "string", id: "Location" });
  dataTable.addColumn({ type: "string", id: "Name" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  dataTable.addRows(dataFormatted)

  // pseudo code
  // show the duration in this format: Duration: xx month, xx days
  dataTable.insertColumn(2, {
    type: "string",
    role: "tooltip",
    p: { html: true },
  })

  var dateFormat = new google.visualization.DateFormat({
    formatType: 'medium'
  })

  for (var i = 0; i < dataTable.getNumberOfRows(); i++) {
    var duration =
      (
        dataTable.getValue(i, 4).getTime() - dataTable.getValue(i, 3).getTime()
      ) / 1000
      console.log(duration)
    // duration = new Date(duration).toString()
    var days = parseInt(duration / (3600*24))
    var hours = parseInt(duration / 3600) % 24;
    var minutes = parseInt(duration / 60) % 60;
    var seconds = duration % 60;
    console.log(days, 'days', hours, 'hours', minutes,'minutes');
    var tooltip =
      '<div class="ggl-tooltip"><span>' +
      dataTable.getValue(i, 1) +
      '</span></div><div class="ggl-tooltip"><span>' +
      dataTable.getValue(i, 0) +
      "</span>: " +
      dateFormat.formatValue(dataTable.getValue(i, 3)) +
      " - " +
      dateFormat.formatValue(dataTable.getValue(i, 4)) +
      "</div>" +
      '<div class="ggl-tooltip"><span>' +
      'Duration' +
      '</span>: ' + duration  +
      '</div>';

    dataTable.setValue(i, 2, tooltip);
  }

  var options = {
    // colors: ["#58a897", "#83badc", "#3b75bb", "#c79bd3", "#FCF1AB"],
    colors: ["#58a897", "#83badc", "#3b75bb", "#c79bd3", "#ca6d92"],
    timeline: {
      rowLabelStyle: {
        fontName: "Arial",
        fontSize: 14,
        color: "#455a64",
      },
      showBarLabels: false,
      colorByRowLabel: true,
    },
    tooltip: {
      isHtml: true,
    },
  }

  chart.draw(dataTable, options);
}
