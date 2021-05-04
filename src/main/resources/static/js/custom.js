var lower = 0;
var higher = 0;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username && password) {
        $.ajax({
            cache: true,
            type: "POST",
            url: API_URL + "/signin",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "username": username,
                "password": password
            }),
            dataType: "json",
            async: false,
            error: function(request) {
                toastr.error("Login fail !! input correct username & password and try again !");
            },
            success: function(data) {
                    localStorage.setItem("token", data.data.token);
                    window.location.href = "/";
            }
        });
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
}


(function($) {
    "use strict";

    /* ..............................................
       Loader 
       ................................................. */
    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    /* ..............................................
       Fixed Menu
       ................................................. */

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.main-header').addClass('fixed-menu');
        } else {
            $('.main-header').removeClass('fixed-menu');
        }
    });

    /* ..............................................
       Gallery
       ................................................. */

    $('#slides-shop').superslides({
        inherit_width_from: '.cover-slides',
        inherit_height_from: '.cover-slides',
        play: 5000,
        animation: 'fade',
    });

    $(".cover-slides ul li").append("<div class='overlay-background'></div>");

    /* ..............................................
       Map Full
       ................................................. */

    $(document).ready(function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });

    /* ..............................................
       Special Menu
       ................................................. */

    var Container = $('.container');
    Container.imagesLoaded(function() {
        var portfolio = $('.special-menu');
        portfolio.on('click', 'button', function() {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });
    });

    /* ..............................................
       BaguetteBox
       ................................................. */

    baguetteBox.run('.tz-gallery', {
        animation: 'fadeIn',
        noScrollbars: true
    });

    /* ..............................................
       Offer Box
       ................................................. */

    $('.offer-box').inewsticker({
        speed: 3000,
        effect: 'fade',
        dir: 'ltr',
        font_size: 13,
        color: '#ffffff',
        font_family: 'Montserrat, sans-serif',
        delay_after: 1000
    });

    /* ..............................................
       Tooltip
       ................................................. */

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* ..............................................
       Owl Carousel Instagram Feed
       ................................................. */

    $('.main-instagram').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });

    /* ..............................................
       Featured Products
       ................................................. */

    $('.featured-products-box').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });

    /* ..............................................
       Scroll
       ................................................. */

    $(document).ready(function() {

        if(localStorage.getItem("token") == null){
            $("#loginbox").html('');
            $("#loginbox").append('<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">  Đăng nhập </button>')
        }

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
                url: API_URL + "/api/filterproduct?lower="+lower+"&higher="+higher,
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

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });


    /* ..............................................
       Slider Range
       ................................................. */

    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 500000,
            max: 5000000,
            values: [1000000, 3000000],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + "Đ - " + ui.values[1] + " Đ");
                lower = ui.values[0];
                higher = ui.values[1];
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0) + "Đ -" +
            $("#slider-range").slider("values", 1) + " Đ");
        lower = $("#slider-range").slider("values", 0);
        higher = $("#slider-range").slider("values", 1);
    });

    /* ..............................................
       NiceScroll
       ................................................. */

    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });


}(jQuery));