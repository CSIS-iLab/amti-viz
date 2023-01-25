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

  var options = {
    colors: ["#58a897", "#83badc", "#3b75bb", "#c79bd3"],
    timeline: {
      rowLabelStyle: {
        fontName: "Arial",
        fontSize: 14,
        color: "#455a64",
      },
      showBarLabels: false,
      colorByRowLabel: true,
    },
  };

  chart.draw(dataTable, options);
}
