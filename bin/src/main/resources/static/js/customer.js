		$(".custom-file-input").on("change", function() {
					var fileName = $(this).val().split("\\").pop();
					$(this).siblings(".custom-file-label").addClass("selected")
							.html(fileName);
				});
		document.querySelectorAll('#btnedit').forEach(item => {
			item.addEventListener('click', e => {
				let Id = e.target.dataset.id;
				let pr = e.target.parentNode.parentNode.parentNode;
				let input1 = pr.getElementsByTagName('td')[0].innerText;
				let input2 = pr.getElementsByTagName('td')[1].innerText;
				let input3 = pr.getElementsByTagName('td')[2].innerText;
				let input4 = pr.getElementsByTagName('td')[3].innerText;
				let input5 = pr.getElementsByTagName('td')[4].innerText;
				let input6 = pr.getElementsByTagName('td')[5].innerText;
				$(".custom-file-label").html("Chọn tệp, bỏ trống nếu muốn giữ");
				$("#inputcustomFile").val("");					
				$("#a").val(input1);
				$("#b").val(input2);
				$("#c").val(input3);
				$("#d").val(input4);
				$("#e").val(input5);
				$("#f").val(input6);
				$("#editform").attr("action", "/admin/editcustomer/" + Id);
			})
		})	
		
		
		$("#btnadd").click(function() {
			$("#1").val("");
			$("#2").val("");
			$("#3").val("");
			$("#4").val("");
			$("#5").val("");
			$("#6").val("");
			$("#7").val("");
});