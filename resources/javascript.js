$(document).ready(function) {
	
	$("#user-name").click(function() {
		var newName = window.prompt("Enter a new name:");
		$("#user-name").text(newName);
	});

});