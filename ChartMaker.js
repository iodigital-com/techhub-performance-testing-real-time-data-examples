const chartOptions = {
    responsive: true,
    hover: { animationDuration: 0 },
    legend: { display: false },
    tooltips: { enabled: false },
}

function BarChart({canvas, color, labels, data, showAnnotations}){

    var ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                backgroundColor: color,
                borderColor: color,
                data
            }]
        }
    });

    let mean = _.mean(data);
    let variance = _.mean(data.map(x => (x - mean) ** 2));
    let standardDeviation = variance ** 0.5;

    canvas.parentElement.querySelector(".stats").innerHTML = `
        <span class="flex w-full justify-center space-x-3" style='font-size: 10px'>
            <span class="border text-gray-600 py-1 px-2 rounded">
                <b>MEAN</b><br/> ${_.round(mean, 2)} ms
            </span>
            <span class="border text-gray-600 py-1 px-2 rounded">
                <b>STD DEV</b><br/> ${_.round(standardDeviation,2)} ms
            </span>
            <span class="border text-gray-600 py-1 px-2 rounded">
                <b>VAR</b><br/> ${_.round(Math.max(...data) - Math.min(...data), 2)} ms
            </span>
            <span class="border text-gray-600 py-1 px-2 rounded">
                <b>MIN</b><br/> ${Math.min(...data)} ms
            </span>
            <span class="border text-gray-600 py-1 px-2 rounded">
                <b>MAX</b><br/> ${Math.max(...data)} ms
            </span>
        </span>
    `;

    let stepSize = chart.scales['y-axis-0'].ticksAsNumbers[0] - chart.scales['y-axis-0'].ticksAsNumbers[1];

    chart.options = { 
        ...chartOptions,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'milliseconds'
                },
                ticks: {
                    stepSize: stepSize,
                    max: chart.scales['y-axis-0'].ticksAsNumbers[0] + stepSize,
                }
            }]
        },
        animation: {
            duration: 0.01,
            onComplete: function() {
                ctx = chart.ctx;
                ctx.font = `bold 12px monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
    
                let bar = chart.controller.getDatasetMeta(0);
    
                bar.data.forEach((bar, i) => {
                    let text = chart.data.datasets[0].data[i];
                    ctx.fillText(text, bar._model.x, bar._model.y - 5);
                });
            }
        },
        annotation: showAnnotations ? {
            annotations: [
                {
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: mean,
                    borderColor: 'red',
                    borderWidth: 1,
                },
                {
                    type: 'box',
                    yScaleID: 'y-axis-0',
                    yMax: mean + standardDeviation,
                    yMin:  mean - standardDeviation,
                    borderColor: 'rgba(52, 142, 37, 0.5)',
                    backgroundColor: 'rgba(52, 142, 37, 0.15)',
                    cornerRadius: 0,
                }
            ]
        } : {}
    }

    chart.update();

    return chart;
}

function LineChart({canvas, title, labels, datasets}){
    var ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets : datasets.map(d => ({
                ...d,
                fill: false,
                lineTension: 0
            })),
        }
    });

    chart.options = { 
        ...chartOptions,
        animation: {
            duration: 0,
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: title
                }
            }]
        },
    }

    chart.update();

    return chart;
}