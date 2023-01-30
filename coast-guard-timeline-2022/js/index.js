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
        const dateArray = element.split('-')
        const year = dateArray[0]
        const month = parseInt(dateArray[1], 10) - 1;
        const day = dateArray[2]
        row.push(new Date(year, month, day))
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
  let container = document.getElementById("timeline-tooltip");
  let chart = new google.visualization.Timeline(container);
  let dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: "string", id: "Location" });
  dataTable.addColumn({ type: "string", id: "Name" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  dataTable.addRows(dataFormatted)

  dataTable.insertColumn(2, {
    type: "string",
    role: "tooltip",
    p: { html: true },
  })

  let dateFormat = new google.visualization.DateFormat({
    formatType: 'medium'
  })

  for (let i = 0; i < dataTable.getNumberOfRows(); i++) {
    let monthsSuffix = ' month'
    let daysSuffix = ' day'
    let durationFormatted = ''
    // It calculates the time difference and it converts into seconds
    let duration = Math.floor(
      (dataTable.getValue(i, 4).getTime() -
        dataTable.getValue(i, 3).getTime()) /
        1000
    )

    let days = parseInt(duration / (3600*24)) //Converts duration into days
    const durationCalculated = calculateDuration(days)
    const yearsCalculated = durationCalculated[0]
    const monthsCalculated = durationCalculated[1]
    const daysCalculated = durationCalculated[2]

    if ( monthsCalculated > 1 ) {
      monthsSuffix = ' months'
    }

    if ( daysCalculated > 1 ) {
      daysSuffix = ' days'
    }

    if ( monthsCalculated ) {
      durationFormatted = monthsCalculated + monthsSuffix + ' '
    }

    if ( daysCalculated ) {
      durationFormatted +=  daysCalculated + daysSuffix
    }

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

    let tooltip =
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
      durationFormatted
      '</div>'

    dataTable.setValue(i, 2, tooltip)
  }

  function calculateDuration(value) {
    // console.log(value)
    let year, months, week, days;

    year = value >= 365 ? Math.floor(value / 365) : 0;
    value = year ? value - year * 365 : value;

    months = value >= 30 ? Math.floor((value % 365) / 30) : 0;
    value = months ? value - months * 30 : value;
    // week = value >= 7 ? Math.floor((value % 365) / 7) : 0;
    // value = week ? value - week * 7 : value;
    days = value
    // days = value < 7 ? Math.floor((value % 365) % 7) : 0;
    return [year, months, days]
  }

  let options = {
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
