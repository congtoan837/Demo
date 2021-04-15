var a = [];
const b = [
    {
        "timeStart": "2021/4/1",
        "timeEnd": "2021/4/5",
        "category": "Ao"
    },
    {
        "timeStart": "2021/4/5",
        "timeEnd": "2021/4/10",
        "category": "Giay"
    },
    {
        "timeStart": "2021/4/10",
        "timeEnd": "2021/4/15",
        "category": "Giay"
    },
    {
        "timeStart": "2021/4/15",
        "timeEnd": "2021/4/20",
        "category": "Giay"
    },
    {
        "timeStart": "2021/4/20",
        "timeEnd": "2021/4/25",
        "category": "Giay"
    },
    {
        "timeStart": "2021/4/25",
        "timeEnd": "2021/4/30",
        "category": "Giay"
    }
];

$(document).ready(function () {
    loadData1();
    loadData2();
    loadData3();
    loadData4();
    loadData5();
    loadData6();
    setTimeout(() => {
        run();
    }, 500);
});

function loadData1() {

    b.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "timeStart": "2021/4/1",
                "timeEnd": "2021/4/5",
                "category": "Giay"
            }),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                a[0] = data;
            }
        });
    });
}

function loadData2() {

    b.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "timeStart": "2021/4/5",
                "timeEnd": "2021/4/10",
                "category": "Giay"
            }),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                a[1] = data;
            }
        });
    });
}

function loadData3() {

    b.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "timeStart": "2021/4/10",
                "timeEnd": "2021/4/15",
                "category": "Giay"
            }),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                a[2] = data;
            }
        });
    });
}

function loadData4() {

    b.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "timeStart": "2021/4/15",
                "timeEnd": "2021/4/20",
                "category": "Giay"
            }),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                a[3] = data;
            }
        });
    });
}

function loadData5() {

    b.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "timeStart": "2021/4/20",
                "timeEnd": "2021/4/25",
                "category": "Giay"
            }),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                a[4] = data;
            }
        });
    });
}

function loadData6() {

    b.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "timeStart": "2021/4/25",
                "timeEnd": "2021/4/30",
                "category": "Giay"
            }),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                a[5] = data;
            }
        });
    });
}

function run() {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Doanh Thu Theo Tháng'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                text: 'Ngày'
            },
            categories: [
                '1-5',
                '5-10',
                '10-15',
                '15-20',
                '20-25',
                '25-30'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Số lượng (SP)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} SP</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Giày',
            data: a

        }, {
            name: 'Áo',
            data: [0,0,0,0,0,0]

        }, {
            name: 'Nón',
            data: [0,0,0,0,0,0]

        }]
    });
}