var dataProduct = [];

$( document ).ready(function() {
    loadDataTable();
    loadComboBox();
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

function addbrand() {
    var name = $('#Brand2').val();
    {
        $.ajax({
            cache: true,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/newbrand",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name              
            }),
            dataType: "json",
            error: function (request) {
                toastr.error("fail");
            },
            success: function (request) {
                $('#Newbrand').modal('hide');
                toastr.success("Success");
                loadComboBox();
            }
        });
    }
}

function deletebrand(id) {
        $.ajax({
            cache: false,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/deletebrand/",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "id": id                
            }),
            error: function (request) {
                toastr.error("Delete fail"); 
            },
            success: function (data) {
                toastr.success("Delete success");  
                loadComboBox();
                loadlistComboBox();
            }
        });
    }

function addcategory() {
    var name = $('#Brand2').val();
    {
        $.ajax({
            cache: true,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/newcategory",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name              
            }),
            dataType: "json",
            error: function (request) {
                toastr.error("fail");
            },
            success: function (request) {
                $('#Newbrand').modal('hide');
                toastr.success("Success");
                loadComboBox();
            }
        });
    }
}

function deletecategory(id) {
        $.ajax({
            cache: false,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/deletecategory/",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "id": id                
            }),
            error: function (request) {
                toastr.error("Delete fail"); 
            },
            success: function (data) {
                toastr.success("Delete success");  
                loadComboBox();
                loadlistComboBox2();
            }
        });
    }

    function loadlistComboBox() {
        $('#Brand2').val("");
        $("#Newbrand").click(function () {
            $('#buttonadd').attr("onclick","addbrand()");
        });
        $.ajax({
            cache: false,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/listbrand",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            error: function (request) {
                toastr.error("fail")
            },
            success: function (data) {
                $('#listcombobox').html("");
                data.data.map((item, index) => {
                    var str = $(`<label class="col-7">${item.name}</label>
                                <button type="submit" onclick="deletebrand(${item.id})" class="float-right">Xóa</button>`);			
                    $('#listcombobox').append(str);
                });
            }
        });
    }
    
    function loadlistComboBox2() {
        $('#Brand2').val("");
        $("#newcategory").click(function () {
            $('#buttonadd').attr("onclick","addcategory()");
        });
        $.ajax({
            cache: false,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url:  API_URL + "/api/listcategory",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            error: function (request) {
                toastr.error("fail")
            },
            success: function (data) {
                $('#listcombobox').html("");
                data.data.map((item, index) => {
                    var str = $(`<label class="col-7">${item.name}</label>
                                <button type="submit" onclick="deletecategory(${item.id})" class="float-right">Xóa</button>`);
                    var box = $(`<button type="submit" onclick="addcategory()" class="btn btn-info ml-2">OK</button>`);
                    $('#addcombobox').html(box);					
                    $('#listcombobox').append(str);
                });
            }
        });
    }
    


function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url:  API_URL + "/api/listproduct",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
        	dataProduct = data.data;
            $('#datatable').html("");
            data.data.map((item, index) => {
                var str = $(`<tr>
						<th>${item.id}</th>
						<th><img src="../images/${item.image}"
							height="50px"></th>
						<td>${item.name}</td>
						<td>${item.price}</td>
						<td>${item.brand.name}</td>
						<td>${item.quantity}</td>
						<td>${item.category.name}</td>
						<td>${item.status}</td>
						<td>${item.description}</td>
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

function insert() {
    var name = $('#1').val();
    var description = $('#8').val();
    var status = $('#7').val();
    var price = $('#2').val();
    var brand = $('#3').val();
    var quantity = $('#5').val();
    var image = $('#4').val().split('\\').pop();
    var category = $('#6').val();

    {
        $.ajax({
            cache: true,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url:  API_URL + "/api/newproduct",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "name": name,
                "description": description,
                "status": status,
                "price": price,
                "brand": {
                    "id": brand
                },
                "quantity": quantity,
                "image": image,
                "category": {
                    "id": category
                }
            }),
            dataType: "json",
            error: function (request) {
                toastr.error("fail");
            },
            success: function (request) {
                $('#Add').modal('hide');
                toastr.success("Success");
                loadDataTable();
            }
        });
    }
}

function loadComboBox() {

    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url:  API_URL + "/api/listbrand",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {
            toastr.error("fail")
        },
        success: function (data) {
        	$('#3').html("");
            data.data.map((item, index) => {
                var str = $(`<option value=${item.id}>${item.name}</option>`);
                $('#3').append(str);
            });
            loadComboBox2();
        }
    });
}

function loadComboBox2() {

    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url:  API_URL + "/api/listcategory",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {
            toastr.error("fail")
        },
        success: function (data) {
        	$('#6').html("");
            data.data.map((item, index) => {
                var str = $(`<option value=${item.id}>${item.name}</option>`);
                $('#6').append(str);
            });
        }
    });
}

function load_edit(id) {
    dataProduct.map((item, index) => {
        if (item.id === id) {
            $("#Title-Popup").html('Sửa sản phẩm');
            $("#1").val(item.name);
            $("#2").val(item.price);
            $("#3").val(item.brand.id);
            $("#4").val("");
            $(".custom-file-label").html("Chọn tệp, bỏ trống nếu muốn giữ");
            $("#5").val(item.quantity);
            $("#6").val(item.category.id);
            $("#7").val(item.status);
            $("#8").val(item.description);
            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);
            ;
        }
    });
}

function edit(id) {

    var name = $('#1').val();
    var description = $('#8').val();
    var status = $('#7').val();
    var price = $('#2').val();
    var brand = $('#3').val();
    var quantity = $('#5').val();
    var image = $('#4').val().split('\\').pop();
    var category = $('#6').val();

        $.ajax({
            cache: false,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url:  API_URL + "/api/editproduct",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "id": id,
                "name": name,
                "description": description,
                "status": status,
                "price": price,
                "brand": {
                    "id": brand
                },
                "quantity": quantity,
                "image": image,
                "category": {
                    "id": category
                }
            }),
            dataType: "json",
            error: function (request) {
                toastr.error("Fail");
            },
            success: function (data) {
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
            url:  API_URL + "/api/deleteproduct/",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "id": id                
            }),
            error: function (request) {
                toastr.error("Delete fail"); 
            },
            success: function (data) {
                toastr.success("Delete success");   
                loadDataTable();
            }
        });
    }