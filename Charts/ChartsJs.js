var areaChart, myChart;

function updateChart() {

  var ctx = document.getElementById("areaChart").getContext("2d");
  areaChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Rosca", "Pregos", "Parafusos"],
      datasets: [
        {
          label: "Dados Diários",
          data: [2478, 5267, 734, 784, 433],
          backgroundColor: "rgb(252, 105, 152)",
          borderColor: "rgba(247, 71, 128)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var ctx2 = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Máquina A", "Máquina B", "Máquina C"],
      datasets: [
        {
          label: "Com regulagem",
          backgroundColor: "rgba(250,143,177)",
          borderColor: "rgb(247, 71, 128)",
          highlightFill: "rgb(250,143,177)",
          highlightStroke: "rgb(252, 105, 152)",
          data: [65, 59, 80, 81, 56, 55, 30]
        },
        {
          label: "Sem regulagem",
          backgroundColor: "rgb(247, 71, 128)",
          borderColor: "rgb(247, 71, 128)",
          highlightFill: "rgb(250,143,177)",
          highlightStroke: "rgb(252, 105, 152)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

updateChart(); 

function footer() {
  var footer = document.getElementById('footer');
  footer.scrollIntoView({ behavior: 'smooth' });
}

function chart() {
  var chart = document.getElementById('chart');
  chart.scrollIntoView({ behavior: 'smooth'});
}

function table() {
  var table = document.getElementById('table');
  table.scrollIntoView({behavior: 'smooth'});
}

document.getElementById("refresh").addEventListener("click", function() {
  location.reload();
});