$(document).ready(function() {
    loadgroupBrand();
    loadbyBrand(1);

    $('#search_btn').click(function(){
        $('#list-view').html('');
        $('#dataProduct').html('');

        var search = $("#txtsearch").val();

        $.ajax({
            type: "GET",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/searchproduct?search="+search,
            dataType: "json",
            error: function (request) {

            },
            success: function (data) {
                data.data.map((item, index) => {
                    let price = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    var str = $(`<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                            <div class="products-single fix">
                                                <div class="box-img-hover">
                                                    <div class="type-lb">
                                                        <p class="new">${item.status}</p>
                                                    </div>
                                                    <img src="../images/${item.image}" class="img-fluid rounded" alt="Image" style="height: 300px; width: 300px;">
                                                    <div class="mask-icon">
                                                        <ul>
                                                            <li><a href="detail/${item.id}" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                                        </ul>
                                                        <button type="submit" onclick="addtocart(${item.id})" class="cart">Thêm vào giỏ</button>
                                                    </div>
                                                </div>
                                                <div class="why-text">
                                                    <h4>${item.name}</h4>
                                                    <h5>${price}</h5>
                                                </div>
                                            </div>
                                        </div>`);

                    var str2 = $(`<div class="list-view-box">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div class="products-single fix">
                                                    <div class="box-img-hover">
                                                        <div class="type-lb">
                                                            <p class="new">${item.status}</p>
                                                        </div>
                                                        <img src="../images/${item.image}" class="img-fluid" alt="Image">
                                                        <div class="mask-icon">
                                                            <ul>
                                                                <li><a href="detail/${item.id}" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>                                                          
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                <div class="why-text full-width">
                                                    <h4>${item.name}</h4>
                                                    <h5>${price}</h5>
                                                    <p>${item.description}</p>
                                                    <a class="btn hvr-hover" onclick="addtocart(${item.id})">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);
                    $('#list-view').append(str2);
                    $('#dataProduct').append(str);
                });
            }
        });
    });

    $('#filter_btn').click(function(){
        $('#list-view').html('');
        $('#dataProduct').html('');

        var lower = lower;
        var higher = higher;

        $.ajax({
            type: "GET",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            url: API_URL + "/api/filterproductlower="+lower+"&higher="+higher,
            dataType: "json",
            error: function (request) {

            },
            success: function (data) {
                data.data.map((item, index) => {
                    let price = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    var str = $(`<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                            <div class="products-single fix">
                                                <div class="box-img-hover">
                                                    <div class="type-lb">
                                                        <p class="new">${item.status}</p>
                                                    </div>
                                                    <img src="../images/${item.image}" class="img-fluid rounded" alt="Image" style="height: 300px; width: 300px;">
                                                    <div class="mask-icon">
                                                        <ul>
                                                            <li><a href="detail/${item.id}" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                                        </ul>
                                                        <button type="submit" onclick="addtocart(${item.id})" class="cart">Thêm vào giỏ</button>
                                                    </div>
                                                </div>
                                                <div class="why-text">
                                                    <h4>${item.name}</h4>
                                                    <h5>${price}</h5>
                                                </div>
                                            </div>
                                        </div>`);

                    var str2 = $(`<div class="list-view-box">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div class="products-single fix">
                                                    <div class="box-img-hover">
                                                        <div class="type-lb">
                                                            <p class="new">${item.status}</p>
                                                        </div>
                                                        <img src="../images/${item.image}" class="img-fluid" alt="Image">
                                                        <div class="mask-icon">
                                                            <ul>
                                                                <li><a href="detail/${item.id}" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>                                                          
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                <div class="why-text full-width">
                                                    <h4>${item.name}</h4>
                                                    <h5>${price}</h5>
                                                    <p>${item.description}</p>
                                                    <a class="btn hvr-hover" onclick="addtocart(${item.id})">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);
                    $('#list-view').append(str2);
                    $('#dataProduct').append(str);
                });
            }
        });
    });
});

function loadgroupBrand() {
	$('#groupBrand').html('');
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

        },
        success: function (data) {
            data.data.map((item, index) => {
                var str = $(`<div class="list-group-collapse sub-men">
                                  <a class="list-group-item list-group-item-action" onclick="loadbyBrand(${item.id})" style="cursor: pointer;">- ${item.name} <small class="text-muted">(0)</small></a>
                             </div>`);
            $('#groupBrand').append(str);
            });
        }
    });
}

function loadbyBrand(id){
    $('#dataProduct').html('');
    $('#list-view').html('');
    $.ajax({
        type: "GET",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/api/ProductByBrand?id="+id,
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
            data.data.map((item, index) => {
                let price = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                var str = $(`<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                            <div class="products-single fix">
                                                <div class="box-img-hover">
                                                    <div class="type-lb">
                                                        <p class="new">${item.status}</p>
                                                    </div>
                                                    <img src="../images/${item.image}" class="img-fluid rounded" alt="Image" style="height: 300px; width: 300px;">
                                                    <div class="mask-icon">
                                                        <ul>
                                                            <li><a href="detail/${item.id}" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                                        </ul>
                                                        <button type="submit" onclick="addtocart(${item.id})" class="cart">Thêm vào giỏ</button>
                                                    </div>
                                                </div>
                                                <div class="why-text">
                                                    <h4>${item.name}</h4>
                                                    <h5>${price}</h5>
                                                </div>
                                            </div>
                                        </div>`);

                var str2 = $(`<div class="list-view-box">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div class="products-single fix">
                                                    <div class="box-img-hover">
                                                        <div class="type-lb">
                                                            <p class="new">${item.status}</p>
                                                        </div>
                                                        <img src="../images/${item.image}" class="img-fluid" alt="Image">
                                                        <div class="mask-icon">
                                                            <ul>
                                                                <li><a href="detail/${item.id}" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>                                                          
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                <div class="why-text full-width">
                                                    <h4>${item.name}</h4>
                                                    <h5>${price}</h5>
                                                    <p>${item.description}</p>
                                                    <a class="btn hvr-hover" onclick="addtocart(${item.id})">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);
                $('#list-view').append(str2);
                $('#dataProduct').append(str);
            });
        }
    });
}