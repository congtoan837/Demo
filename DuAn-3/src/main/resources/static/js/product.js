		$(".custom-file-input").on("change", function() {
					var fileName = $(this).val().split("\\").pop();
					$(this).siblings(".custom-file-label").addClass("selected")
							.html(fileName);
				});
		document.querySelectorAll('#btnedit').forEach(item => {
			item.addEventListener('click', e => {
				let Id = e.target.dataset.id;
				let pr = e.target.parentNode.parentNode.parentNode;
				let name = pr.getElementsByTagName('td')[0].innerText;
				let price = pr.getElementsByTagName('td')[1].innerText;
				let brand = pr.getElementsByTagName('td')[2].innerText;
				let quantity = pr.getElementsByTagName('td')[3].innerText;
				let category = pr.getElementsByTagName('td')[4].innerText;
				let status = pr.getElementsByTagName('td')[5].innerText;
				let description = pr.getElementsByTagName('td')[6].innerText;
				$(".custom-file-label").html("Chọn tệp, bỏ trống nếu muốn giữ");
				$("#inputcustomFile").val("");					
				$("#name").val(name);
				$("#price").val(price);
				$("#brand").val(brand);
				$("#quantity").val(quantity);
				$("#category").val(category);
				$("#status").val(status);
				$("#description").val(description);
				$("#editform").attr("action", "/admin/editproduct/" + Id);
			})
		})	
		
		$("#btnadd").click(function() {
			$("#1").val("");
			$("#2").val("");
			$("#4").val("");
			$("#6").val("");
			$("#7").val("");
});