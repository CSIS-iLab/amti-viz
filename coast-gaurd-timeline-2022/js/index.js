let DATA_FORMATTED = []
const URL = `https://content-sheets.googleapis.com/v4/spreadsheets/1BfIDHH5pwXrk-qDdAcBDL_vhClfl3xFRHymJBjl_Z-I/values/Sheet1?key=AIzaSyBXuQRRw4K4W8E4eGHoSFUSrK-ZwpD4Zz4&majorDimension=ROWS`;

async function getData() {
  const RESPONSE = await fetch(URL)
  const DATA = await RESPONSE.json()
  formatData(DATA.values)
}

function formatData(data) {
  console.log(data)
  data.shift()

  DATA_FORMATTED = data.map( (elem, index) => {
    elem.map((innerElem, index) => {
      for (let index = 2; index < 4; index++) {
        const element = new Date(innerElem[index]);
        console.log(element)
        return element
      }
    })
    return elem
    // console.log(elem[2])
    // console.log(elem[3])
  })
  console.log(DATA_FORMATTED)
  return DATA_FORMATTED.slice(0, )
}

google.charts.load("current", { packages: ["timeline"] });
// google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var container = document.getElementById("timeline-tooltip");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: "string", id: "Location" });
  dataTable.addColumn({ type: "string", id: "Name" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  dataTable.addRows(DATA_FORMATTED)
  // dataTable.addRows([
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5402",
  //     new Date(2020, 0, 6),
  //     new Date(2020, 1, 14),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5402",
  //     new Date(2020, 1, 16),
  //     new Date(2020, 1, 26),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5402",
  //     new Date(2020, 3, 10),
  //     new Date(2020, 4, 23),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5302",
  //     new Date(2020, 4, 24),
  //     new Date(2020, 7, 5),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5302",
  //     new Date(2020, 8, 24),
  //     new Date(2020, 9, 3),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5305",
  //     new Date(2020, 9, 3),
  //     new Date(2020, 9, 26),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5305",
  //     new Date(2020, 9, 29),
  //     new Date(2020, 10, 12),
  //   ],
  //   [
  //     "Second Thomas Shoal",
  //     "Haijing 5305",
  //     new Date(2020, 10, 14),
  //     new Date(2020, 11, 2),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5203",
  //     new Date(2019, 11, 24),
  //     new Date(2020, 0, 14),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5305",
  //     new Date(2020, 0, 13),
  //     new Date(2020, 0, 16),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5203",
  //     new Date(2020, 0, 16),
  //     new Date(2020, 1, 16),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5204",
  //     new Date(2020, 1, 16),
  //     new Date(2020, 3, 2),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5203",
  //     new Date(2020, 3, 1),
  //     new Date(2020, 4, 23),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5204",
  //     new Date(2020, 4, 22),
  //     new Date(2020, 6, 7),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5202",
  //     new Date(2020, 6, 7),
  //     new Date(2020, 6, 29),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5403",
  //     new Date(2020, 6, 31),
  //     new Date(2020, 7, 29),
  //   ],
  //   [
  //     "Luconia Shoals",
  //     "Haijing 5402",
  //     new Date(2020, 10, 2),
  //     new Date(2020, 11, 2),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2019, 11, 13),
  //     new Date(2019, 11, 21),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3502",
  //     new Date(2019, 11, 12),
  //     new Date(2020, 0, 8),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2019, 11, 30),
  //     new Date(2020, 0, 10),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3301",
  //     new Date(2020, 0, 1),
  //     new Date(2020, 0, 30),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3102",
  //     new Date(2020, 0, 11),
  //     new Date(2020, 1, 23),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3301",
  //     new Date(2020, 1, 3),
  //     new Date(2020, 2, 6),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3103",
  //     new Date(2020, 1, 10),
  //     new Date(2020, 1, 17),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2020, 1, 23),
  //     new Date(2020, 3, 1),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3502",
  //     new Date(2020, 2, 5),
  //     new Date(2020, 3, 14),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2020, 3, 7),
  //     new Date(2020, 3, 22),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3301",
  //     new Date(2020, 4, 23),
  //     new Date(2020, 5, 6),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3102",
  //     new Date(2020, 5, 3),
  //     new Date(2020, 5, 16),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2020, 5, 8),
  //     new Date(2020, 6, 20),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3502",
  //     new Date(2020, 5, 15),
  //     new Date(2020, 6, 20),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3102",
  //     new Date(2020, 6, 20),
  //     new Date(2020, 7, 15),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2020, 7, 15),
  //     new Date(2020, 8, 1),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3502",
  //     new Date(2020, 7, 16),
  //     new Date(2020, 8, 5),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3102",
  //     new Date(2020, 8, 5),
  //     new Date(2020, 8, 15),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3102",
  //     new Date(2020, 8, 20),
  //     new Date(2020, 9, 13),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3102",
  //     new Date(2020, 10, 17),
  //     new Date(2020, 11, 2),
  //   ],
  //   [
  //     "Scarborough Shoal",
  //     "Haijing 3302",
  //     new Date(2020, 10, 18),
  //     new Date(2020, 11, 2),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5305",
  //     new Date(2020, 0, 30),
  //     new Date(2020, 1, 6),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5402",
  //     new Date(2020, 6, 3),
  //     new Date(2020, 7, 18),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5204",
  //     new Date(2020, 7, 17),
  //     new Date(2020, 8, 14),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5204",
  //     new Date(2020, 8, 24),
  //     new Date(2020, 8, 30),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5204",
  //     new Date(2020, 9, 3),
  //     new Date(2020, 9, 22),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5204",
  //     new Date(2020, 9, 25),
  //     new Date(2020, 10, 11),
  //   ],
  //   [
  //     "Vanguard Bank",
  //     "Haijing 5204",
  //     new Date(2020, 10, 14),
  //     new Date(2020, 11, 2),
  //   ],
  // ]);

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

document.addEventListener("DOMContentLoaded", (event) => {
  getData()
  google.charts.setOnLoadCallback(drawChart)
})
