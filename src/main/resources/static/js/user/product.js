$(document).ready(function() {
    loadDataTable();
});

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        url: API_URL + "/api/listproduct",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
            data.map((item, index) => {
                let a = item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
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
                            <button type="submit" class="cart" onclick="addtocart(${item.id})">Thêm vào giỏ</button>
                        </div>
                    </div>
                    <div class="why-text">
                        <h4 style="text-transform: uppercase;">${item.name}</h4>
                        <h5>${a}</h5>
                    </div>
                </div>
            </div>`);
            $('#listproduct').append(str);
            });

        }

    });

}

function addtocart(id) {

    $.ajax({
        cache: false,
        type: "POST",
        url: API_URL + "/api/findproduct",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            "id": id
        }),
        dataType: "json",
        error: function (request) {
        
        },
        success: function (data) {
            let a = data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
            var str = $(`<li>
            <a href="#" class="photo"><img src="images/${data.image}" class="cart-thumb" alt="" /></a>
            <h6><a href="#">${data.name}</a></h6>
            <p>1x - <span class="price">${a}</span></p>
        </li>	`);
        $('#cart').append(str);

        }

    });

}

