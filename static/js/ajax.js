$.ajax({
    url: `/get_data`,
    type: 'POST',
    success: function (data) {
        processing(data);
    },
    error: function(jqxhr, status, errorMsg) {
        alert('Server error!');
    }
});

var dt = [];
var fact = [];
var prediction = [];

function processing(data) {
    data.forEach(elem => {
        dt.push(elem.dt);
        fact.push(elem.fact);
        prediction.push(elem.prediction);
    });
    
    set_chart();
}

function set_chart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dt,
            datasets: [
                {
                    label: 'Fact',
                    data: fact,
                    borderWidth: 1
                }, 
                {
                    label: 'Prediction',
                    data: prediction,
                    borderWidth: 1
                }
            ]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
        }
    });

    ctx.width = 600;
    ctx.height = 400;
}