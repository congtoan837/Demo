<%@page import="javax.servlet.http.Cookie"%>
<!--Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html lang="zxx">

    <head>
        <title>Login</title>
        <link rel="icon" href="images/favicon.png">
        <!-- Meta tag Keywords -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8" />
        <meta name="keywords" content="Validate Login & Register Forms Responsive Widget,Login form widgets, Sign up Web forms , Login signup Responsive web form,Flat Pricing table,Flat Drop downs,Registration Forms,News letter Forms,Elements" />
        <script src="resources/js/confirm.js">

        </script>
        <script>
            addEventListener("load", function () {
                setTimeout(hideURLbar, 0);
            }, false);

            function hideURLbar() {
                window.scrollTo(0, 1);
            }
            
        </script>
        <!-- Meta tag Keywords -->

        <!-- css files -->
        <link rel="stylesheet" href="resources/css/style-1.css" type="text/css" media="all" />
        <!-- Style-CSS -->
        <link href="resources/css/font-awesome.min.css" rel="stylesheet">
        <!-- Font-Awesome-Icons-CSS -->
        <!-- //css files -->
        <!-- web-fonts -->
        <link href="//fonts.googleapis.com/css?family=Magra:400,700&amp;subset=latin-ext" rel="stylesheet">
        <!-- //web-fonts -->
    </head>

    <body>
        <!-- title -->
        <h1>
            Quản Lý Bán Hàng
        </h1>
        <!-- //title -->

        <!-- content -->
        <div class="container-agille">
            <div class="formBox level-login">
                <div class="box boxShaddow"></div>
                <div class="box loginBox">
                    <h3>Đăng nhập</h3>
                   <form class="form" role="form" method="post" action="LoginCheck" accept-charset="UTF-8">
                        <div class="f_row-2" style="text-align: center; margin-bottom: 20px;color: red">
                          
                        </div>
                        <div class="f_row-2">
                            <input type="text" class="input-field" placeholder="Tên đăng nhập" name="username"value=""  required>
                        </div>
                        <div class="f_row-2 last">
                            <input type="password" name="password" placeholder="Mật khẩu" class="input-field" value="" required>
                        </div>
                        <div class="f_row-2 last">
                            <input type="checkbox" class="checkbox" name="remember" checked> Nhớ mật khẩu
                        </div>
                        <input class="submit-w3" type="submit" name="action" value="Đăng nhập">

                    </form>
                </div>              
                <div class="box registerBox wthree">
                    <span class="reg_bg"></span>
                    <h3>Đăng ký</h3>
                    <form class="form" action="ControllerCustomers" method="post">

                        <div class="f_row-2">
                            <input type="text" class="input-field" placeholder="Tên đăng nhập" name="txtUser" required>
                        </div>
                        <div class="f_row-2 last">
                            <input type="password" name="txtPass" placeholder="Mật khẩu" id="password1" class="input-field" required>
                        </div>
                        <div class="f_row-2 last">
                            <input type="password" name="txt" placeholder="Xác nhận mật khẩu" id="password2" class="input-field" required>
                        </div>
                        <input class="submit-w3" type="submit" name="action" value="Đăng ký">
                    </form>
                </div>
                <a href="#" class="regTag icon-add">
                    <i class="fa fa-repeat" aria-hidden="true"></i>

                </a>
            </div>
        </div>
        <!-- //content -->

        <!-- copyright -->
        <div class="footer-w3ls">
            <h2>&copy; 2020 E-Shopping. All Rights Reserved  </h2>
        </div>
        <!-- //copyright -->


        <!-- js files -->
        <!-- Jquery -->
        <script src="resources/js/jquery-2.2.3.min.js"></script>
        <!-- //Jquery -->
        <!-- input fields js -->
        <script src="resources/js/input-field.js"></script>
        <!-- //input fields js -->

        
        <!-- //js files -->


    </body>
</html>