$(document).ready(function() {
    if(localStorage.getItem("token") !== null){
        loaditem();
    }else{
        loadDataTable();
    }
});

function loadDataTable() {
    $('#datatable').html('');

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL_LOCAL + "/api/cartSession",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        error: function(request) {

        },
        success: function(data) {
            if (data.length > 0) {
                data.map((item, index) => {
                    let price = item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    let totalPrice = (item.product.price * item.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    var str = $(` 	<div class="media mb-2 border-bottom">
                                        <div class="media-body"> <a href="detail/${item.product.id}"> ${item.product.name}</a>
                                            <div class="small text-muted">Giá: ${price} <span class="mx-2">|</span> Số lượng: ${item.quantity} <span class="mx-2">|</span> Tổng tiền: ${totalPrice}</div>
                                        </div>
                                    </div>`);
                    $('#dataTable').append(str);
                });
            }
        }

    });

}

function loaditem() {
    $('#datatable').html('');

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listitem",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "cartId": parseInt(localStorage.getItem("cart"))
        }),
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        error: function(request) {

        },
        success: function(data) {
            if (data.length > 0) {
                data.map((item, index) => {
                    let price = item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    let totalPrice = (item.product.price * item.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    var str = $(` 	<div class="media mb-2 border-bottom">
                                        <div class="media-body"> <a href="detail/${item.product.id}"> ${item.product.name}</a>
                                            <div class="small text-muted">Giá: ${price} <span class="mx-2">|</span> Số lượng: ${item.quantity} <span class="mx-2">|</span> Tổng tiền: ${totalPrice}</div>
                                        </div>
                                    </div>`);
                    $('#dataTable').append(str);
                });
            }
        }

    });

}
