var datagiay = [];
var dataao = [];
var month = 5;
const b = [
    {
        "timeStart": "2021/3/31 00:00:00",
        "timeEnd": "2021/"+month+"/1 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/1 00:00:00",
        "timeEnd": "2021/"+month+"/1 23:59:59",
        "category": "Giay"
    },

    {
        "timeStart": "2021/"+month+"/2  00:00:00",
        "timeEnd": "2021/"+month+"/2 23:59:59",
        "category": "Giay"
    },
    {
        "timeStart": "2021/"+month+"/3  00:00:00",
        "timeEnd": "2021/"+month+"/3 23:59:59",
        "category": "Giay"
    },
    {
        "timeStart": "2021/"+month+"/4 00:00:00",
        "timeEnd": "2021/"+month+"/4 23:59:59",
        "category": "Giay"
    },
    {
        "timeStart": "2021/"+month+"/5  00:00:00",
        "timeEnd": "2021/"+month+"/5 23:59:59",
        "category": "Giay"
    },
    {
        "timeStart": "2021/"+month+"/6  00:00:00",
        "timeEnd": "2021/"+month+"/6 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/7 00:00:00",
        "timeEnd": "2021/"+month+"/7 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/8  00:00:00",
        "timeEnd": "2021/"+month+"/8 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/9  00:00:00",
        "timeEnd": "2021/"+month+"/9 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/10  00:00:00",
        "timeEnd": "2021/"+month+"/10 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/11  00:00:00",
        "timeEnd": "2021/"+month+"/11 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/12  00:00:00",
        "timeEnd": "2021/"+month+"/12 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/13  00:00:00",
        "timeEnd": "2021/"+month+"/13 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/14  00:00:00",
        "timeEnd": "2021/"+month+"/14 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/15  00:00:00",
        "timeEnd": "2021/"+month+"/15 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/16  00:00:00",
        "timeEnd": "2021/"+month+"/16 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/17 00:00:00",
        "timeEnd": "2021/"+month+"/17 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/18  00:00:00",
        "timeEnd": "2021/"+month+"/18 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/19  00:00:00",
        "timeEnd": "2021/"+month+"/19 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/20  00:00:00",
        "timeEnd": "2021/"+month+"/20 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/21  00:00:00",
        "timeEnd": "2021/"+month+"/21 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/22  00:00:00",
        "timeEnd": "2021/"+month+"/22 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/23  00:00:00",
        "timeEnd": "2021/"+month+"/23 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/24  00:00:00",
        "timeEnd": "2021/"+month+"/24 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/25  00:00:00",
        "timeEnd": "2021/"+month+"/25 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/26  00:00:00",
        "timeEnd": "2021/"+month+"/26 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/27  00:00:00",
        "timeEnd": "2021/"+month+"/27 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/28  00:00:00",
        "timeEnd": "2021/"+month+"/28 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/29  00:00:00",
        "timeEnd": "2021/"+month+"/29 23:59:59",
        "category": "Giay"
    }
    ,
    {
        "timeStart": "2021/"+month+"/30  00:00:00",
        "timeEnd": "2021/"+month+"/30 23:59:59",
        "category": "Giay"
    }
];
const c = [
    {
        "timeStart": "2021/3/31 00:00:00",
        "timeEnd": "2021/"+month+"/1 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/1 00:00:00",
        "timeEnd": "2021/"+month+"/1 23:59:59",
        "category": "Ao"
    },

    {
        "timeStart": "2021/"+month+"/2  00:00:00",
        "timeEnd": "2021/"+month+"/2 23:59:59",
        "category": "Ao"
    },
    {
        "timeStart": "2021/"+month+"/3  00:00:00",
        "timeEnd": "2021/"+month+"/3 23:59:59",
        "category": "Ao"
    },
    {
        "timeStart": "2021/"+month+"/4 00:00:00",
        "timeEnd": "2021/"+month+"/4 23:59:59",
        "category": "Ao"
    },
    {
        "timeStart": "2021/"+month+"/5  00:00:00",
        "timeEnd": "2021/"+month+"/5 23:59:59",
        "category": "Ao"
    },
    {
        "timeStart": "2021/"+month+"/6  00:00:00",
        "timeEnd": "2021/"+month+"/6 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/7 00:00:00",
        "timeEnd": "2021/"+month+"/7 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/8  00:00:00",
        "timeEnd": "2021/"+month+"/8 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/9  00:00:00",
        "timeEnd": "2021/"+month+"/9 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/10  00:00:00",
        "timeEnd": "2021/"+month+"/10 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/11  00:00:00",
        "timeEnd": "2021/"+month+"/11 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/12  00:00:00",
        "timeEnd": "2021/"+month+"/12 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/13  00:00:00",
        "timeEnd": "2021/"+month+"/13 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/14  00:00:00",
        "timeEnd": "2021/"+month+"/14 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/15  00:00:00",
        "timeEnd": "2021/"+month+"/15 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/16  00:00:00",
        "timeEnd": "2021/"+month+"/16 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/17 00:00:00",
        "timeEnd": "2021/"+month+"/17 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/18  00:00:00",
        "timeEnd": "2021/"+month+"/18 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/19  00:00:00",
        "timeEnd": "2021/"+month+"/19 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/20  00:00:00",
        "timeEnd": "2021/"+month+"/20 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/21  00:00:00",
        "timeEnd": "2021/"+month+"/21 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/22  00:00:00",
        "timeEnd": "2021/"+month+"/22 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/23  00:00:00",
        "timeEnd": "2021/"+month+"/23 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/24  00:00:00",
        "timeEnd": "2021/"+month+"/24 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/25  00:00:00",
        "timeEnd": "2021/"+month+"/25 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/26  00:00:00",
        "timeEnd": "2021/"+month+"/26 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/27  00:00:00",
        "timeEnd": "2021/"+month+"/27 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/28  00:00:00",
        "timeEnd": "2021/"+month+"/28 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/29  00:00:00",
        "timeEnd": "2021/"+month+"/29 23:59:59",
        "category": "Ao"
    }
    ,
    {
        "timeStart": "2021/"+month+"/30  00:00:00",
        "timeEnd": "2021/"+month+"/30 23:59:59",
        "category": "Ao"
    }
];

$(document).ready(function () {
    $('#title').text('THỐNG KÊ THÁNG '+month)
    loadData();
    setTimeout(() => {
        run();
    }, 500);
});

function loadData() {

    b.forEach((item, index) => {
            $.ajax({
                cache: false,
                type: "POST",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                },
                url: API_URL + "/api/count",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(item
                ),
                dataType: "json",
                error: function () {

                },
                success: function (data) {
                   datagiay[index] = data
                }
            });
    });
    c.forEach((item, index) => {
        $.ajax({
            cache: false,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/count",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(item
            ),
            dataType: "json",
            error: function () {

            },
            success: function (data) {
                dataao[index] = data
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
            text: 'Số Lượng Sản Phẩm Bán Ra'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            min: 1,
            title: {
                text: 'Ngày'
            },
            categories: [

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
            headerFormat: '<span style="font-size:10px">Ngày {point.key}</span><table>',
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
            data: datagiay

        }, {
            name: 'Áo',
            data: dataao

        },]
    });
}