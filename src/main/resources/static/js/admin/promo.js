var dataProduct = [];

function randString(id){
    var dataSet = $(id).attr('data-character-set').split(',');  
    var possible = '';
    if($.inArray('a-z', dataSet) >= 0){
      possible += 'abcdefghijklmnopqrstuvwxyz';
    }
    if($.inArray('A-Z', dataSet) >= 0){
      possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if($.inArray('0-9', dataSet) >= 0){
      possible += '0123456789';
    }
    if($.inArray('#', dataSet) >= 0){
      possible += '![]{}()%&*$#^<>~@|';
    }
    var text = '';
    for(var i=0; i < $(id).attr('data-size'); i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

$(document).ready(function() {
    loadDataTable();

  // Create a new password
  $("#getNewPass").click(function(){
    var field = $(this).closest('div').find('input[rel="gp"]');
    field.val(randString(field));
  });

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
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/listpromo",
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
                        <th><img src="../images/${item.image}"
							height="50px"></th>                      			
                        <td>${item.percents}%</td>
						<td>${item.timeStart}</td>
						<td>${item.timeEnd}</td>
                        <td>${item.coupon}</td>
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
    var percents = $('#1').val().trim();
    var timeStart = $("#2").val().trim();
    var timeEnd = $('#3').val().trim();
    var coupon = $('#4').val().trim();
    var description = $('#6').val().trim();
    var image = $('#5').val().split('\\').pop();

    {
        $.ajax({
            cache: true,
            type: "POST",
			headers: {
            	Authorization: 'Bearer ' + localStorage.getItem("token")
        	},
            url: API_URL + "/api/newpromo",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "percents": percents,
                "timeStart": timeStart,
                "timeEnd": timeEnd,
                "description": description,
                "coupon": coupon,
                "image": image,
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
            $("#Title-Popup").html('Sửa khuyến mãi');
            $("#demo").html(item.percents + ' %');
            $("#1").val(item.percents);
            $("#2").val(item.timeStart.split(' ', 1));
            $("#3").val(item.timeEnd.split(' ', 1));
            $("#4").val(item.coupon);
            $("#5").val("");
            $(".custom-file-label").html("Chọn tệp, bỏ trống nếu muốn giữ");
            $("#6").val(item.description);
            var str = $(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
			 <button type="submit" class="btn btn-primary" onclick="edit(${item.id})">Lưu</button>`);
            $('#modal-footer').html(str);;
        }
    });
}

function edit(id) {

    var percents = $('#1').val().trim();
    var timeStart = $("#2").val().trim();
    var timeEnd = $('#3').val().trim();
    var coupon = $('#4').val().trim();
    var description = $('#6').val().trim();
    var image = $('#5').val().split('\\').pop();

    $.ajax({
        cache: false,
        type: "POST",
		headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/editpromo",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id,
            "percents": percents,
                "timeStart": timeStart,
                "timeEnd": timeEnd,
                "description": description,
                "coupon": coupon,
                "image": image
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
        url: API_URL + "/api/deletepromo",
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

  
  