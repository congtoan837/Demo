var dataProduct = [];

$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected")
        .html(fileName);
});

$(document).ready(function() {
    loadDataTable();
});

function add() {
    $("#Title-Popup").html('Thêm sản phẩm');
    $("#1").val("");
    $("#2").val("");
    $("#4").val("");
    $("#5").val("");
    $("#7").val("");
    var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="insert()">Lưu</button>`);
    $('#modal-footer').html(str);
}

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/listblog",
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
                        <td>${item.title}</td>
						<td>${item.content}</td>
						<td>${item.description}</td>
						<td>${item.image}</td>
						<td>${item.createBy}</td>
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
    var content = $('#2').val();
    var description = $('#3').val();
    var image = $('#4').val();
    var createBy = $('#4').val();
    var title = $('#1').val();

    {
        $.ajax({
            cache: true,
            type: "POST",
            url: "http://localhost:8080/api/newblog",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "content": content,
                "description": description,
                "image": image,
                "createBy": createBy,
                "title": title,
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
            $("#Title-Popup").html('Sửa sản phẩm');
            $("#1").val(item.title);
            $("#2").val(item.content);
            $("#3").val(item.description);
            $("#4").val(item.createBy);

            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}

function edit(id) {

    var content = $('#2').val();
    var description = $('#3').val();
    var image = $('#4').val();
    var createBy = $('#4').val();
    var title = $('#1').val();

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/editblog",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id,
            "content": content,
            "description": description,
            "image": image,
            "createBy": createBy,
            "title": title,
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
        url: "http://localhost:8080/api/deleteblog",
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