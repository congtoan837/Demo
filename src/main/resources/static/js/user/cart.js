$(document).ready(function() {
    loadDataTable();
});

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/cartSession",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
			$('#datatable').html('');
            data.map((item, index) => {
                let price = item.product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
				let totalPrice = (item.product.price*item.quantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                var str = $(` 	<tr>
                                	<td>${item.product.id}</td>
                                	<th><img src="../images/${item.product.image}" height="50px"></th>
									<td>${item.product.name}</td>
									<td>${price}</td>
									<td>${item.quantity}</td>
									<td>${totalPrice}</td>
									<td><button type="submit" onclick=removetocart(${item.product.id}) class="btn btn-info">Xoá</button></td>
                                </tr>`);
				            $('#datatable').append(str);
				            });			
				        }
				
				    });
				
				}

function removetocart(id) {

	$.ajax({	
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/remove/"+id,
        contentType: "application/json;charset=UTF-8",
		data: JSON.stringify({
			"id":id
        }),
        dataType: "json",
        error: function (request) {
			toastr.error("fail");
        },
        success: function (data) {
			toastr.success("Xoá SP "+id+" khỏi giỏ !");
			loadDataTable();
        }

    });

}
