if(localStorage.getItem("token") == null){
	window.location.href = "/admin";
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    window.location.href = '/admin';
}