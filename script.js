const tempEl = document.getElementById("temperature");
const ctx = document.getElementById("temperatureChart").getContext("2d");

// Coordinates for Turin
const latitude = 45.07;
const longitude = 7.69;

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m`)
  .then(res => res.json())
  .then(data => {
    // Current temp
    const currentTemp = data.current.temperature_2m;
    tempEl.textContent = currentTemp;

    // Prepare data for chart
    const times = data.hourly.time.slice(0, 24); // next 24 hours
    const temps = data.hourly.temperature_2m.slice(0, 24);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: times.map(t => new Date(t).getHours() + ":00"),
        datasets: [{
          label: 'Hourly Temperature (°C)',
          data: temps,
          borderColor: '#007BFF',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 3,
          pointBackgroundColor: '#007BFF'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: {
          x: {
            title: { display: true, text: 'Hour' }
          },
          y: {
            title: { display: true, text: 'Temperature (°C)' },
            suggestedMin: Math.min(...temps) - 2,
            suggestedMax: Math.max(...temps) + 2,
          }
        }
      }
    });
  })
  .catch(err => {
    console.error("Error loading data", err);
    tempEl.textContent = "N/A";
  });
