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