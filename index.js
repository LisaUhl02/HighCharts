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
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f} Stunden'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}Stunden</b> insgesamt<br/>'
    },

    series: [
        {
            name: "Medium",
            colorByPoint: true,
            data: [
                {
                    name: "Fotoreihe",
                    y: 10.4,
                    drilldown: "Fotoreihe"
                },
                {
                    name: "Nachrichtensendung",
                    y: 14.52,
                    drilldown: "Nachrichtensendung"
                },
                {
                    name: "Mockumentary",
                    y: 35.4,
                    drilldown: "Mockumentary"
                },
                {
                    name: "Comic",
                    y: 40.8,
                    drilldown: "Comic"
                },
                {
                    name: "Stop-Motion",
                    y: 41.5,
                    drilldown: "Stop-Motion"
                }
            ]
        }
    ]
})