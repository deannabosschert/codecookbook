var ctx = document.getElementById('pieChart');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['WordPress', 'Magento', 'SugarCRM', 'Prestashop', 'Tool', 'Static HTML', 'Custom'],
        datasets: [{
            data: [31, 2, 1, 1, 5, 1, 10],
            label: 'Techstack projecten',
            backgroundColor: [
                'rgba(0,81,186,0.3)', // blue
                'rgba(226,5,10,0.3)', // red
                'rgba(255,192,203,0.3)', // pink
                'rgba(232,208,30,0.3)', // yellow
                'rgba(10, 74, 14, 0.3)', // dark green
                'rgba(0,150,136,0.3)', // green
                'rgba(190,144,212,0.6)' // purple
                // green
            ],
            borderColor: [
                'rgba(0,81,186,1)', // blue
                'rgba(226,20,45, 1)', // red
                'rgba(255,192,203,1)', // pink
                'rgba(232,208,30,1)', // yellow
                'rgba(10, 74, 14, 1)', // dark green
                'rgba(0,150,136,1)', // green
                'rgba(190,144,212,1)' // purple
            ],
            borderWidth: 0.75
        }]
    },
    options: {
        responsive: false,
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