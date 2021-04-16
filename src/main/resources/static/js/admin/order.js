var dataProduct = [];

$(document).ready(function () {
    loadDataTable();
    loadcombobox();
});


function add() {
    $("#Title-Popup").html('Thêm tài khoản');
    $("#1").val("");
    $("#2").val("");
    var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" id="btn_insert" class="btn btn-primary" onclick="insert()">Lưu</button>`);
    $('#modal-footer').html(str);
}

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listorderbyadmin",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function () {

        },
        success: function (data) {
            dataProduct = data;
            $('#datatable').html("");
            data.map((item, index) => {
                var str = $(`<tr>
						<th>${item.id}</th>	                       			
                        <td>${item.users}</td>
                        <td>${item.promotion}%</td>
                        <td data-field="name">${item.status}</td>
                        <td>${item.payment}</td>
						<td>	
						    <button type="button" onclick="load_detail(${item.id})" class="btn btn-primary btn-sm" title="Chi tiết"
								data-toggle="modal" data-target="#Detail">
									<i class="fas fa-table"></i>
								</button>						
							<button type="button" onclick="load_edit(${item.id})" class="btn btn-primary btn-sm" title="sửa"
								data-toggle="modal" data-target="#Add">
									<i class="far fa-edit"></i>
							</button>
							<button type="button" onclick="delet(${item.id})" class="btn btn-primary btn-sm" title="xoá">
									<i class="far fa-trash-alt"></i>
							</button>
						</td>
					</tr>`);
                $('#datatable').append(str);
            });

        }

    });

}

$(function () {
    $(".dropdown-menu").on('click', 'a', function () {
        $(this).parents('.dropdown').find('button').text($(this).text());
    });
});

function insert() {
    var name = $('#1').val().trim();
    var password = $("#2").val().trim();
    $("#btn_insert").addClass("disabled");
    $("#btn_insert").attr('onclick', '');
    {
        $.ajax({
            cache: true,
            type: "POST",
            url: API_URL + "/api/newaccount",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name,
                "password": password,
            }),
            dataType: "json",
            error: function () {
                toastr.error("fail");
                $("#btn_insert").removeClass("disabled");
                $("#btn_insert").attr('onclick', 'insert()');
            },
            success: function () {
                $('#Add').modal('hide');
                toastr.success("Success");
                $("#btn_insert").removeClass("disabled");
                $("#btn_insert").attr('onclick', 'insert()');
                loadDataTable();
            }
        });
    }
}


function load_edit(id) {
    dataProduct.map((item, index) => {
        if (item.id === id) {
            $("#Title-Popup").html('Sửa đơn hàng');
            $("#users").val(item.users);

            $("#status").val(item.status);
            $("#payment").val(item.payment);
            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" id="btn_insert" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);
            ;
        }
    });
}

function loadcombobox() {

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listpayment",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function () {

        },
        success: function (data) {
            $('#payment').html("");
            data.map((item, index) => {
                var str = $(`<option>${item.name}</option>`);
                $('#payment').append(str);
            });

        }

    });
}

function load_detail(id) {

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listorderdetail",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "orderId": id,
        }),
        dataType: "json",
        error: function () {

        },
        success: function (data) {
            $('#data').html("");
            $('#Title').html('Chi tiết ' + id);
            data.map((item, index) => {
                var price = (item.product.price).toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                var total = (item.totalPrice).toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                var str = $(`<tr>
						<th>${item.id}</th>	                       			
                        <th><img src="../images/${item.product.image}" height="50px"></th>	
                        <td>${item.product.name}</td>
                        <td>${price}</td>
                        <td>${item.product.brand}</td>
                        <td>${item.quantity}</td>
                        <td>${total}</td>
					</tr>`);
                $('#data').append(str);
            });
        }

    });
}

function edit(id) {

    var users = $('#users').val();
    var promotion = $('#promotion').val();
    var status = $('#status').val();
    var payment = $('#payment').val();

    $("#btn_insert").addClass("disabled");
    $("#btn_insert").attr('onclick', '');

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/editaccount",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "users": users,
            "promotion": promotion,
            "status": status,
            "payment": payment
        }),
        dataType: "json",
        error: function () {
            toastr.error("Fail");
            $("#btn_insert").removeClass("disabled");
            $("#btn_insert").attr('onclick', 'edit(${item.id})');
        },
        success: function () {
            $('#Add').modal('hide')
            toastr.success("Edit success");
            $("#btn_insert").removeClass("disabled");
            $("#btn_insert").attr('onclick', 'edit(${item.id})');
            loadDataTable();
        }
    });
}

function delet(id) {
    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/deleteorder",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id
        }),
        error: function () {
            toastr.error("Delete fail");
        },
        success: function () {
            toastr.success("Delete success");
            loadDataTable();
        }
    });
}