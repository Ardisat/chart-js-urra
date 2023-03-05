var ourBar = $("#chartBar");

var barChart = new Chart(ourBar, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Worldwide IC Unit Shipment Growth',
                backgroundColor: ['#E6E6FA', '#00A550', '#1A162A', '#9F2B68', '#FAF0E6', '#FFAACC', '#C8385A', '#6D6552', '#5D76CB', '#395778'],
                data: cb,
                borderWidth: 1,
                borderRadius: 1,
                //borderColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
})


/*
$('#2019').click(function () {
    console.log('2019');
    $('#2019').removeClass('btn-secondary');
    $('#2020').removeClass('btn-primary');
    $('#2019').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    barChart.data.datasets[0].data = p_data['2019'];

    barChart.data.datasets[0].backgroundColor = 'rgba(54, 162, 235, 0.4)';
    barChart.data.datasets[0].borderColor = 'rgba(54, 162, 235, 0.9)';
    barChart.data.datasets[0].label = 'Популяция 2019 г';

    barChart.update();
})

$('#2020').click(function () {
    console.log('2020');
    $('#2020').removeClass('btn-secondary');
    $('#2019').removeClass('btn-primary');
    $('#2020').addClass('btn-primary');
    $('#2019').addClass('btn-secondary');

    barChart.data.datasets[0].data = p_data['2020'];

    barChart.data.datasets[0].backgroundColor = 'rgba(255, 159, 64, 0.4)';
    barChart.data.datasets[0].borderColor = 'rgba(255, 159, 64, 0.9)';

    barChart.data.datasets[0].label = 'Популяция 2020 г';

    barChart.update();
})

*/