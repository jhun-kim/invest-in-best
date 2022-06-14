// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart_op2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['SK하이닉스', 'NAVER', '삼성SDI', '기아', 'SKC', '유한양행', '메리츠금융지주',
    '일진머티리얼즈', 'DB하이텍', '하이트진로'],
    datasets: [{
      data: [36.01,  7.77, 17.22, 15.17,  0.  ,  1.82,  1.59,  1.67,  2.58,
        16.17],
      backgroundColor: ['#4e73df',
      '#6610f2',
      '#6f42c1',
      '#e83e8c',
      '#e74a3b',
      '#fd7e14',
      '#f6c23e',
      '#1cc88a',
      '#20c9a6',
      '#36b9cc'],
      hoverBackgroundColor: ['#4e73df',
      '#6610f2',
      '#6f42c1',
      '#e83e8c',
      '#e74a3b',
      '#fd7e14',
      '#f6c23e',
      '#1cc88a',
      '#20c9a6',
      '#36b9cc'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
