var dataProduct = [];

$(document).ready(function() {
    loadDataTable();
});

function add() {
    $("#Title-Popup").html('Thêm khách hàng');
    $("#1").val("");
    $("#2").val("");
    $("#3").val("");
    $("#4").val("");
    $("#5").val("");
	$("#6").val("");
    var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="insert()">Lưu</button>`);
    $('#modal-footer').html(str);
}

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listcustomer",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function(request) {

        },
        success: function(data) {
            dataProduct = data;
            $('#datatable').html("");
            data.map((item, index) => {
                var str = $(`<tr>
						<th>${item.id}</th>	
                        <th><img src="../images/${item.image}" height="50px"></th>					
                        <td>${item.name}</td>
						<td>${item.email}</td>
						<td>${item.phone}</td>
						<td>${item.password}</td>
						<td>${item.address}</td>
						<td>${item.status}</td>
						<td>							
							<button type="button" onclick="load_edit(${item.id})" class="btn btn-primary btn-sm" title="sửa"
								data-toggle="modal" data-target="#Add">
									Sửa
								</button>
								<button type="button" onclick="delet(${item.id})" class="btn btn-primary btn-sm" title="xoá">
									Xóa
								</button>
						</td>
					</tr>`);
                $('#datatable').append(str);
            });

        }

    });

}

function insert() {
    var name = $('#1').val();
    var email = $('#2').val();
    var phone = $('#3').val();
    var image = $('#6').val().split('\\').pop();
    var password = $('#4').val();
	var address = $('#5').val();
	var status = $('#7').val();

    {
        $.ajax({
            cache: true,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/newcustomer",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name,
                "email": email,
                "phone": phone,
				"image": image,
                "password": password,
                "address": address,
				"status": status
            }),
            dataType: "json",
            error: function(request) {
                toastr.error("fail");
            },
            success: function(request) {
                $('#Add').modal('hide');
                toastr.success("Success");
                loadDataTable();
            }
        });
    }
}


function load_edit(id) {
    dataProduct.map((item, index) => {
        if (item.id === id) {
            $("#Title-Popup").html('Sửa khách hàng');
            $("#1").val(item.name);
            $("#2").val(item.email);
            $(".custom-file-label").html("Chọn tệp, bỏ trống nếu muốn giữ");
            $("#3").val(item.phone);
            $("#4").val(item.password);
			$("#5").val(item.address);
			$("#7").val(item.status);
            $("#6").val("");
            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}

function edit(id) {

    var name = $('#1').val();
    var email = $('#2').val();
    var phone = $('#3').val();
    var image = $('#6').val().split('\\').pop();
    var password = $('#4').val();
	var address = $('#5').val();
	var status = $('#7').val();

    $.ajax({
        cache: false,
        type: "POST",
        url: API_URL + "/api/editcustomer",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id,
            "name": name,
            "email": email,
            "image": image,
            "phone": phone,
            "password": password,
			"address": address,
			"status": status
        }),
        dataType: "json",
        error: function(request) {
            toastr.error("Fail");
        },
        success: function(data) {
            $('#Add').modal('hide')
            toastr.success("Edit success");
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
        url: API_URL + "/api/deletecustomer",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id
        }),
        error: function(request) {
            toastr.error("Delete fail");
        },
        success: function(data) {
            toastr.success("Delete success");
            loadDataTable();
        }
    });
}