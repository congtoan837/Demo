var dataProduct = [];

$(document).ready(function() {
    loadDataTable();
});

function add() {
    $("#Title-Popup").html('Thêm khuyến mãi');
    $("#2").val("");
    $("#3").val("");
    $("#4").val("");
    var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="insert()">Lưu</button>`);
    $('#modal-footer').html(str);
}

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/listpromo",
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
                        <td>${item.percents}</td>
						<td>${item.timeStart}</td>
						<td>${item.timeEnd}</td>
						<td>${item.description}</td>
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
    var percents = $('#1').val().trim();
    var timeStart = $("#2").val().trim();
    var timeEnd = $('#3').val().trim();
    var description = $('#4').val().trim();

    {
        $.ajax({
            cache: true,
            type: "POST",
            url: "http://localhost:8080/api/newpromo",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "percents": percents,
                "timeStart": timeStart,
                "timeEnd": timeEnd,
                "description": description,
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
            $("#Title-Popup").html('Sửa bài viết');
            $("#demo").html(item.percents + ' %');
            $("#1").val(item.percents);
            $("#2").val(item.timeStart.split(' ', 1));
            $("#3").val(item.timeEnd.split(' ', 1));
            $("#4").val(item.description);
            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}

function edit(id) {

    var percents = $('#1').val();
    var timeStart = $('#2').val();
    var timeEnd = $('#3').val();
    var description = $('#4').val();

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/editpromo",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id,
            "percents": percents,
            "timeStart": timeStart,
            "timeEnd": timeEnd,
            "description": description
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
        url: "http://localhost:8080/api/deletepromo",
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