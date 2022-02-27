Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Aufwand pro Medium'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',

        title: {
            text: 'Medium'
        }
    },
    yAxis: {
        title: {
            text: 'Stunden'
        }

    },
    legend: {
        enabled: false
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

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} Stunden</b> insgesamt<br/>'
    },

    series: [
        {
            name: "Medium",
            colorByPoint: true,
            data: [

                {
                    name: "Podcast",
                    y: 8,
                    drilldown: "Podcast"
                },
                {
                    name: "Fotoreihe",
                    y: 9.5,
                    drilldown: "Fotoreihe",
                },
                {
                    name: "Nachrichtensendung",
                    y: 14.2,
                    drilldown: "Nachrichtensendung"
                },
                {
                    name: "Mockumentary",
                    y: 35.72,
                    drilldown: "Mockumentary"
                },
                {
                    name: "Comic",
                    y: 40.8,
                    drilldown: "Comic"
                },
                {
                    name: "Stop-Motion",
                    y: 41.2,
                    drilldown: "Stop-Motion"
                }
            ]
        }
    ]
})