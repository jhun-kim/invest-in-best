// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2017-01-01', '2017-02-01', '2017-03-01', '2017-04-01', '2017-05-01',
    '2017-06-01', '2017-07-01', '2017-08-01', '2017-09-01', '2017-10-01',
    '2017-11-01', '2017-12-01', '2018-01-01', '2018-02-01', '2018-03-01',
    '2018-04-01', '2018-05-01', '2018-06-01', '2018-07-01', '2018-08-01',
    '2018-09-01', '2018-10-01', '2018-11-01', '2018-12-01', '2019-01-01',
    '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', '2019-06-01',
    '2019-07-01', '2019-08-01', '2019-09-01', '2019-10-01', '2019-11-01',
    '2019-12-01', '2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01',
    '2020-05-01', '2020-06-01', '2020-07-01', '2020-08-01', '2020-09-01',
    '2020-10-01', '2020-11-01', '2020-12-01', '2021-01-01', '2021-02-01',
    '2021-03-01', '2021-04-01', '2021-05-01', '2021-06-01', '2021-07-01',
    '2021-08-01', '2021-09-01', '2021-10-01', '2021-11-01', '2021-12-01',
    '2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'],
    datasets: [{
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [ 2.42029471,  0.57040507,  2.91932815,  1.72898841,  4.32030589,
        1.84773983,  0.73012501, -1.47916422,  2.04872884,  4.28303544,
       -1.81509565, -0.07193333,  1.56851761, -3.41701191,  0.40687622,
        1.76879466, -2.18702486, -1.96508724, -0.33179208,  0.58999469,
        0.17315739, -6.94434522,  2.03365956, -2.44028168,  7.49598974,
       -0.5226019 , -1.94908852,  2.27433169, -5.4898589 ,  3.77176165,
       -2.91207307, -2.01176667,  4.29670903,  0.6590853 ,  0.29414535,
        4.62480495, -2.01657105, -3.81523735, -7.85430184,  7.24682941,
        3.49205449,  4.07531881,  6.26337845,  2.44472503,  0.72453473,
       -2.52728275, 14.65280331, 11.95354469,  3.42541209,  1.15492285,
        1.0948622 ,  1.54538679,  1.16000202,  2.30769008, -3.00710322,
       -0.83334155, -3.77363655, -2.565483  , -2.86340449,  4.32253891,
       -7.20896195,  0.82045559,  0.93904919, -2.28114242, -2.06741886],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

