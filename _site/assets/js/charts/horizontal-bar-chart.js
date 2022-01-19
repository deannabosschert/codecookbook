

var ctx = document.getElementById('horizontalBarChart');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['WordPress', 'Custom', 'Tool', 'Magento', 'SugarCRM', 'Prestashop', 'Static HTML'],        
        datasets: [{
            label: 'Projecten: ',
            data: [31, 10, 5, 1, 1, 1, 1],
            backgroundColor: [
                'rgba(0,81,186,0.3)', // blue
                'rgba(190,144,212,0.6)', // purple
                'rgba(10, 74, 14, 0.3)', // dark green
                'rgba(226,5,10,0.3)', // red
                'rgba(255,192,203,0.3)', // pink
                'rgba(232,208,30,0.3)', // yellow
                'rgba(0,150,136,0.3)', // green
              ],
              borderColor: [
                'rgba(0,81,186,1)', // blue
                'rgba(190,144,212,1)', // purple
                'rgba(10, 74, 14, 1)', // dark green
                'rgba(226,5,10,1)', // red
                'rgba(255,192,203,1)', // pink
                'rgba(232,208,30,1)', // yellow
                'rgba(0,150,136,1)', // green
              ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        legend: {
            display: false
          },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Stack",
                fontSize: 15,
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                stepSize: 10,
              },
              gridLines: {
                display: true
            }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Aantal projecten hierop gebouwd',
                fontSize: 15,
              },
          
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                stepSize: 1
              }
            }]
          },
          legend: {
            display: false
          }
    }
});