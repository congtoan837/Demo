var a;

$(document).ready(function() {
	loadDataTable();
});


function loadDataTable() {

	$.ajax({
		type: "GET",
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem("token")
		},
		url: API_URL + "/api/ProductByCategory?id=2",
		dataType: "json",
		error: function(request) {

		},
		success: function(data) {
			data.data.map((item, index) => {
				if(localStorage.getItem("token") !== null){
					a = `newitem(${item.id})`;
				}else{
					a = `addtocart(${item.id})`;
				}
				let b = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
				var str = $(`<div class="col-lg-3 col-md-6 special-grid ${item.status}">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="sale">${item.status}</p>
                        </div>
                        <img src="../images/${item.image}" class="img-fluid"
                            alt="Image" style="height: 255px">
                        <div class="mask-icon">
                            <ul>
                                <li><a href="/detail/${item.id}"
                                    data-toggle="tooltip" data-placement="right" title="Chi tiết"><i
                                        class="fas fa-eye"></i></a></li>
                            </ul>

                            	<button type="submit" onclick="${a}" class="cart">Thêm vào giỏ</button>

                        </div>
                    </div>
                    <div class="why-text">
                        <h4 style="text-transform: uppercase;">${item.name}</h4>
                        <h5>${b}</h5>
                    </div>
                </div>
            </div>`);
				$('#listproduct').append(str);
			});

		}

	});

	$.ajax({
		type: "GET",
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem("token")
		},
		url: API_URL + "/api/ProductByCategory?id=1002",
		dataType: "json",
		error: function(request) {

		},
		success: function(data) {
			data.data.map((item, index) => {
				if(localStorage.getItem("token") !== null){
					a = `newitem(${item.id})`;
				}else{
					a = `addtocart(${item.id})`;
				}
				let b = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
				var str = $(`<div class="col-lg-3 col-md-6 special-grid ${item.status}">
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="sale">${item.status}</p>
                        </div>
                        <img src="../images/${item.image}" class="img-fluid"
                            alt="Image" style="height: 255px">
                        <div class="mask-icon">
                            <ul>
                                <li><a href="/detail/${item.id}"
                                    data-toggle="tooltip" data-placement="right" title="Chi tiết"><i
                                        class="fas fa-eye"></i></a></li>
                            </ul>

                            	<button type="submit" onclick="${a}" class="cart">Thêm vào giỏ</button>

                        </div>
                    </div>
                    <div class="why-text">
                        <h4 style="text-transform: uppercase;">${item.name}</h4>
                        <h5>${b}</h5>
                    </div>
                </div>
            </div>`);
				$('#listao').append(str);
			});

		}

	});
}

function addtocart(id) {

	$.ajax({
		cache: false,
		type: "POST",
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem("token")
		},
		url: API_URL + "/api/buy",
		contentType: "application/json;charset=UTF-8",
		data: JSON.stringify({
			"product":
			{
				"id": id
			},
			"quantity": 1,
		}),
		dataType: "json",
		xhrFields: {
			withCredentials: true
		},
		error: function(request) {
			toastr.error("fail");
		},
		success: function(data) {
			toastr.success("Thêm vào giỏ thành công !");
		}

	});

}

function newitem(id) {

	$.ajax({
		cache: false,
		type: "POST",
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem("token")
		},
		url: API_URL + "/api/newitem",
		contentType: "application/json;charset=UTF-8",
		data: JSON.stringify({
			"product": {
				"id": id
			},
			"quantity": 1,
			"cart": {
				"id": cardId
			}
		}),
		dataType: "json",
		error: function(request) {
			toastr.error("fail");
		},
		success: function(data) {
			toastr.success("Thêm vào giỏ thành công !");
		}

	});

}
