var total = 0;
var a = 0;
var listItem = [];
$(document).ready(function() {
	loadradio()
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
                listItem = data;
                data.map((item, index) => {
                    let price = item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    let totalPrice = (item.product.price * item.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    total += item.product.price * item.quantity;
                    var str = $(` 	<div class="media mb-2 border-bottom">
                                        <div class="media-body"> <a href="detail/${item.product.id}"> ${item.product.name}</a>
                                            <div class="small text-muted">Giá: ${price} <span class="mx-2">|</span> Số lượng: ${item.quantity} <span class="mx-2">|</span> Tổng tiền: ${totalPrice}</div>
                                        </div>
                                    </div>`);
                    $('#dataTable').append(str);
                    $('#totalprice').html(total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
                    $('#thanhtien').html(total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
                    $('#order').html(str);
                });
            }
        }

    });

}

function loadradio() {
	$.ajax({
		cache: false,
		type: "POST",
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem("token")
		},
		url: API_URL + "/api/listpayment",
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		error: function (request) {

		},
		success: function (data) {
			dataProduct = data;
			$('#datatable').html("");
			data.map((item, index) => {
				if(index = 1){
					a = "checked";
				}
				var str = $(`<div class="custom-control custom-radio">
                                    <input id="${item.id}" value="${item.id}" name="paymentMethod" type="radio" class="custom-control-input" ${a} required>
                                    <label class="custom-control-label" for="paypal">${item.name}</label>
                                </div>`);
				$('#radio').append(str);
			});

		}

	});

}

function insert() {
    var customerId = 3;
    var promotion = $('#coupon').val();
    var status = "Pending"
    var paymentId = $("#radio input[name= 'paymentMethod']:checked").val();

    {
        $.ajax({
            cache: true,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/neworder",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "customerId": customerId,
                "promotion": promotion,
                "status": status,
                "paymentId": paymentId,
            }),
            dataType: "json",
            error: function(request) {
                toastr.error("fail");
            },
            success: function(data) {
                let id = data.id;
                listItem.map((item, index) => {
                    $.ajax({
                        cache: true,
                        type: "POST",
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("token")
                        },
                        url: API_URL + "/api/neworderdetail",
                        contentType: "application/json;charset=UTF-8",
                        data: JSON.stringify({
                            "productId": item.product.id,
                            "quantity": item.quantity,
                            "orderId": id
                        }),
                        dataType: "json",
                        error: function(request) {
                            toastr.error("fail");
                        },
                        success: function(request) {

                        }
                    });
                });
                clearCart();
                toastr.success("Success");
            }
        });
    }
}

function couponCheck() {
    var coupon = $('#coupon').val();

    {
        $.ajax({
            cache: true,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/findpromo",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "coupon": coupon
            }),
            dataType: "json",
            error: function(request) {
                $('#promo').html('-');
                $('#thanhtien').html((total).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
            },
            success: function(data) {
                a = (data.percents / 100) * total
                $('#promo').html(a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
                $('#thanhtien').html((total-a).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
            }
        });
    }
}

function clearCart() {
    var cartId = localStorage.getItem("cart")

    {
        $.ajax({
            cache: true,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/removeall",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "cartId": cartId
            }),
            dataType: "json",
            error: function(request) {

            },
            success: function(data) {

            }
        });
    }
}