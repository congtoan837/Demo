$(document).ready(function() {
    loadDataTable();
});

function loadDataTable() {
	$('#coupon').html('');
    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listpromo",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
            data.map((item, index) => {
                var str = $(`<div class="coupon" id="${item.id}">
                    <img src="../images/${item.image}" alt="Avatar">
                    <div class="container" style="background-color:white">
                      <h2><b>Giảm giá ${item.percents}% hoá đơn</b></h2>
                      <p>${item.description}</p>
                    </div>
                    <div class="container">
                      <p>Mã coupon: <span class="promo">${item.coupon}</span></p>
                      <p class="expire">Kết thúc: ${item.timeEnd}</p>
                    </div>
                  </div>`);
            $('#coupon').append(str);
            });

        }

    });

}