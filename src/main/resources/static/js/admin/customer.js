var dataProduct = [];

$(document).ready(function() {
    loadDataTable();
});

//---------------------------- lam trong them moi  ------------------------------------------------//
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
//---------------------------- lam trong them moi  ------------------------------------------------//

//---------------------------- hien thi danh sach  ------------------------------------------------//
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
            dataProduct = data.data;
            $('#datatable').html("");
            data.data.map((item, index) => {
                var str = $(`<tr>
						<th>${item.id}</th>	
                        <th><img src="../images/${item.image}" height="50px"></th>					
                        <td>${item.name}</td>
						<td>${item.email}</td>
						<td>${item.phone}</td>
						<td>${item.address}</td>
						<td>${item.username}</td>
						<td>${item.password}</td>
						<td>${item.role}</td>
						<td>${item.status}</td>
						<td>							
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
//---------------------------- hien thi danh sach  ------------------------------------------------//

//---------------------------- them khach hang  ------------------------------------------------//
function insert() {
    var name = $('#1').val();
    var email = $('#2').val();
    var phone = $('#3').val();
    var image = $('#4').val().split('\\').pop();
	var address = $('#5').val();
    var user = $('#6').val();
	var pass = $('#7').val();
    var role = $('#8').val();
    var status = $('#9').val();

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
                "address": address,
                "username": user,
                "password": pass,
                "role": role,
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
//---------------------------- them khach hang  ------------------------------------------------//

//---------------------------- load chinh sua khach hang  ------------------------------------------------//
function load_edit(id) {
    dataProduct.map((item, index) => {
        if (item.id === id) {
            $("#Title-Popup").html('Sửa khách hàng');
            $("#1").val(item.name);
            $("#2").val(item.email);
            $(".custom-file-label").html("Chọn tệp, bỏ trống nếu muốn giữ");
            $("#3").val(item.phone);
			$("#5").val(item.address);
            $("#6").val(item.username);
            $("#7").val(item.password);
			$("#8").val(item.role);
            $("#9").val(item.status);
            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}
//---------------------------- load chinh sua khach hang  ------------------------------------------------//

//---------------------------- chinh sua khach hang  ------------------------------------------------//
function edit(id) {

    var name = $('#1').val();
    var email = $('#2').val();
    var phone = $('#3').val();
    var image = $('#4').val().split('\\').pop();
    var address = $('#5').val();
    var user = $('#6').val();
    var pass = $('#7').val();
    var role = $('#8').val();
    var status = $('#9').val();

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
			"address": address,
            "username": user,
            "password": pass,
            "role": role,
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
//---------------------------- chinh sua khach hang  ------------------------------------------------//

//---------------------------- xoa khach hang  ------------------------------------------------//
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
//---------------------------- xoa khach hang  ------------------------------------------------//