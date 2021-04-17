$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    $('#coupon').html('');
    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/username",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
            var id = data.id;

            $.ajax({
                cache: false,
                type: "POST",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                },
                url: API_URL + "/api/listorder",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    "customerId": id,
                }),
                dataType: "json",
                error: function (request) {

                },
                success: function (data) {
                    data.map((item, index) => {
                            var str = $(`
                            <tr style="text-align: center">
                                <th scope="row">${item.id}</th>
                                <td>${item.users}</td>
                                <td>${item.phone}</td>
                                <td>${item.address}</td>
                                <td>${item.coupon}</td>
                                <td>${item.payment}</td>
                                <td style="color: red; font-weight: bold">${item.status}</td>
                                <td>
                                <button type="button" onclick="load_detail(${item.id})" class="btn btn-primary btn-sm" title="Chi tiết"
								data-toggle="modal" data-target="#Detail">
									<i class="fas fa-table"></i>
								</button>		
                                <button type="button" onclick="delet(${item.id})" class="btn btn-primary btn-sm" title="xoá">
									<i class="far fa-trash-alt"></i>
							    </button>
							    </td>
                            </tr>
                            `);
                            $('#dataTable').append(str);
                    });
                }

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
            $('#Title').html('Chi tiết đơn hàng ' + id);
            data.map((item, index) => {
                var price = (item.product.price).toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                var total = (item.totalPrice).toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                var str = $(`<tr>
						<th>${item.product.id}</th>	                       			
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