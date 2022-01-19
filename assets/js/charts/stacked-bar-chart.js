const chartData = [{
    type: 'bar',
    label: "Wordpress",
    data: [31],
    backgroundColor: 'rgba(0,81,186,0.3)', // blue
    borderColor: 'rgba(0,81,186,1)',
    borderWidth: 1,
  },
  {
    type: 'bar',
    label: "Magento",
    data: [2]
  }, {
    type: 'bar',
    label: "SugarCRM",
    data: [1]
  }, {
    type: 'bar',
    label: "Prestashop",
    data: [1]
  }, {
    type: 'bar',
    label: "Tool",
    data: [5]
  }, {
    type: 'bar',
    label: "Static HTML",
    data: [1]
  }, {
    type: 'bar',
    label: "Custom",
    data: {
      "Vue/Nuxt.js": {
        type: 'bar',
        label: ["Vue/Nuxt.js"],
        data: [6]
      },
      "Laravel": {
        type: 'bar',
        label: ["Laravel"],
        data: [6]
      },
      "PHP": {
        type: 'bar',
        label: "[PHP]",
        data: [3]
      },
      "Node.js": {
        type: 'bar',
        label: ["Node.js"],
        data: [1]
      },
      "LaravelVueNuxt": {
        type: 'bar',
        label: ["Laravel", "Vue/Nuxt.js"],
        data: [4]
      },
      "LaravelPHP": {
        type: 'bar',
        label: ["Laravel", "PHP"],
        data: [1]
      },
      "NodejsVueNuxt": {
        type: 'bar',
        label: ["Node.js", "Vue/Nuxt.js"],
        data: [1]
      }
    }
  }
]

// map through dataDrie
const labelNames = chartData.map(item => {
  return item.label
})


var ctx = document.getElementById('stackedBarChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelNames,
        datasets: [{
            type: 'bar',
            label: 'WordPress',
            borderWidth: 1,
            data: [31, null, null, null, null, null, null]
          },
          {
            type: 'bar',
            label: "Magento",
            borderWidth: 1,
            data: [null, 2, null, null, null, null, null]
          }, {
            type: 'bar',
            label: "SugarCRM",
            borderWidth: 1,
            data: [null, null, 1, null, null, null, null]
          }, {
            type: 'bar',
            label: "Prestashop",
            borderWidth: 1,
            data: [null, null, null, 1, null, null, null]
          }, {
            type: 'bar',
            label: "Tool",
            borderWidth: 1,
            data: [null, null, null, null, 5, null, null]
          }, {
            type: 'bar',
            label: "Static HTML",
            borderWidth: 1,
            data: [null, null, null, null, null, 1, null]
          },
          {
            type: 'bar',
            label: "PHP",
            backgroundColor: 'rgba(0,81,186,0.3)', // blue
            borderColor: 'rgba(0,81,186,1)',
            data: [null, null, null, null, null, null, 2]
          },
          {
            type: 'bar',
            label: ["Laravel/PHP"],
            backgroundColor: 'rgba(153,50,204, 0.4)', // red/blue = purple
            borderColor: 'rgba(153,50,204, 1)',
            data: [null, null, null, null, null, null, 1]
          },
          {
            type: 'bar',
            label: ["Laravel"],
            backgroundColor: 'rgba(255,5,5,0.4)', // red
            borderColor: 'rgba(255,5,5,1)',
            data: [null, null, null, null, null, null, 1]
          },
          {
            type: 'bar',
            label: ["Laravel+Vue/Nuxt.js"],
            backgroundColor: 'rgba(255,140,0,0.4)', // orange
            borderColor: 'rgba(255,140,0,1)',
            data: [null, null, null, null, null, null, 4]
          },
          {
            type: 'bar',
            label: ["Vue/Nuxt.js"],
            backgroundColor: 'rgba(255,255,0,0.7)', // yellow
            borderColor: 'rgba(255,255,10,1)',
            data: [null, null, null, null, null, null, 1]
          },
          {
            type: 'bar',
            label: ["Node.js+Vue/Nuxt.js"],
            backgroundColor: 'rgba(10, 74, 14, 0.3)', // dark green
            borderColor: 'rgba(10, 74, 14,1)',
            data: [null, null, null, null, null, null, 1]
          }
        ]
    },
    options: {
        responsive: false,
        plugins: {
            datalabels: {
              textAlign: 'center',
              font: {
                weight: 900,
                size: 14,
                color: '#1D2939'
              },
              formatter: value => {
                // return Math.round(value) + '%'
                return Math.round(value)
              }
            }
          },
        legend: {
            display: false
          },
          scales: {
            yAxes: [{
              display: true,
              stacked: true,
              margin: 30,
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
                beginAtZero: true
              }
            }],
            xAxes: [{
              position: 'bottom',
              stacked: true,
              gridLines: {
                display: false,
                fontSize: 14,
                fontStyle: 600
              },
              ticks: {
                beginAtZero: true,
                display: true,
                fontStyle: 500,
                maxRotation: 0
              }
            }]
          },
          legend: {
            display: true,
            position: 'bottom',
            fullWidth: true,
            fontSize: 14,
            fontStyle: 600,
            labels: {
              filter(legendItem) {
                // only show custom in legend
                return legendItem.text.includes("PHP") || legendItem.text.includes("Laravel") || legendItem.text.includes("Node.js+Vue/Nuxt.js") || legendItem.text.includes("Vue/Nuxt.js") || legendItem.text.includes("Laravel+Vue/Nuxt.js") || legendItem.text.includes("Laravel/PHP")
              }
            }
            // type: 'column',
          },
          tooltips: {
            enabled: true
          },
          title: {
            display: true,
            text: 'Hoeveelheid projecten bij AC per techstack',
            fontFamily: 'sans-serif',
            fontSize: 14,
            fontStyle: 600,
            padding: 20
          },
          maintainAspectRatio: true
    }
});