let DATA_FORMATTED = []
let test = []
const URL = `https://content-sheets.googleapis.com/v4/spreadsheets/1BfIDHH5pwXrk-qDdAcBDL_vhClfl3xFRHymJBjl_Z-I/values/Sheet1?key=AIzaSyBXuQRRw4K4W8E4eGHoSFUSrK-ZwpD4Zz4&majorDimension=ROWS`;

async function getData() {
  const RESPONSE = await fetch(URL)
  const DATA = await RESPONSE.json()
  return formatData(DATA.values).slice(0, 2)
}

function formatData(data) {
  // console.log(data)
  data.shift()
  dataLength = data.length
  for (let index = 0; index < dataLength; index++) {
    let element = data[index]
    console.log(element)
    // console.log(Array.isArray(element))
    element.map( (elem, i ) => {
      console.log(elem);
      let test;
      if ( i > 1 ) {
        test = new Date(elem)
        console.log(test)
        return test
      }
      test = elem
      console.log(test)
      return test
    })
    // return element
    // data.map((innerElem, index) => {
    //   let element;
    //   if (index > 1) {
    //     element = new Date(innerElem);
    //     console.log(element);
    //   }
    //   element = innerElem;
    //   return element;
    // });
  }
  return data
  // return DATA_FORMATTED
}

google.charts.load("current", { packages: ["timeline"] });
// google.charts.setOnLoadCallback(drawChart);

document.addEventListener("DOMContentLoaded", (event) => {
  // DATA_FORMATTED = getData()
  // if (DATA_FORMATTED) {
  //   console.log('houston we have data!');
  //   console.log(getData())
  // }
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
  console.log(dataFormatted)
  dataTable.addRows(dataFormatted)
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
  //   ]
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
