+
$(document).ready(function() {
    loadDataTable();
});

function loadDataTable() {

    $.ajax({
        cache: false,
        type: "POST",
        url: "http://localhost:8080/api/listblog",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        error: function (request) {

        },
        success: function (data) {
            data.map((item, index) => {
                
                var str = $(`<div class="col-md-6 col-lg-4 col-xl-4">
                <div class="blog-box">
                    <div class="blog-img">
                        <img class="img-fluid" src="images/${item.image}" alt="" style="height: 300px;"/>
                    </div>
                    <div class="blog-content">
                        <div class="title-blog">
                            <h3>${item.title}</h3>
                            <p>${item.content}</p>
                            <br>
                            <p>Người viết: <span>${item.createBy}<span></p>
                        </div>
                    </div>
                </div>
            </div>`);
            $('#listblog').append(str);
            });

        }

    });

}