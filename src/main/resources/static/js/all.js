$(document).ready(function() {
    if(localStorage.getItem("token")){
        loadname();
    }
});

function loadname() {

    $.ajax({
        cache: false,
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: API_URL + "/username",
        contentType: "application/json;charset=UTF-8",
        error: function(request) {

        },
        success: function(data) {
            var str = $(`<a href="/my-account"><i class="fa fa-user s_color"></i> Chào, ${data}</a>`);
            $('#account').html(str)
        }

    });

}