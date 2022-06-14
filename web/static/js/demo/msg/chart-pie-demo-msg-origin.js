// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart_origin");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['후성', '해성디에스', '대성홀딩스', '서울가스', 'SBS', '미원상사', '한국카본', '신영증권',
    'SIMPAC', 'KEC', '대성에너지', '세진중공업', '조일알미늄', '디씨엠', '화성산업', 'TCC스틸',
    '한농화성', '동남합성', '신흥', '신송홀딩스', '한솔로지스틱스', '삼영화학', '진양산업', '덕양산업',
    '한국전자홀딩스'],
    datasets: [{
      data: [ 0.  ,  5.92, 39.85,  9.48,  0.  , 15.37,  0.  ,  0.  ,  0.  ,
        0.54,  3.03,  1.13,  0.  ,  4.65,  0.  ,  5.01,  0.  , 12.73,
        1.74,  0.56,  0.  ,  0.  ,  0.  ,  0.  ,  0.  ],
      backgroundColor: ['#4e73df',
      '#6610f2',
      '#6f42c1',
      '#e83e8c',
      '#e74a3b',
      '#fd7e14',
      '#f6c23e',
      '#1cc88a',
      '#20c9a6',
      '#36b9cc',
      '#fff',
      '#858796',
      '#5a5c69',
      '#4e73df',
      '#858796',
      '#1cc88a',
      '#36b9cc',
      '#f6c23e',
      '#e74a3b',
      '#f8f9fc',
      '#5a5c69',
      '#4e73df',
      '#6610f2',
      '#6f42c1',
      '#e83e8c'],
      hoverBackgroundColor: ['#4e73df',
      '#6610f2',
      '#6f42c1',
      '#e83e8c',
      '#e74a3b',
      '#fd7e14',
      '#f6c23e',
      '#1cc88a',
      '#20c9a6',
      '#36b9cc',
      '#fff',
      '#858796',
      '#5a5c69',
      '#4e73df',
      '#858796',
      '#1cc88a',
      '#36b9cc',
      '#f6c23e',
      '#e74a3b',
      '#f8f9fc',
      '#5a5c69',
      '#4e73df',
      '#6610f2',
      '#6f42c1',
      '#e83e8c'],
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