var dataProduct = [];

$(document).ready(function() {
    loadDataTable();
});

function add() {
    $("#Title-Popup").html('Thêm tài khoản');
    $("#1").val("");
    $("#2").val("");
    var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="insert()">Lưu</button>`);
    $('#modal-footer').html(str);
}

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/listaccount",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function() {

        },
        success: function(data) {
            dataProduct = data;
            $('#datatable').html("");
            data.map((item, index) => {
                var str = $(`<tr>
						<th>${item.id}</th>	                       			
                        <td>${item.name}</td>
						<td>${item.password}</td>
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
    var name = $('#1').val().trim();
    var password = $("#2").val().trim();

    {
        $.ajax({
            cache: true,
            type: "POST",
            url: "http://localhost:8080/api/newaccount",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name,
                "password": password,
            }),
            dataType: "json",
            error: function() {
                toastr.error("fail");
            },
            success: function() {
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
            $("#Title-Popup").html('Sửa tài khoản');
            $("#1").val(item.name);
            $("#2").val(item.password);

            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}

function edit(id) {

    var name = $('#1').val();
    var password = $('#2').val();

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/editaccount",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id,
            "name": name,
            "password": password
        }),
        dataType: "json",
        error: function() {
            toastr.error("Fail");
        },
        success: function() {
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
        url: "http://localhost:8080/api/deleteaccount",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id
        }),
        error: function() {
            toastr.error("Delete fail");
        },
        success: function() {
            toastr.success("Delete success");
            loadDataTable();
        }
    });
}