var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);
