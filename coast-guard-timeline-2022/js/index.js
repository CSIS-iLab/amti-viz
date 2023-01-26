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
    let durationSuffix = ' day'
    var duration = Math.floor(
      (dataTable.getValue(i, 4).getTime() -
        dataTable.getValue(i, 3).getTime()) /
        1000
    )
    var days = parseInt(duration / (3600*24))
    if ( days > 1) {
      durationSuffix = " days";
    }
    // console.log(days, durationSuffix)
    // console.log('date: ',dataTable.getValue(i, 4).getDate())
    // console.log('month: ',dataTable.getValue(i, 4).getMonth())
    let startDateLenght = dataTable.getValue(i, 3).toDateString().length
    let endDateLenght = dataTable.getValue(i, 4).toDateString().length
    let startDateFormatted = dataTable
      .getValue(i, 3)
      .toDateString()
      .substring(4, startDateLenght)
    let endDateFormatted = dataTable
      .getValue(i, 4)
      .toDateString()
      .substring(4, endDateLenght)
    // console.log(dateFormat.formatValue(dataTable.getValue(i, 4)).length)
    // console.log(
    //   "date string: ",
    //   dateFormat
    //     .formatValue(dataTable.getValue(i, 4))
    //     .substring(0, 12)
    // );
    var tooltip =
      '<div class="ggl-tooltip"><span>' +
      dataTable.getValue(i, 1) +
      '</span></div><div class="ggl-tooltip"><span>' +
      dataTable.getValue(i, 0) +
      "</span>: " +
      startDateFormatted +
      " - " +
      endDateFormatted +
      "</div>" +
      '<div class="ggl-tooltip"><span>' +
      "Duration" +
      "</span>: " +
      days +
      durationSuffix;
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
