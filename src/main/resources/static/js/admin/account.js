var dataProduct = [];

$(document).ready(function() {
    loadDataTable();
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
        url: API_URL + "/api/listaccount",
        contentType: "application/json;charset=UTF-8",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        dataType: "json",
        error: function() {
			toastr.error("fail");
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
    $("#btn_insert").addClass( "disabled" );
    $("#btn_insert").attr( 'onclick','' );
    {
        $.ajax({
            cache: true,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/newaccount",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name,
                "password": password,
            }),
            dataType: "json",
            error: function() {
                toastr.error("fail");
                $("#btn_insert").removeClass( "disabled" );
                $("#btn_insert").attr( 'onclick','insert()' );
            },
            success: function() {
                $('#Add').modal('hide');
                toastr.success("Success");
                $("#btn_insert").removeClass( "disabled" );
                $("#btn_insert").attr( 'onclick','insert()' );
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
			 <button type="submit" id="btn_insert" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}

function edit(id) {

    var name = $('#1').val();
    var password = $('#2').val();
    $("#btn_insert").addClass( "disabled" );
    $("#btn_insert").attr( 'onclick','' );
    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/editaccount",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id,
            "name": name,
            "password": password
        }),
        dataType: "json",
        error: function() {
            toastr.error("Fail");
            $("#btn_insert").removeClass( "disabled" );
            $("#btn_insert").attr( 'onclick','edit(${item.id})' );
        },
        success: function() {
            $('#Add').modal('hide')
            toastr.success("Edit success");
            $("#btn_insert").removeClass( "disabled" );
            $("#btn_insert").attr( 'onclick','edit(${item.id})' );
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
        url: API_URL + "/api/deleteaccount",
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