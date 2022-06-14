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
var ctx = document.getElementById("myAreaChart_capm");

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:  ['2017-01-01', '2017-02-01', '2017-03-01', '2017-04-01', '2017-05-01',
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
      data:   [  0.78739859,   0.42978486,   2.00189077,   1.37835421,
        4.14944569,   1.55249615,   0.72400781,  -1.75086205,
        2.18403062,   5.70170908,  -2.33730102,  -0.15876842,
        2.7853228 ,  -6.26684356,   0.48044888,   2.38170313,
       -3.32426694,  -2.78876766,  -0.44047931,   0.5650682 ,
        0.18251952,  -6.27413352,   2.21503624,  -2.6341203 ,
        8.0174218 ,  -0.7395972 ,  -2.64201827,   3.35455055,
       -8.17252462,   6.56636813,  -5.13415618,  -3.2213663 ,
        6.43661007,   0.91926725,   0.37500652,   6.92071703,
       -3.80344047,  -6.56869312, -13.4738428 ,   9.57868461,
        3.69594451,   3.99764844,   5.91956538,   2.07092579,
        0.57758426,  -1.83150214,  11.29399537,  11.21528318,
        3.89820111,   1.3251964 ,   1.33042604,   1.87329807,
        1.38946051,   2.85349642,  -3.72587441,  -1.09972402,
       -5.0110892 ,  -3.58662794,  -4.66708287,   6.28103372,
      -10.1825828 ,   1.00816325,   1.13271602,  -2.97228895,
       -2.70867676],
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
