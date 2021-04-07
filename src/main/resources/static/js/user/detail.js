$(document).ready(function() {
	loadData();
});

function geturlId() {
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	}
};

function loadData() {
	var url = window.location.pathname;
	var id = url.substring(url.lastIndexOf('/') + 1);
	$('#listblog').html('');
	$.ajax({
		cache: false,
		type: "POST",
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem("token")
		},
		url: API_URL + "/api/findproduct",
		contentType: "application/json;charset=UTF-8",
		data: JSON.stringify({
			"id": id
		}),
		dataType: "json",
		error: function(request) {
			window.location.href = "/"	
		},
		success: function(data) {
			let price = data.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
			var str = $(`<div class="col-xl-5 col-lg-5 col-md-6">
                    <div id="carousel-example-1" class="single-product-slider carousel slide" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"> <img class="d-block w-100" src="../images/${data.image}" alt="First slide"> </div>
                            <div class="carousel-item"> <img class="d-block w-100" src="../images/${data.image}" alt="Second slide"> </div>
                            <div class="carousel-item"> <img class="d-block w-100" src="../images/${data.image}" alt="Third slide"> </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev"> 
						<i class="fa fa-angle-left" aria-hidden="true"></i>
						<span class="sr-only">Previous</span> 
					</a>
                        <a class="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next"> 
						<i class="fa fa-angle-right" aria-hidden="true"></i> 
						<span class="sr-only">Next</span> 
					</a>
                        
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-6">
                    <div class="single-product-details">
                        <h2 style="text-transform: uppercase;">${data.name}</h2>
                        <h5>${price}</h5>
                        <p class="available-stock"><span>Còn lại <b>${data.quantity}</b> sản phẩm</span><p>
						<b>Thương hiệu: </b><span>${data.brand}</span>
						
						<h4>Mô tả:</h4>
						<p>${data.description}</p>
						<ul>
							<li>
								<div class="form-group quantity-box">
									<label class="control-label">Số lượng</label>
									<input class="form-control" id="quantity" value="1" min="1" max="${data.quantity}" type="number">
								</div>
							</li>
						</ul>

						<div class="price-box-bar">
							<div class="cart-and-bay-btn">
								<a class="btn hvr-hover" data-fancybox-close="" href="@{/shop}">Sản phẩm khác</a>
								<a class="btn hvr-hover" data-fancybox-close="" onclick="addtocart(${data.id})">Thêm vào giỏ</a>
							</div>
						</div>

						
                    </div>
                </div>`);
			$('#productDetail').append(str);
			$('.my-5').addClass('display');
		}

	});

}

function addtocart(id) {
	var quantity = $('#quantity').val();
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
			"quantity": quantity,
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