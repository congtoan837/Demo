<%@ page pageEncoding="utf-8"%>
<!doctype html>
<html lang="en">
  <head>
  	<title>Thêm nhân viên</title>
  	<base href="${pageContext.servletContext.contextPath}/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="resources/css/style.css">
		<link rel="stylesheet" href="resources/css/font-awesome.min.css">
  </head>
  <body>
		
		<div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="custom-menu">
					<button type="button" id="sidebarCollapse" class="btn btn-primary">
	          <i class="fa fa-bars"></i>
	          <span class="sr-only">Toggle Menu</span>
	        </button>
        </div>
				<div class="p-4 pt-5">
		  		<h1><a class="logo">ADMIN</a></h1>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">
              <a href="home"><i class="fa fa-home"></i> Trang chủ</a>
	          </li>
	          <li>
              <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-user-secret"></i> Quản lý nhân viên</a>
              <ul class="collapse list-unstyled" id="pageSubmenu1">
                <li>
                    <a href="staff/Add"><i class="fa fa-plus-square"></i> Thêm nhân viên</a>
                </li>
                <li>
                    <a href="staff/List"><i class="fa fa-list-alt"></i> Danh sách nhân viên</a>
                </li>              
              </ul>
	          </li>
	          <li>
              <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-key"></i> Quản lý phòng ban</a>
              <ul class="collapse list-unstyled" id="pageSubmenu2">
                <li>
                    <a href="depart/Add"><i class="fa fa-plus-square"></i> Thêm phòng ban</a>
                </li>
                <li>
                    <a href="depart/List"><i class="fa fa-list-alt"></i> Danh sách phòng ban</a>
                </li>              
              </ul>
	          </li>
	          <li>
              <a href="#pageSubmenu3" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-star"></i> Quản lý thành tích</a>
              <ul class="collapse list-unstyled" id="pageSubmenu3">
                <li>
                    <a href="record/Add"><i class="fa fa-plus-square"></i> Ghi nhận thành tích</a>
                </li>
                <li>
                    <a href="record/List"><i class="fa fa-list-alt"></i> Tổng hợp thành tích</a>
                </li>            
              </ul>
	          </li>
	          <li>
              <a href="#pageSubmenu4" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-user-circle"></i> Quản lý tài khoản</a>
              <ul class="collapse list-unstyled" id="pageSubmenu4">
                <li>
                    <a href="user/Add"><i class="fa fa-plus-square"></i> Thêm tài khoản</a>
                </li>
                <li>
                    <a href="user/List"><i class="fa fa-plus-square"></i> Danh sách tài khoản</a>
                </li>              
              </ul>
	          </li>
	        </ul>

	        <div class="mb-5">
						<h3 class="h6 col text-center">Tiếng Việt | English</h3>
						<form action="#" class="colorlib-subscribe-form">
	            <div class="form-group d-flex">
	            	<div class="icon"></div></div></form></div>

	        <div class="footer">
	        	<p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						  Copyright &copy;<script>document.write(new Date().getFullYear());</script> 
						  All rights reserved | FPT Polytechnic
						  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
	        </div>
	        <div class="col text-center" style="padding-top: 50px">
				<a href="logout"><button type="button" class="btn btn-info btn-lg"> Đăng Xuất</button></a>
				</div>

	      </div>
    	</nav>

        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5 pt-5">

        <h2 class="mb-4">THÊM NHÂN VIÊN</h2>
		  
		  <div class="col-8 mb-4 ">
                                <div class="card shadow">
                                    
                                    <div class="card-body">
                                        <form id="staff" action="staff/Insert" method="POST">
                                            
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Họ Tên :</label> 
                                                <div class="col-10">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </div>
                                                        </div> 
                                                        <input id="name" name="name" placeholder="Họ Tên" class="form-control" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Giới Tính :</label> 
                                                <div class="col-10">
                                                    <select id="gender" name="gender" class="custom-select">
                                                        <option value="Nam">Nam</option>
                                                        <option value="Nữ">Nữ</option>                                          
                                                    </select>
                                                </div>
                                            </div> 
                                            <div class="form-group row">
											    <label for="text3" class="col-2 col-form-label">Ngày Sinh :</label> 
											    <div class="col-10">
											      <input class="form-control" type="date" name="birthday" value="" id="example-date-input">
											    </div>
											  </div>
                                            <div class="form-group row">
											    <label class="col-2 col-form-label">Ảnh :</label> 
											    <div class="col-10">
						 							 <div class="form-group">
												        <input id="photo" name="photo" type="file" class="btn btn-primary" value="">
												    </div>
												</div>
											  </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Email:</label> 
                                                <div class="col-10">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </div>
                                                        </div> 
                                                        <input id="email" name="email" placeholder="Email" class="form-control" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Số Điện Thoại:</label> 
                                                <div class="col-10">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </div>
                                                        </div> 
                                                        <input id="phone" name="phone" placeholder="Số Điện Thoại" class="form-control" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Lương :</label> 
                                                <div class="col-10">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </div>
                                                        </div> 
                                                        <input id="salary" name="salary" placeholder="Nhập Lương" class="form-control" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Ghi Chú :</label> 
                                                <div class="col-10">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </div>
                                                        </div> 
                                                        <input id="note" name="note" placeholder="Ghi Chú" class="form-control" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Phòng Ban :</label> 
                                                <div class="col-10">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </div>
                                                        </div> 
                                                        <input id="departId" name="departId" placeholder="Ghi Chú" class="form-control" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="offset-2 col-10">
                                                    <button name="btnInsert" type="submit" class="btn btn-success">Insert</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
      </div>
		</div>	
	
    <script src="resources/js/jquery.min.js"></script>
    <script src="resources/js/popper.js"></script>
    <script src="resources/js/bootstrap.min.js"></script>
    <script src="resources/js/main.js"></script>
  </body>
</html>