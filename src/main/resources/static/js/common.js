if(localStorage.getItem("token") == null){
	window.location.href = "/admin";
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = '/admin';
}