// GRAPH Température

const areaChart1 = {
    series: [
      {
        data: [13, 24, 27, 28, 7, 21, 16],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#21232d'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    markers: {
      size: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart_1 = new ApexCharts(
    document.querySelector('#area-chart1'),
    areaChart1
  );
  areaChart_1.render();




  // GRAPH Pression 

  const areaChart2 = {
    series: [
      {
        data: [1, 2, 5, 3, 8, 5, 2],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#21232d'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    markers: {
      size: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart_2 = new ApexCharts(
    document.querySelector('#area-chart2'),
    areaChart2
  );
  areaChart_2.render();



  
  // GRAPH Humidité

  const areaChart3 = {
    series: [
      {
        data: [19, 47, 64, 39, 32, 75, 59],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#21232d'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    markers: {
      size: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart_3 = new ApexCharts(
    document.querySelector('#area-chart3'),
    areaChart3
  );
  areaChart_3.render();