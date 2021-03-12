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
				rememberme();
				localStorage.setItem("token", data.data.token);
				sessionStorage.setItem("username", data.data.username);
				window.location.href = "/admin/stats";
			}
		});
	}
}

$(document).on('keypress', function(e) {
	if (e.which == 13) {
		login();
	}
});

$(document).ready(function() {
	hadlogin();
    loadremember();
});

function rememberme() {
	if($("#remember").prop('checked') === true){
		var username = $('#username').val();
		var password = $('#password').val();
		// set cookies to expire in 14 days
		$.cookie('username', username, { expires: 14 });
		$.cookie('password', password, { expires: 14 });
		$.cookie('remember', true, { expires: 14 });
	} else {
		// reset cookies
		$.cookie('username', null);
		$.cookie('password', null);
		$.cookie('remember', null);
	}
}

function loadremember() {
	var remember = $.cookie('remember');
	if (remember == 'true') {
		var username = $.cookie('username');
		var password = $.cookie('password');
		var remember = $.cookie('remember');
		// autofill the fields
		$('#username').attr("value", username);
		$('#password').attr("value", password);
		$('#remember').attr('checked','checked')
	}
}

function hadlogin() {
	if(localStorage.getItem("token") !== null){
		window.location.href = "/admin/stats";
	}	
}

