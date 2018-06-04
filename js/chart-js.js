var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["Climate Change", "Basic Needs", "Natural Capital", "Empowerment"],
    datasets: [{
        label: 'Revenue from sustainable impact sectors (USD$)',
        data: [203212, 163812, 92674, 26442],
        backgroundColor: [
            '#69CA98',
            '#6B2D8C',
            '#BF9950',
            '#193F72',
        ],
        borderColor: [
            '#69CA98',
            '#6B2D8C',
            '#BF9950',
            '#193F72',
        ],
        borderWidth: 1
    }]
},
options: {
  
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});
