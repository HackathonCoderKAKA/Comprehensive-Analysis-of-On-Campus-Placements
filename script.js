// Initialize Chart
let sensorChart;
function initChart() {
    const ctx = document.getElementById("sensorChart").getContext("2d");
    sensorChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                { label: "Moisture", data: [], borderColor: "blue", fill: false },
                { label: "Temperature", data: [], borderColor: "red", fill: false },
                { label: "Humidity", data: [], borderColor: "green", fill: false },
            ]
        }
    });
}

// Function to Update Values
function updateValues() {
    const moisture = document.getElementById("inputMoisture").value || 0;
    const temperature = document.getElementById("inputTemperature").value || 0;
    const humidity = document.getElementById("inputHumidity").value || 0;

    document.getElementById("moisture").textContent = moisture + "%";
    document.getElementById("temperature").textContent = temperature + "°C";
    document.getElementById("humidity").textContent = humidity + "%";

    updateChart({ moisture, temperature, humidity });
}

// Function to Update Chart
function updateChart(data) {
    const time = new Date().toLocaleTimeString();

    if (sensorChart.data.labels.length > 10) {
        sensorChart.data.labels.shift();
        sensorChart.data.datasets.forEach(dataset => dataset.data.shift());
    }

    sensorChart.data.labels.push(time);
    sensorChart.data.datasets[0].data.push(data.moisture);
    sensorChart.data.datasets[1].data.push(data.temperature);
    sensorChart.data.datasets[2].data.push(data.humidity);

    sensorChart.update();
}

// Initialize the chart on page load
initChart();
