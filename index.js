Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Aufwand pro Medium'
    },
    xAxis: {
        categories: ['Podcast', 'Fotoreihe', 'Nachrichtensendung', 'Mockumentary', 'Comic', 'Stop-Motion']
    },
    yAxis: {
        title: {
            text: 'Stunden'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span> <b>{point.y:.2f} Stunden</b> insgesamt<br/>'
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            showInNavigator: true,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f} Stunden'
            }
        }
    },
    series: [{
        name: 'Vorproduktion',
        colorByPoint: true,
        data: [1, 2, 2, 4, 3, 2]
    }, {
        name: 'Produktion',
        colorByPoint: true,
        data: [3, 3, 4, 15.2, 18, 20]
    }, {
        name: 'Nachbearbeitung',
        colorByPoint: true,
        data: [4, 4.5, 8.2, 16.52, 19.5, 19.2]
    }, {
        name: 'Gesamtstunden',
        colorByPoint: true,
        data: [8, 9.5, 14.2, 35.72, 40.5, 41.2]
    }
    ]
});